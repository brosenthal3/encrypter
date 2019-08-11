import React from 'react';
import { Button } from '../button/button.component';
import {Title} from '../title/title.component';
import {Link} from 'react-router-dom';

import './encrypt-decrypt-form.scss';

class EncryptDecryptForm extends React.Component{
    render(){
        return(
            <div className="form">
                <Title>{this.props.title}</Title>
                <Link to="/"><Button color="grey">Back</Button></Link>
                <input type="number" name="key"placeholder="Key" min="1" max="40" className="input-field" onChange={this.props.handleChange} />
                <textarea placeholder="Write Down Your Text Here" className="input-field" name="text" onChange={this.props.handleChange}></textarea>
                <Button color="green" clickHandler={this.props.handleSubmit}>Submit</Button>
            </div>
        )
    }
}

export default EncryptDecryptForm;