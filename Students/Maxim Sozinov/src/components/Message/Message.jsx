import React from 'react';
import ReactDom from 'react-dom';

import './style.css';

let msg = (props) => {
    let { sender, text } = props;
    sender ? sender = sender : sender = 'Bot';
    text ? text = text : text = 'go away ...';
    
/* jshint ignore:start */
    return  (
    <div className="d-flex flex-column msg">
        <strong>{ sender }</strong>
        <p>{ text }</p>
    </div>
    )
/* jshint ignore:end */
};

export default msg;