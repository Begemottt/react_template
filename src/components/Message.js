import React from "react";

export default function Message ({ name }){
    return (
        <React.Fragment>
        <h1>Hello! I'm {name}</h1>
        <p>This is an example module! You can put anything in here and run it</p>
        <h2>You can use this as a template to make more cool React stuff!!</h2>
        </React.Fragment>
    )
}