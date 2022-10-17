import React, {useState} from 'react';
import './App.css';
import CalculatorDisplay from './components/CalculatorDisplay'
import DisplayScreen from './components/DisplayScreen'
import Button from './components/button'


const DEFAULT_STATE = {
    currentNumber: 1,
    currentVariable: '', // good approach
    number1: '',
    number2: '',
    operation:'',

    // question: '',
    answer: '',
}

class App extends React.Component {

    state = {...DEFAULT_STATE} 

    constructor() {
        super();

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        const value = event.target.value;

        switch(value) {
            case '=': {

                var ans='';
                const {number1, number2, operation} = this.state

                try{
                    switch(operation){
                        case '+':
                            ans= number1 + number2;
                            break;
                        case '-':
                            ans= number1 - number2;
                            break;
                        case '*':
                            ans= number1 * number2;
                            break;
                        case '/':
                            ans= number1 / number2;
                            break;
                    }
                }

                catch(err){
                    this.setState({answer: 'Math error'});
                }

                if (ans===undefined){
                    this.setState({answer: 'Math error'});
                }

                else{
                    this.setState({answer: ans, question: ''});
                    break;
                }
            
            }
            case 'C': {
                this.setState({...DEFAULT_STATE});
                break;
            }
            case 'DE': {
                this.setState((prevState)=> {
                    const newState = {}
                    const {currentVariable: cv, number1, number2} = prevState
                    if(cv === 'number2'){
                        if(number2.length > 1){
                            newState.number2 = number2.substring(0, number2.length - 1)
                        } else {
                            newState.number2 = ""
                            newState.currentVariable = 'operation'
                        }
                    } else if (cv === 'operation'){
                        newState.operation = ''
                        newState.currentVariable = 'number1'
                    } else {
                        if (number1.length > 0){
                            newState.number1 = number1.substring(0, number1.length - 1)
                        }
                    }
                    return newState
                });
                break;
            }
            case '+':
            case '-':
            case '*':
            case '/':
                this.setState({
                    operation:value,
                    currentNumber:2,
                    currentVariable: 'operation',
                })
            break;

            default: {
                //insteasd of eval , first #, second # ,"="
                this.setState((prevState) => {
                    const newState = {
                        lastTypedValue: value
                    }
                    if(prevState.currentNumber == 1){
                        newState.currentVariable = "number1"
                        newState.number1 = prevState.number1 + value
                    } else {
                        newState.currentVariable = "number2"
                        newState.number2 = prevState.number2 + value;
                    }
                    return newState
                })
                break;
            }
        }
    }




    render(){

        const {number1, number2, operation} = this.state
        const question = `${number1} ${operation} ${number2}`
        return (
            <div className='body'>
                <CalculatorDisplay value='Calculator'/>
                <div className='mainFrame'>
                   {/* {...this.state} */}
                    <DisplayScreen {...this.state} question={question} className='screen'/>
                    <div className='button-row'>
                        <Button handleClick = {this.handleClick} label={'C'}/>
                        <Button handleClick = {this.handleClick} label={'DE'}/>
                        <Button handleClick = {this.handleClick} label={'.'}/>
                        <Button handleClick = {this.handleClick} label={'/'}/>
                    </div>
                    <div className='button-row'>
                        <Button handleClick = {this.handleClick} label={'7'}/>
                        <Button handleClick = {this.handleClick} label={'8'}/>
                        <Button handleClick = {this.handleClick} label={'9'}/>
                        <Button handleClick = {this.handleClick} label={'*'}/>
                    </div>
                    <div className='button-row'>
                        <Button handleClick = {this.handleClick} label={'4'}/>
                        <Button handleClick = {this.handleClick} label={'5'}/>
                        <Button handleClick = {this.handleClick} label={'6'}/>
                        <Button handleClick = {this.handleClick} label={'-'}/>
                    </div>
                    <div className='button-row'>
                        <Button handleClick = {this.handleClick} label={'1'}/>
                        <Button handleClick = {this.handleClick} label={'2'}/>
                        <Button handleClick = {this.handleClick} label={'3'}/>
                        <Button handleClick = {this.handleClick} label={'+'}/>
                    </div>
                    <div className='button-row'>
                        <Button handleClick = {this.handleClick} label={'0'}/>
                        <Button handleClick = {this.handleClick} label={'='}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
