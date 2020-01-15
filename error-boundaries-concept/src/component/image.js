import React,{Component} from 'react';

class Image extends Component{

    render(){
        if(this.props.myImg === "NoImages"){
            throw new Error("Image not found")
        }  
        return(
            <React.Fragment>
                <div className="col-md-8 mx-auto">               
                    <img src={this.props.myImg} alt="my-pic"/>
                </div>
            </React.Fragment>
        )
    }
};

export default Image;