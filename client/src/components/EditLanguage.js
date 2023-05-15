import React, {useEffect, useState} from 'react';
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';
import moment from 'moment';
const EditLanguage = (props) => {
    const [language, setLanguage] = useState({
        langName: '',
        langLevel:'',
        langTutor:'',
        langDeadline: '',
        langWordsLearned:'',
        langProgress: ''
    });
    const [errors, setErrors] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneLanguage/${id}`)
            .then((res) => {
                console.log(res);
                setLanguage(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    },[])

    const changeHandler = (e) => {
        setLanguage({...language, [e.target.name]: e.target.value}) 
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/updateLanguage/${id}`, language)
            .then((res) => {
                console.log(res);
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors)
            })
    }

    return (
        <div>
            <br/>
            <form onSubmit={submitHandler}>
                <h2 className="text-start">Edit {language.langName} </h2>
                <div className="form-group row">
                    <label class="col-sm-2 col-form-label">Level: </label>
                    <div class="col-sm-10">
                        <select class="form-control" name='langLevel' onChange={changeHandler} value={language.langLevel}>
                            <option value={"A1"}>A1</option>
                            <option value={"A2"}>A2</option>
                            <option value={"B1"}>B1</option>
                            <option value={"B2"}>B2</option>
                            <option value={"C1"}>C1</option>
                            <option value={"C2"}>C2</option>
                        </select>
                    </div>
                    {
                        errors.langLevel?
                        <p className='text-danger'>{errors.langLevel.message}</p>:
                        null
                    }
                </div>
                <br/>
                <div className="form-group row">
                    <label class="col-sm-2 col-form-label">Deadline Date:</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" name='langDeadline' onChange={changeHandler} value={moment(language.langDeadline).format('MMMM DD YYYY, h:mm:ss a')}/>
                    </div>
                    {
                        errors.langDeadline?
                        <p className='text-danger'>{errors.langDeadline.message}</p>:
                        null
                    }
                </div>
                <br/>
                <div className="form-group row">
                    <label class="col-sm-2 col-form-label">Progress (%):</label>
                    <div class="col-sm-10">
                        <input type="number" class="form-control" name='langProgress' onChange={changeHandler} value={language.langProgress}/>
                    </div>
                    {
                        errors.langProgress?
                        <p className='text-danger'>{errors.langProgress.message}</p>:
                        null
                    }
                </div>
                <br/>
                <div className="form-group row">
                <label class="col-sm-2 col-form-label">Words Learned:</label>
                    <div class="col-sm-10">
                        <input type="number" class="form-control" name='langWordsLearned' onChange={changeHandler} value={language.langWordsLearned}/>
                    </div>
                    {
                        errors.langWordsLearned?
                        <p className='text-danger'>{errors.langWordsLearned.message}</p>:
                        null
                    }
                </div>
                <br/>
                <button  type="submit"  class="btn btn-primary">Submit</button>
            </form>
        </div>
)}

export default EditLanguage;