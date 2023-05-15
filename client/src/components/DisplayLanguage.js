import React, {useState, useEffect} from "react"; 
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom'; 
import moment from "moment";
import "bootstrap/dist/css/bootstrap.css";

const DisplayLanguage = (props) => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [oneLanguage, setOneLanguage] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneLanguage/${id}`)
            .then((res) => {
                console.log(res);
                setOneLanguage(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/deleteLanguage/${id}`)
            .then((res) => {
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return(
        <div>
            <br/>
            <div className='d-flex justify-content-evenly'>
                <div class="border border-primary rounded text-center">
                    <h2 className="text-center display-4"> {oneLanguage.langName}</h2>
                    <h3>Language Level: {oneLanguage.langLevel}</h3>
                    <h3>Tutor: {oneLanguage.langTutor}</h3>
                    <h3>Reason For Learning: {oneLanguage.langReasontoLearn}</h3>
                    <h3>Language Progress: {oneLanguage.langProgress}%</h3>
                    <h3>Words Learned: {oneLanguage.langWordsLearned}</h3>
                    <h3>Deadline: {moment(oneLanguage.langDeadline).format('MMMM DD YYYY, h:mm:ss a')}</h3>
                    <br/>
                    <div className="d-flex justify-content-evenly">
                        <p className='text-end'><Link to={'/'}>Back to Home</Link></p> 
                        <button onClick={() => deleteHandler(oneLanguage._id)} className="btn btn-outline-danger">Stop Learning {oneLanguage.langName}</button>
                    </div>
                    <br/>
                </div>
                {/* <div class="border border-primary rounded text-center">
                    <h2 className="text-center display-4">Tutor</h2>
                    <h5>About {oneLanguage.langTutor}</h5>
                </div> */}
            </div>
            
        </div>
    
)}

export default DisplayLanguage;