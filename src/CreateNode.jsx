import React,{useState} from "react";

const CreateNode = (props) =>
{    // const[expand,setExpand] = useState(false);
    const[note,setNote] = useState({
        title:"",
        content:""
    });

    const InputEvent = (event) =>
    {
        // const value = event.target.value;
        // const name = event.target.name;

        const{name,value} = event.target


        setNote((prevdata)=>
        {
            return{
                ...prevdata,
                [name]:value,
            }
        });
    };

const addEvent = (event) =>
{     event.preventDefault();
      props.passNote(note);
      setNote({
        title:"",
        content:""
    });
};
// const expandIt = () =>
// {
//    setExpand(true);
// };

    return(
    <>
    <div className="main_note">
        <form >
            <div className="inputfield">

            <div>
            <input 
            type="text" 
            name="title"
            value={note.title}
            onChange={InputEvent}
            placeholder="Enter the Title"
             autoComplete="off" 
             /> 
            </div>
            
            <div>
            <textarea 
            value={note.content}
            onChange={InputEvent}
            name="content" 
            id="" 
            cols=""
            rows="" 
            placeholder="Write a note..."
            //onClick={expandIt}
            >
            
            </textarea>
           
            </div>
            
            
           <div>
           <button onClick={addEvent} id ="btn"> Add  </button>
           </div>
            
            
            </div> 
                 
           
        </form>
    </div>
    </>
    );
}

export default CreateNode;