import React from "react";
import ReactDom from "react-dom";

import Messages from './components/MessagesField/MessagesField.jsx';
let user = 'Alex';
ReactDom.render(
    <Messages usr={ user }/>, 
    document.getElementById("app")
);
