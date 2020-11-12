import React from 'react'

const AddForm = ({addBubble,colorToEdit,setColorToEdit,setEditing,setAdding,adding})=>{

    


    return(
        <div>
                <form onSubmit={()=>{addBubble(colorToEdit)}}>
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
               {adding===false?<button onClick={()=>{
                    addBubble(colorToEdit);
                    setAdding(true)}}>Add New Bubble</button>:null} 
                <button onClick={() => setEditing(false)}>cancel</button>
                </div>
                </form>
        </div>
    )
}


export default AddForm