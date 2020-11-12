import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import AddForm from "./addForm";


const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors }) => {
  console.log(colors);
  const [editing, setEditing] = useState(false);
  const[adding,SetAdding] =useState(false)
  const [colorToEdit, setColorToEdit] = useState(initialColor);
 
  // let {id}= useParams();
  // let activeColor = colors.find(item=>item.id===colorToEdit.id)
  // console.log('active color id ',activeColor)

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  const saveEdit = e => {
    e.preventDefault();
    // Make a put request to save your updated color
    // think about where will you get the id from...
    // where is is saved right now?
    axiosWithAuth()
    .put(`http://localhost:5000/api/colors/${colorToEdit.id}`,colorToEdit)
    .then(res=>{
      updateColors(colors.map(color => 
        color.id === res.data.id ? res.data : color
    ));
        setEditing(false)
    })
    .catch(err=>{
      console.log(err)
    })
  };

  const deleteColor = color => {
    // make a delete request to delete this color
    axiosWithAuth()
    .delete(`http://localhost:5000/api/colors/${color.id}`)
    .then(res => {
      console.log("delete", res.data)
      updateColors(colors.filter(color => {
        return color.id !== res.data
      }))
    })
  };
  const addBubble =newBubble=>{
    axiosWithAuth()
    .post(`http://localhost:5000/api/colors/`,newBubble)
    .then(res => {
      console.log("Add new bubble ", res.data)
      updateColors() 
    })
    .catch(err=>{
      console.log(err)
    })

  }

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => (
          <li key={color.color} onClick={() => editColor(color)}>
            <span>
              <span className="delete" onClick={e => {
                    e.stopPropagation();
                    deleteColor(color)
                  }
                }>
                  x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>edit color</legend>
          <label>
            color name:
            <input
              onChange={e =>{
                setColorToEdit({ ...colorToEdit, color: e.target.value })
              }
              }
              value={colorToEdit.color}
            />
          </label>
          <label>
            hex code:
            <input
              onChange={e =>
                setColorToEdit({
                  ...colorToEdit,
                  code: { hex: e.target.value }
                })
              }
              value={colorToEdit.code.hex}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}

      {adding==false ? <AddForm addBubble={addBubble}
      colorToEdit={colorToEdit}
      setColorToEdit={setColorToEdit}
      setEditing={setEditing} adding={adding} />:null} 
      <div className="spacer" />
      {/* stretch - build another form here to add a color */}
      

    </div>
  );
};

export default ColorList;
