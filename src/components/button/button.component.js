import React from 'react';

import './button.scss';

export const Button = ({children, clickHandler, color, font}) => {
    return(
        <button className={`${color} customButton ${font}`} onClick={clickHandler}>{children}</button>
    )
}