import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addReminder} from '../actions';
import First from './First';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: ''
        }
    }
    addReminder() {
        this.props.addReminder(this.state.text);
    }
    render(){
        console.log('props', this.props)
        return(
            <div className = "App">
                <div className = "title">
                    Reminder Pro
                </div>
                <div className = "form-inline">
                    <div className = "form-group">
                        <input 
                            className = "form-control" 
                            placeholder = "I have to... "
                            onChange = {(event) => this.setState({text: event.target.value})}
                        />
                    </div>
                    <button
                        type = "button"
                        className = "btn btn-success"
                        onClick = {() => this.addReminder()}
                    >
                     Add Reminder
                    </button>
                    <First />
                </div>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({addReminder}, dispatch);
}

function mapStatetoProps(state){
    return {
        reminder: state
    }
}
export default connect(mapStatetoProps, mapDispatchToProps)(App);