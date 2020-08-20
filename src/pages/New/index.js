import React, { useState } from "react";
import imgPlaceholder from "../../assets/imgplaceholder.png";
import FormNew from "../../components/FormNew";
import { PreviewImage } from "./styles";


export default function New() {
  const hiddenFileInput = React.useRef(null);

  const [picture, setPicture] = useState("");

  function onPictureUpload(e) {
    console.log("onPictureUpload -> value", e.target.files[0]);
    const newPicture = e.target.files[0];
    setPicture(newPicture);

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
  }

  const handleClick = event => {
    hiddenFileInput.current.click();
  };

  const handleChildChange = (e) =>{
  console.log("consthandleChildChange -> e", e)

  }

  return (
    <div>
      <PreviewImage
      onClick={handleClick}
      >
        <img id="upload-preview" src={picture || imgPlaceholder} alt="" />
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
      {/* <UploadButton onClick={handleClick}>Novo</UploadButton> */}
      <FormNew handleChildChange={handleChildChange}/>
    </div>
  );
}
