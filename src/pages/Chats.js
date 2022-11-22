import React,{useState} from "react";

const Chats = () => {
    const [chats, setChats]=useState(
        [
            {id:1,
            name:"Serg"},
            {
                id:2,
                name:'Katy'
            }
        ]
    );
        const [name, setName]=useState()
        const handleAdd=()=>{
            const obj={
                id:Date.now(),
                name:name
            }
            setChats(prevState=>[...prevState, obj])
        }
    const handleDelete=(id)=>{
        const filterChats=chats.filter((item)=>item.id!==id);
        setChats(filterChats);
    }


  return (
    <div className="chats">
      Chats
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleAdd}>add</button>
      {chats.map((chat) => {
        return (
          <div>
            <h3>{chat.name}</h3>
            <button onClick={() => handleDelete(chat.id)}>x</button>
          </div>
        );
      })}
    </div>
  );
};
export default Chats;
