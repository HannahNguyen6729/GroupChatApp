import React, {useState} from "react";
import {useSelector, useDispatch} from 'react-redux';
import { addComment } from "../ChatAppRedux/Actions/ChatAppActions";

export default function ChatAppRedux() {
    const [input, setInput] = useState({id:0 ,name:'', content:''});
    let arrayChats = useSelector(state =>  state.ChatAppReducer);
    let dispatch = useDispatch();

    const handleOnChange= (e)=>{
        let {name, value} = e.target;
        setInput({
            ...input,
            [name]: value,
        })
    }
    const handleSubmit =(e) =>{
        e.preventDefault();
        let payload = {...input, id:Date.now() ,avatar: `https://i.pravatar.cc/150?${input.name}`}
        dispatch(addComment(payload))
    }
return (
  <div style={{minHeight: 800, backgroundSize: 'cover',backgroundImage: 'url("https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/02/Untitled-design-1.jpg?q=50&fit=crop&w=750&dpr=1.5")'}}>
    <div className="container px-5" >
      <h1 className='text-center p-4 text-success'>Demon Slayer Group Chat!</h1>
      <div className="card text-left" style={{backgroundColor:'rgba(0,0,0,0.8)'}}>
        <div className="card-header">
           {arrayChats.map((item,index) =>(
                <div className="row my-2" key={index}>
                <div className="col-1">
                <img src={item.avatar} style={{ width: 90}} className="card-img-top rounded-circle" alt={item.id}/>
                </div>
                <div className="col-11 pl-4 ">
                   <div className='border border-success rounded-pill pl-5 pt-2'>
                        <h4 className='text-success'>{item.name}</h4>
                        <p className='text-light'>{item.content}</p>
                   </div>
                </div>
            </div>
           ))}
        </div>
        <form className="card-body text-success" onSubmit ={handleSubmit} >
            <div className="form-group ">
                <h4 className="card-title">Name</h4>
                <input type="text" className="form-control bg-transparent text-light" name='name' onChange= {handleOnChange}/>
            </div>
            <div className="form-group">
                <h4 className="card-title">Content</h4>
                <input type="text" className="form-control bg-transparent text-light" name='content' onChange={handleOnChange}/>
            </div>
            <div className="form-group mt-4">
                <button className="btn btn-success">Submit</button>
            </div>
        </form>
      </div>
    </div>
   </div>
  );
}
