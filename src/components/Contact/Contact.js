import { Firestore } from 'firebase/firestore';
import React from 'react'
import {db} from '../firebaseConfig'
import {useState} from 'react';
import {addDoc, collection} from 'firebase/firestore';

const Contact = () => {

    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [message,setMessage] = useState();

    const userCollectionRef = collection (db, "contactdata")



  return (


    <div>
        <p> Contact Form </p>
        <form>
            <label> Full Name </label>
            <input type='text' placeholder= "Enter your full name"/>

            <label> Email Adress </label>
            <input type='email' placeholder= "Enter your email"/>

            <label> Feedback </label>
            <textarea type='text' placeholder= "Enter your message" > </textarea>

        </form>

        <button> Submit </button>
    </div>
  )
}

export default Contact