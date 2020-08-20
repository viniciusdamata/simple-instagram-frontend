import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import imgPlaceholder from "../../assets/imgplaceholder.png";
import {
  PreviewImage,
  FormNewPost,
  UploadButton,
  InputContainer,
} from "./styles";

export default function New() {
  //hooks
  const hiddenFileInput = useRef(null);
  const dispatch = useDispatch();
  const [newPost, setNewPost] = useState({
    author: "",
    place: "",
    description: "",
    hashtags: "",
    picture: "",
  });

  const onPictureUpload = e => {
    const newPicture = e.target.files[0];
    setNewPost({ ...newPost, picture: newPicture });
    displayUploadedPicture(newPicture);
  };

  const displayUploadedPicture = newPicture => {
    if (FileReader && newPicture) {
      var fr = new FileReader();
      fr.onload = () => {
        document.getElementById("upload-preview").src = fr.result;
      };
      fr.readAsDataURL(newPicture);
    }
    // Not supported
    else {
      //Fallback upload
    }
  };

  const handleClick = event => {
    hiddenFileInput.current.click();
  };

  const handleCreateNewPost = (e) => {
    e.preventDefault()
    dispatch({
      type: "CREATE_POST",
      payload: {
        newPost: { ...newPost, id: parseInt(Math.random() * 999) },
      },
    });
  };

  function handleInputChange(e) {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  }

  return (
    <div>
      <PreviewImage onClick={handleClick}>
        <img
          id="upload-preview"
          src={newPost.picture || imgPlaceholder}
          alt=""
        />
      </PreviewImage>
      <input
        ref={hiddenFileInput}
        style={{ display: "none" }}
        type="file"
        accept="image/*"
        name="file"
        onChange={onPictureUpload}
        capture="camera"
      ></input>
      <div>
        <FormNewPost action="">
          <InputContainer>
            <label htmlFor="">Autor:</label>
            <input
              type="text"
              name="author"
              placeholder="digite o nome do autor"
              onChange={handleInputChange}
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="">Local:</label>
            <input
              type="text"
              name="place"
              placeholder="digite o local"
              onChange={handleInputChange}
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="">Descricão:</label>
            <input
              type="text"
              name="description"
              placeholder="digite a descricao"
              onChange={handleInputChange}
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="">Hashtags:</label>
            <input
              type="text"
              name="hashtags"
              placeholder="digite as hashtags"
              onChange={handleInputChange}
            />
          </InputContainer>
          <UploadButton onClick={handleCreateNewPost}>Salvar</UploadButton>
        </FormNewPost>
      </div>
    </div>
  );
}
