import React from 'react';
import ReactDOM from 'react-dom'


// JSX

// <button type="button" style="padding: 10px; color: white; background-color: red; border: 2px solid yellow;">HTML BUTTON</button>


function App() {

    const str1 = "Click ";
    const str2 = "Me";

    return (
    <div>
        <button type="button" style={{padding:'10px', color: 'white', backgroundColor: 'blue', border: '2px solid yellow'}}>{str1.concat(str2)}</button>  
        
    </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root') 
);





















/* const names = ["Arin", "Elis", "Gamze", "Gürcan"];

function App() {
  return /*#__PURE__React.createElement("div", { 
    __self: this,
  }, names.map(name => /*#__PURE__React.createElement("h1", {
    __self: this,
  }, name)));
}

ReactDOM.render( /*#__PURE__React.createElement(App, {
  __self: undefined,
}), document.getElementById('root'));  */