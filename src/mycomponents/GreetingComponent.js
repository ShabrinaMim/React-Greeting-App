import React from 'react';
import './mycss.css';

let value = "";
let time = new Date();
let styleObject = {};

if(time.getHours() >= 1 && time.getHours() < 12){
    value = "Good Morning";
    styleObject.color = "green";
}
else if(time.getHours() >= 12 && time.getHours() < 19){
    value = "Good Afternoon";
    styleObject.color = "orange";
}
else{
    value = "Good Night";
    styleObject.color = "red";
}

const GreetingComponent = () => {
    return (
        <div>
            <h1 style={styleObject}>HELLO, <span>{value}</span></h1>
        </div>
    );
};

export default GreetingComponent;