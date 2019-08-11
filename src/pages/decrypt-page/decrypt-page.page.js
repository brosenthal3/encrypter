import React from 'react';

import EncryptDecryptForm from '../../components/encrypt-decrypt-form/encrypt-decrypt-form.component';
import { Answer } from '../../components/answer/answer.component';

export class DecryptPage extends React.Component{
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
        //declare all needed variables
        const key = this.state.key;
        const text = this.state.text;

        let decryptedCode=[];
        let decryptedText=[];
        let asciiCodeD;
        let asciiDecrypted;

        //split the text intro an array
        let textArrayD=text.split('');

        for (let i = 0; i < textArrayD.length; i++){
            
            //Transform each character into it's ascii code
            asciiCodeD = textArrayD[i].charCodeAt(0);

            //check if the key is even or odd
            if (key%2 === 0) {
                if ((asciiCodeD-key)%2 > 0) {
                    //if it it's odd - add n (value of key) to the code
                    asciiDecrypted = asciiCodeD+ +key;
                } else{
                    //if it is even - remove n (value of key) from the code
                    asciiDecrypted = asciiCodeD- +key;
                }
            }else{
                if ((asciiCodeD-key)%2 > 0) {
                    //if it it's odd - remove n (value of key) to the code
                    asciiDecrypted = asciiCodeD+ +key;
                } else{
                    //if it is even - add n (value of key) from the code
                    asciiDecrypted = asciiCodeD- +key;
                }
            }
            //add each (decrypted) ascii to an array
            decryptedCode.push(asciiDecrypted);
        }

        //transform each ascii code to it's character
        for (let i = 0; i < decryptedCode.length; i++){
            let asciiTotext = String.fromCharCode(decryptedCode[i]);
            //add the decrypted character to an array
            decryptedText.push(asciiTotext);
        }

        //make a string out of the array of the decrypted characters
        let finished = decryptedText.join('');

        this.setState({answerText: finished});
        this.setState({showAnswer: true});
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }
    
    render(){
        const answerText = this.state.answerText;
        return(
            <div>
                <EncryptDecryptForm title="Decrypt Text" handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
                <Answer show={this.state.showAnswer} text={answerText} textIs="Decrypted" />
            </div>
            
        )
    } 
}