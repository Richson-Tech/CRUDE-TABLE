import React, {useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from './Employess';
import {v4 as uuid} from 'uuid';
import {Link,useNavigate} from 'react-router-dom'


function Add(){
const[name, setName] = useState('');
const[Ratings, setRatings] = useState('');
const[Summary, setSummary] = useState('');

let history = useNavigate();
const handleSubmit =(e) =>{
 e.preventDefault();   

 const ids = uuid();
 let uniqueId = ids.slice(0, 8);

 let a = name,
 b = Ratings,
 c = Summary

 Employees.push({id: uniqueId, Name : a, Ratings : b, Summary : c});
 history('/');
}

return <div>
<form className='d-grid gap-2' style={{margin:'15rem'}}>
<Form.Group className='mb-3' controlId='formName'>
<Form.Control type='text' placeholder='Enter Name' required onChange={(e) => setName(e.target.value)}>

</Form.Control>
</Form.Group>

<Form.Group className='mb-3' controlid='formRatings'>
<Form.Control type='text' placeholder='Enter Rating' required onChange={(e) => setRatings(e.target.value)}>

</Form.Control>
</Form.Group>


<Form.Group className='mb-3' controlid='formSummary'>
<Form.Control type='text' placeholder='Enter Summary' required onChange={(e) => setSummary(e.target.value)}>

</Form.Control>
</Form.Group>
<Button onClick={(e)=>handleSubmit(e)} type='submit'>Submit</Button>
</form>
</div>
}

export default Add 