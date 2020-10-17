import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import imgPlaceholder from "../../assets/imgplaceholder.png";
import spinner from "../../assets/spinner.svg";

import {
  PreviewImage,
  FormNewPost,
  UploadButton,
  InputContainer,
  Title,
  Subtitle,
} from "./styles";

import { asyncStorePost } from "../../store/modules/posts/actions";

export default function New() {
  //hooks
  const hiddenFileInput = useRef(null);
  const dispatch = useDispatch();
  const [newPost, setNewPost] = useState({
    author: "",
    place: "",
    description: "",
    hashtags: "",
    image: "",
  });
  const storePostLoading = useSelector(state => state.posts.loadingSubmit);

  const onPictureUpload = e => {
    const newImage = e.target.files[0];
    setNewPost({ ...newPost, image: newImage });
    displayUploadedPicture(newImage);
  };

  const displayUploadedPicture = image => {
    if (FileReader && image) {
      const fr = new FileReader();
      fr.onload = () => {
        document.getElementById("upload-preview").src = fr.result;
      };
      fr.readAsDataURL(image);
    }
    // Not supported
    else {
      //Fallback upload
    }
  };

  const handleClick = event => {
    hiddenFileInput.current.click();
  };

  const handleCreateNewPost = e => {
    e.preventDefault();
    dispatch(asyncStorePost(newPost, { redirectPath: "/" }));
    setNewPost({
      author: "",
      place: "",
      description: "",
      hashtags: "",
      image: "",
    });
  };

  let timeout = null;
  function handleInputChange(e) {
    const { name, value } = e.target;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setNewPost({ ...newPost, [name]: value });
    }, 100);
  }

  return (
    <div>
      <Title>Novo post</Title>
      <Subtitle>Escolha a imagem:</Subtitle>
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
              value={newPost.author}
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="">Local:</label>
            <input
              type="text"
              name="place"
              placeholder="digite o local"
              onChange={handleInputChange}
              value={newPost.place}
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="">Descricão:</label>
            <input
              type="text"
              name="description"
              placeholder="digite a descricao"
              onChange={handleInputChange}
              value={newPost.description}
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="">Hashtags:</label>
            <input
              type="text"
              name="hashtags"
              placeholder="digite as hashtags"
              onChange={handleInputChange}
              value={newPost.hashtags}
            />
          </InputContainer>
          <UploadButton onClick={handleCreateNewPost}>
            {!storePostLoading ? (
              "Salvar"
            ) : (
              <img height="50" src={spinner} alt="" />
            )}
          </UploadButton>
        </FormNewPost>
      </div>
    </div>
  );
}
