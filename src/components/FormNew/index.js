import React, { useState } from "react";

export default function FormNew({handleChildChange}) {
  const [form, setForm] = useState({
    author: "",
    place: "",
    description: "",
    hashtags: "",
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setForm({...form, [name]: value})
    console.log("handleInputChange -> name, value", name, value);
    handleChildChange(form)
  }

  return (
    <div>
      <form action="">
        <label htmlFor="">autor:</label>
        <input type="text" name="author" onChange={handleInputChange} />
        <label htmlFor="">Local:</label>
        <input type="text" name="place" onChange={handleInputChange} />
        <label htmlFor="">descricão:</label>
        <input type="text" name="description" onChange={handleInputChange} />
        <label htmlFor="">hashtags:</label>
        <input type="text" name="hashtags" onChange={handleInputChange} />
        <button>Salvar</button>
      </form>
    </div>
  );
}
