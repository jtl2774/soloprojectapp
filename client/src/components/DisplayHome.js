import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import moment from 'moment';


const DisplayHome = (props) => {
    const [allLanguages, setAllLanguages] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/allLanguages')
            .then((res) => {
                console.log(res);
                setAllLanguages(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/deleteLanguage/${id}`)
            .then((res) => {
                console.log(res);
                const updatedLanguages = allLanguages.filter((language) => language._id !== id)
                setAllLanguages(updatedLanguages)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>
            <h1 className='text-start display-4'>Hello! Bonjour! 你好! Aloha! สวัสดี! Hola! Привет! 안녕하세요! Ahoj! Ciao! こんにちは! Hallo... </h1>
            <br/>
            <div className='d-flex justify-content-between'>
                <h4 className='fw-bold'>You are currently learning the following languages...</h4>
                <Link className='btn btn-outline-primary' to={`/addNewLanguage`}>Add New Language to Learn</Link>
            </div>
            <br/>
            <div className='d-flex justify-content-between row'>
                {
                    allLanguages.map((language) => (
                        <div key={language._id} className='border border-2 border-info rounded p-3 mb-2 bg-light text-dark'>
                            <div>
                                <h2>Name: <span color='blue'><Link to={`/oneLanguage/${language._id}`}>{language.langName}</Link></span></h2>
                            </div>
                            
                            <h2>Level: {language.langLevel}</h2>
                            <h2>Tutor: {language.langTutor}</h2>
                            <h2>Goal Deadline: {moment(language.langDeadline).format('MMMM DD YYYY, h:mm:ss a')}</h2>
                            <br />
                            <div className='d-flex justify-content-around'>
                                <button onClick={() => deleteHandler(language._id)} className='btn btn-danger'>Stop Learning</button>
                                <Link to={`/oneLanguage/${language._id}`}><h3>More Info</h3></Link>
                                <Link className='btn btn-info' to={`/updateLanguage/${language._id}`}>Edit Language Info</Link>
                            </div>
                            
                        </div>
                    ))
                }
            </div>
        </div>
)}

export default DisplayHome;