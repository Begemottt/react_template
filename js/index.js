function Cat ({ name }){
    return (
        <React.Fragment>
        <h1>Hello! I'm {name}</h1>
        <p>She's good</p>
        </React.Fragment>
    )
}
ReactDOM.render(<Cat name="Tina" />, document.getElementById("main"));