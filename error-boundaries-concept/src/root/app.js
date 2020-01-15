import React,{Component} from 'react';
import Image from '../component/image';
import nature1 from '../../src/nature1.jpg';
import images from '../../src/images.jpeg';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Error1 from '../component/error'

class App extends Component{

    render(){
        return(
            <React.Fragment>
                <h3 className="err-b mb-5">Error boundries</h3>
                <Error1>
                    <Image myImg={nature1} />
                </Error1>

                <Error1>
                     <Image myImg={images} />
                </Error1>

                <Error1>
                    <Image myImg="NoImages" />
                </Error1>

                <style jsx="true">
                    {
                        `.err-b{
                            text-align:center;
                        }
                        `
                    }
                </style>
            </React.Fragment>
        )
    }
};

export default App;