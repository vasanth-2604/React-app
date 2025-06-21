const heading = React.createElement("div",{id:'parent'},React.createElement("div",{className:'child'},[React.createElement("h1",{id:'heading'},'Hello World'),React.createElement('h2',{},"Hiii")]));
const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(heading)