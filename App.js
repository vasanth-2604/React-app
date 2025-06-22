import React from "react";
import ReactDOM from "react-dom/client";



const heading = React.createElement("div",{id:'parent'},React.createElement("div",{className:'child'},[React.createElement("h1",{id:'heading',key:"H1"},'Hello World'),React.createElement('h2',{className:'SECONDHEADING',key:'H2'},"Hiii")]));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading)