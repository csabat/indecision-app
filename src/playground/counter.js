class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: props.count
        };
    }

    componentDidMount() {
        try {
            const countString = localStorage.getItem('count');
            if (countString) {
                const count = parseInt(countString);
                this.setState(() => ({ count }))
            } else {
                console.log('no value')
            }

        } catch (e) {

        }
    }

    componentDidUpdate(prevProps, prevState) {
        const num = this.state.count;
        localStorage.setItem('count', num);
        console.log('number saved ' + num);
    }

    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }

    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }

    handleReset() {
        // this.setState(() => {
        //     return {
        //         count: 0
        //     }
        // });

        this.setState({
            count: 0
        });
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )

    }
}

Counter.defaultProps = {
    count: 0
}

ReactDOM.render(<Counter />, document.getElementById('app'));


// let count = 0;

// const addOne = () => {
//     count = count + 1;
//     renderCounterApp();
//     console.log(count);
// };
// const minusOne = () => {
//     count = count - 1;



//     renderCounterApp();
// };

// const reset = () => {
//     count = 0;
//     renderCounterApp();
// };
// const someId = 'myidhere'



// const appRoot = document.getElementById('app');



// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne} className="">+1</button>
//             <button onClick={minusOne} className="">-1</button>
//             <button onClick={reset} className="">reset</button>
//         </div>
//     );

//     ReactDOM.render(templateTwo, appRoot);
// }

// renderCounterApp();