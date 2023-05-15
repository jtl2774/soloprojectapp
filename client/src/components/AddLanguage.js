import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
const AddLanguage = (props) => {
    const navigate = useNavigate()
    const [language, setLanguage] = useState({
        langName:'',
        langLevel:'',
        langTutor:'',
        langDeadline: '',
        langWordsLearned:'',
        langReasontoLearn: ''
    })
    const [errors, setErrors] = useState({});

    const changeHandler = (e) => {
        setLanguage({...language, [e.target.name]:e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/newLanguage', language)
            .then((res) => {
                console.log(res);
                navigate('/')
            })
            .catch((err) => {
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            })
        }

    return (
        <div>
            <br/>
            <h2>On the road to new heights...</h2>
            <h6>Fill out the following form to the best of your knowledge and begin learning immediately!</h6>
            <br/>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label>Language:</label>
                    <select className='form-control'name='langName'onChange={changeHandler} value={language.langName}>
                        <option value={"French"}>French</option>
                        <option value={"Korean"}>Korean</option>
                        <option value={"Spanish"}>Spanish</option>
                        <option value={"Chinese"}>Chinese</option>
                        <option value={"German"}>German</option>
                        <option value={"Russian"}>Russian</option>
                        <option value={"Vietnamese"}>Vietnamese</option>
                        <option value={"Portuguese"}>Portuguese</option>
                        <option value={"Italian"}>Italian</option>
                        <option value={"Japanese"}>Japanese</option>
                    </select>
                    {
                        errors.langName?
                        <p className='text-danger'>{errors.langName.message}</p>:
                        null
                    }
                </div>
                <br/>
                <div className="form-group">
                    <label>Mastery Level:</label>
                    <select class="form-control" name='langLevel' onChange={changeHandler} value={language.langLevel}>
                        <option value={"A1"}>A1</option>
                        <option value={"A2"}>A2</option>
                        <option value={"B1"}>B1</option>
                        <option value={"B2"}>B2</option>
                        <option value={"C1"}>C1</option>
                        <option value={"C2"}>C2</option>
                    </select>
                    {
                        errors.langLevel?
                        <p className='text-danger'>{errors.langLevel.message}</p>:
                        null
                    }
                </div>
                <br/>
                <div className="form-group">
                    <label>Tutor:</label>
                    <select class="form-control" name='langTutor' onChange={changeHandler} value={language.langTutor}>
                        <option value={"Francis Beaujard"}>Francis Beaujard</option>
                        <option value={"Seoyoung Kim"}>Seoyoung Kim</option>
                        <option value={"Nora Jimenez"}>Nora Jimenez</option>
                        <option value={"Dora Li"}>Dora Li</option>
                        <option value={"Savannah Rogowski"}>Savannah Rogowski</option>
                        <option value={"Tory Polancich"}>Tory Polancich</option>
                        <option value={"Mary Nguyen"}>Mary Nguyen</option>
                        <option value={"Debora Santos"}>Debora Santos</option>
                        <option value={"Alex Russo"}>Alex Russo</option>
                        <option value={"Akali Yoshiteru"}>Akali Yoshiteru</option>
                    </select>
                    {
                        errors.langTutor?
                        <p className='text-danger'>{errors.langTutor.message}</p>:
                        null
                    }
                </div>
                <br/>
                <div className="form-group">
                    <label>Reason For Learning:</label>
                    <input className='form-control' type="text" name='langReasontoLearn' onChange={changeHandler} value={language.langReasontoLearn} placeholder='Input primary reason'/>
                    {
                        errors.langReasontoLearn?
                        <p className='text-danger'>{errors.langReasontoLearn.message}</p>:
                        null
                    }
                </div>
                <br/>
                <div className="form-group">
                    <label>Words Desired to Learn:</label>
                    <input className='form-control' type="number" name='langWordsLearned' onChange={changeHandler} value={language.langWordsLearned} placeholder='Input an estimated number of words to master'/>
                    {
                        errors.langWordsLearned?
                        <p className='text-danger'>{errors.langWordsLearned.message}</p>:
                        null
                    }
                </div>
                <br/>
                <div className="form-group">
                    <label>Deadline Date:</label>
                    <input className='form-control' type="date" name='langDeadline' onChange={changeHandler} value={language.langDeadline}/>
                    {
                        errors.langDeadline?
                        <p className='text-danger'>{errors.langDeadline.message}</p>:
                        null
                    }
                </div>                
                <br/>
                <button className='btn btn-success'>Add New Language to Learning Goals</button>
            </form>
        </div>
)}

export default AddLanguage;