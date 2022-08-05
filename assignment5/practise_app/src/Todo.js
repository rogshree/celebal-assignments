import React, { useState } from 'react'

const Todo = () => {
    const [inputitem,setInputitem] = useState("")
    const [items,setItems] = useState([])
    const [toggleitem, setToggleitem] = useState(true)
    const [isedit, setIsedit] = useState(null)
    function toggleTodoCompleteAtIndex(index){
        const temporaryTodos = [...items];
        temporaryTodos[index].isDone = !temporaryTodos[index].isDone;
        setItems(temporaryTodos);
    }
    const addItems = ()=>{
        if(!inputitem)
        {
            alert('plz fill the data')
        }
        else if(inputitem && !toggleitem)
        {
            setItems(items.map((elem)=>{
                if(elem.id == isedit){
                return{...items,name:inputitem}
            }
                return elem;
            })
            )
            setInputitem("")
        setToggleitem(true)
        setIsedit(null)
        }
        else
        {
            const itemobj = {name:inputitem,id:new Date().getTime().toString(),isDone:false}
            setItems([...items,itemobj])
            setInputitem("")
        }
    }
    const deleteitem =(posi)=>{
        const updatedlist = items.filter((el)=>{
            return el.id != posi
        })
        setItems(updatedlist)
    }
    const editable =(edit_id)=>{
        const updateitem = items.find((elem)=>{
            return elem.id == edit_id
        })
        setInputitem(updateitem.name)
        setToggleitem(false)
        setIsedit(edit_id)
    }
  return (
    <>
 <div className="allinone">
    <div className="heading"><h1>TODO</h1></div>
    <div className="maintext" id="mainarea">
    <input type="text" placeholder="Text Here" id="notetaking" value={inputitem} onChange={(e) => setInputitem(e.target.value)}/>
       {
            toggleitem ? <button id="add" onClick={addItems}>Add</button> : <button id="add" onClick={addItems}>Save</button>

       } 

    
    </div>
        
            {
            items.map((elem, pos)=>{
               return(
                <div className="maintext saves" id="saves" key={elem.id}>
               <input className={elem.isDone?"todo-is-completed":"false"} type="text" placeholder="Text" defaultValue={elem.name} onClick={()=>toggleTodoCompleteAtIndex(pos)} readOnly={true}/>
                <button className="change edit" onClick={()=>editable(elem.id)}>edit</button>
                <button className="change delete" onClick={()=>deleteitem(elem.id)}>delete</button>
                </div>
               );
            })
            
            }   
        
  </div>
  </>
  );
}

export default Todo
