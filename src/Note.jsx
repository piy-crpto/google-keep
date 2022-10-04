import React from "react";

const Note = (props) =>
{     
    const deleteNote = (event)=>
    {    event.preventDefault();
        props.deleteItem(props.id);
    }
    return <>
    <div className="flexnote">
    <div className="note">
        
        <div ><h3>{props.title}</h3></div>
         <div><p>{props.content}</p></div>

        <div><button className="btn" onClick={deleteNote} >
            Delete
        </button></div>
       
        </div>
    </div>
    
    </>;
}

export default Note;