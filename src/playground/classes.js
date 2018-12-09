console.log('App is running!');


const app = {
    title: "Indicision Application",
    subtitle: "This is a cool up to help you decide",
    options: []
};


const onformSubmit = (e) => {
    e.preventDefault(); //preventing auto refresh

    const option = e.target.elements.option.value;
    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
}

const onRemoveAll = () => {
    app.options = [];
    renderApp();
}

const numbers = [44,23,11]

const appRoot = document.getElementById('app');

const renderApp = () => {
    const template =
    <div>
        <h1>{app.title}</h1> 
        {app.subtitle && <p>{app.subtitle}</p>}
        <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
        <button onClick={onRemoveAll}>Remove All</button>
        <ol>
            {
                app.options.map((option) => {
                    return <li>{option}</li>
                })
            }
        </ol>
        <form onSubmit={onformSubmit}>
            <input type="text" name="option"/>
            <button>Add Option</button>
        </form>
    </div>;

    ReactDOM.render(template, appRoot);
};

renderApp();
