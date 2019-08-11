import React from 'react';

import EncryptDecryptForm from '../../components/encrypt-decrypt-form/encrypt-decrypt-form.component';
import {Answer} from '../../components/answer/answer.component';

export class EncryptPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            key: 0,
            text: '',
            showAnswer: false,
            answerText: ''
        }
    }

    handleSubmit = () => {

        const key = this.state.key;
        const text = this.state.text;

        if (key > 40) alert('Enter a key below 40 please') 
        else { 
            let encryptedCode=[];
            let encryptedText=[];
            let asciiCode;
            let asciiEncrypted;
    
            //split the text into an array
            let textArray = text.split('');
    
            //loop through all characters of the array
            for (let i = 0; i < textArray.length; i++){
                
                //Transform each character to it's ascii code
                asciiCode = textArray[i].charCodeAt(0);
    
                if (asciiCode%2 > 0) {
                    //if the ascii code isn't even - remove n (value of key) from it
                    asciiEncrypted = asciiCode- +key;
                } else{
                    //if it is even - add n (value of key) to it
                    asciiEncrypted = asciiCode+ +key;
                }
                //add each (encrypted) ascii code to an array
                encryptedCode.push(asciiEncrypted);
            }
    
            //transform each ascii code to it's character
            for (let i = 0; i < encryptedCode.length; i++){
                 
                let asciiToText = String.fromCharCode(encryptedCode[i]);
                
                //add each new character to another array that contains the encrypted characters
                encryptedText.push(asciiToText);
            }
            //make a string out of the array of the encrypted characters
            let finished = encryptedText.join('');

            this.setState({answerText: finished});
            this.setState({showAnswer: true});
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }
    
    render(){
        const answerText = this.state.answerText;
        return(
            <div>
                <EncryptDecryptForm title="Encrypt Text" handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
                <Answer show={this.state.showAnswer} text={answerText} textIs="Encrypted" />
            </div>
            
        )
    } 
}