import React, { useState } from "react";
import { FormControl, FilledInput, InputAdornment } from "@material-ui/core";
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { postMessage } from "../../store/utils/thunkCreators";

const useStyles = makeStyles(() => ({
  root: {
    justifySelf: "flex-end",
    marginTop: 15
  },
  input: {
    height: 70,
    backgroundColor: "#F4F6FA",
    borderRadius: 8,
    marginBottom: 20
  },
  icon: {
    color: "#b4c2de",
    cursor: "pointer",
    '&:hover': {
      color: "#F4F6FA"
    }
  }
}));

const Input = (props) => {
  const classes = useStyles();
  const [text, setText] = useState("");
  const [images, setImages] = useState([]);
  const { postMessage, otherUser, conversationId, user } = props;

  const handleChange = (event) => {
    setText(event.target.value);
  };

  
  const imageWidget = window.cloudinary.createUploadWidget({
    cloudName: 'savwileycloud', 
    uploadPreset: 'hatchwaysPreset',
  }, (error, result) => { 
    if (!error && result && result.event === "success") { 
      console.log('Done! Here is the image info: ', result.info); 
      setImages(images => [...images, result.info.url]);
    }
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    // add sender user info if posting to a brand new convo, so that the other user will have access to username, profile pic, etc.
    const reqBody = {
      text: event.target.text.value,
      recipientId: otherUser.id,
      conversationId,
      sender: conversationId ? null : user,
      attachments: images.length > 0 ? images : null,
    };
    await postMessage(reqBody);
    setText("");
    setImages([]);
  };

  return (
    <>
    <form className={classes.root} onSubmit={handleSubmit}>
      <FormControl fullWidth hiddenLabel>
        <FilledInput
          classes={{ root: classes.input }}
          disableUnderline
          placeholder="Type something..."
          value={text}
          name="text"
          onChange={handleChange}
          endAdornment={<InputAdornment position="end">
            <FileCopyOutlinedIcon onClick={() => imageWidget.open()} className={classes.icon}/>
          </InputAdornment>}
        />
      </FormControl>
    </form>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    postMessage: (message) => {
      dispatch(postMessage(message));
    },
  };
};

export default connect(null, mapDispatchToProps)(Input);
