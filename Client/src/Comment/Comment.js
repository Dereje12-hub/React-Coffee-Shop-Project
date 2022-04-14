import { Axios } from 'axios';
import React, {useState} from 'react';
//https://www.youtube.com/watch?v=jwVCgueYcgE&t=0s

const Comment = () => {
   
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleComment = ({target}) => {
        //const {name, value} = target;
        //setComment({[name]:value});
    }

    const submit = (event) =>{
        event.preventDefault();
     
        Axios({
            url: '/apoi/save',
            method: 'POST',
            data: payload
        })
        .then(() => {
            console.log('Data has been sent to the server');
            resetUserInput();
        })
        .catch(() => {
            console.log('Internal Server Error!1');
        })
    };
    

    //Reset user input
    const resetUserInput = () => {
        setTitle('');
        setBody('');
    }
    return (
        <div>
            <h1>Comment</h1>
            
        </div>
    );
}

export default Comment;