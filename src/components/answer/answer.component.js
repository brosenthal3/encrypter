import React from 'react';
import './answer.scss';
import { Button } from '../button/button.component';

export class Answer extends React.Component {
    copyText = () => {
        let toCopy = this.props.text;
        let newTextarea = document.createElement('textArea');
        newTextarea.value = toCopy;
        document.body.appendChild(newTextarea);
        newTextarea.focus();
        newTextarea.select();
        document.execCommand("copy");
        document.body.removeChild(newTextarea);
    }

    render(){
        return(
            <div className={this.props.show ? `show` : `hide`}>
                <p>
                    The {this.props.textIs} Text is:
                    <br />
                    <span className="answer">{this.props.text}</span>
                    <br />
                    <Button color="dark-grey" font="small" clickHandler={this.copyText}>Copy Text</Button>
                </p>
            </div>
        )
    }
}