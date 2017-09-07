import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class First extends Component {
    constructor(props){
        super(props);

    }
    render(){
        console.log('props in First Component', this.props);
        return(
            <div></div>
        )
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({}, dispatch);
}

function mapStatetoProps(state){
    return {
        reminder: state
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(First);