import React from "react";
import ReactDOM from "react-dom/client";
const div=React.createElement('div',{id:'parent'},
React.createElement('div',{id:'child'},
[React.createElement('h1',{className:'heading'},"I'm the first child"),
React.createElement('h1',{className:'heading'},"I'm the second child")]
));
const root=ReactDOM.createRoot(document.getElementById('container'));
root.render(div);