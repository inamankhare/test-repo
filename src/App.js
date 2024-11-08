import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const[formdata,setformdata] = useState({
    name:"",surname:"",email:""
  })

  

function changeHandler(e){
  setformdata(prevformdata=>{
    return{
      ...prevformdata,
    [e.target.name]:e.target.value
    }
  });

}

function clearHandler(){
  
 setformdata({name:"",surname:"",email:""})

}



function submitHandler(e){
  e.preventDefault();
  console.log(formdata)

  alert('Form Submitted')
}

  return (
    <div className="App">
      <h1>React form</h1>
      <form className='form' onSubmit={submitHandler}>
      <div className='form-inputs'>
      <input 
        type='text' 
        placeholder='Your Name'
        onChange={changeHandler}
        name='name'
        value={formdata.name}
    />

    <input

    type='text'
    name='surname'
    onChange={changeHandler}
    value={formdata.surname}
    placeholder='surname'
    
    />

<input

type='email'
name='email'
onChange={changeHandler}
value={formdata.email}
placeholder='email'

/>


<div className='BTN'>
<button className='stbtn' onSubmit={changeHandler}>
  Submit
</button>

<button className='clrbtn' onClick={clearHandler}>
  Clear
</button>
</div>
     
    </div>

    
      


      </form>

      
      </div>
  

  );
}

export default App;
