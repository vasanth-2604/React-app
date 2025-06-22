import React from "react";
import ReactDOM from "react-dom/client";


//React Element
const heading =[React.createElement('h1',{key:3},["Hiii from react element",React.createElement('p',{key:1},"heyy from React element")]),React.createElement("h2",{key:6},'header2 from react element')]

const headerRend = ReactDOM.createRoot(document.getElementById('header'));
const rootRender = ReactDOM.createRoot(document.getElementById('root'));


//React JsX syntax
const headingJsx =(<h1>Hello from 
    JsX</h1>);

//React Function Component
const ButtonComponent = ()=> <button id={id} onClick={clicked}>Click me!</button>
 const ParagraphComponent = () => (
  
    <div>
        
        <p>This is paragraph from react function component</p>
         <ButtonComponent/> 
         {heading}
         {ButtonComponent()}
    </div>
 )
 

 const id = "btn"
function clicked(){
    const button = document.getElementById('btn')
    button.addEventListener("click",()=>{console.log("button clicked")})
}

// headerRend.render(heading)
rootRender.render(<ParagraphComponent/>)
