
const appRoot = document.getElementById('app');

let buttonClicked = false;


const onChangeState = () => {
    buttonClicked = !buttonClicked;
    renderApp();
}

const renderApp = () => {
    let buttonState = buttonClicked ? "Hide" : "Show"
    let message = buttonClicked ? "sjdfk;aflkja;lksdjf;lksajflkajsf;sljf" : undefined

    const template = 
    <div>
    <h1>Visibility Toggle</h1>
    <button onClick={onChangeState}>{buttonState}</button>
    
    {message}
    </div>
    
    ReactDOM.render(template, appRoot);
}

renderApp();

