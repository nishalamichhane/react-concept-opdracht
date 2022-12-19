import React from 'react';
import './ErrorMessage.css';

function ErrorMessage({children}){
    return(
        <p className="error-msg">{children}</p>
    );

}


export default ErrorMessage;