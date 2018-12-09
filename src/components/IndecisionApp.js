import React from 'react';
import AddOption from './AddOption.js';
import Header from './Header.js';
import Action from './Action.js';
import Options from './Options.js';
import OptionModal from './OptionModal.js';


export default class IndecisionApp extends React.Component {

    state = {
        options : [],
        selectedOption: undefined
    }

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }))
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option;            
            })
        }))
    }


    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption: option
        }))
    }

    handleAddOption = (option) => {
        if (!option) {
            return 'Enter vaid value to the item'
        } else if(this.state.options.indexOf(option) > -1) {
            return 'This option already exist'
        } 

        this.setState((prevState) => ({
                options: prevState.options.concat([option])
            })
        )
    }

    handleCloseModal = () => {
        this.setState(() => ({
            selectedOption: undefined
        }))
    }

    //lifecycle methods
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            
            if (options) {
                this.setState(() => ({ options }));
            }    
        } catch (e) {

        }
       
        
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
        console.log('saving data')

    }

    componentWillUnmount() {
        console.log("will unmount")
    }





    render() {
        const subTitle = 'Put your life in a the hands of a computer';
        return (
            <div>
                <Header subtitle={subTitle}/>
                <div className="container">
                    <Action 
                        hasOptions={this.state.options.length > 0} 
                        handlePick={this.handlePick}
                    />

                    <div className="widget">
                        <Options
                            options = {this.state.options}
                            handleDeleteOptions = {this.handleDeleteOptions}
                            handleDeleteOption = {this.handleDeleteOption}
                        />
                        <AddOption 
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                    
                    <OptionModal handleCloseModal={this.handleCloseModal} selectedOption={this.state.selectedOption}/>
                </div>
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
}

