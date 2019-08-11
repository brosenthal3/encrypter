import React from 'react';
import {Link } from 'react-router-dom';

import {Title} from '../../components/title/title.component';
import { Button } from '../../components/button/button.component';

class SelectPage extends React.Component{
    render(){
        return(
            <div>
                <Title>Encrypted - Encrypt and Decrypt Text</Title>
                <Link to="/encrypt"><Button color="green">Encryption</Button></Link>
                <Link to="/decrypt"><Button color="green">Decryption</Button></Link>
            </div>
        );
    }
}

export default SelectPage;