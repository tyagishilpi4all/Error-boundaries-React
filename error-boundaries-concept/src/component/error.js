import React,{Component} from 'react';

class Error1 extends Component{

    constructor(props){
        super(props);
        this.state={
            hasError:false
        }
    }

    static getDerivedStateFromError(error){
        return{hasError:true}
    }

    render(){
        if(this.state.hasError){
            return <h3>Error: Image Not Found</h3>
        }
        return this.props.children
    }
};

export default Error1;