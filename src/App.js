import React, {useState} from 'react';
import './App.css';
import CalculatorDisplay from './components/display'
import DisplayScreen from './components/display-screen'
import Button from './components/button'


class App extends React.Component {

    constructor() {
        super();

        this.state = {
            question: '',
            answer: '',
        }


        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        const value = event.target.value;

        switch(value) {
            case '=': {
                if(this.state.question!==''){
                    var ans='';

                    try{
                        ans = eval(this.state.question);
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
            }
            case 'C': {
                this.setState({ question: '', answer: ''});
                break;
            }
            case 'DE': {
                var str = this.state.question;
                str = str.substring(0,str.length-1)
                this.setState({question: str});
                break;
            }

            default: {
                this.setState({ question: this.state.question += value})
                break;
            }
        }
    }



    render(){
        return (
            <div className='body'>
                <CalculatorDisplay value='Calculator'/>
                <div className='mainFrame'>
                    <DisplayScreen className='screen'/>
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
