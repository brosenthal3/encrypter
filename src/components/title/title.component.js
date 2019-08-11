import React from 'react';
import './title.scss';

export const Title = ({children}) => {
    return(
        <h1 className="title">{children}</h1>
    );
}