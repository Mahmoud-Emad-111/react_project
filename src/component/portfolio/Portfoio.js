import React, { Component } from "react";
import axios from "axios"
import "./style.css"
class Portfolio extends Component{
    state={
        images:[]
    }
    componentDidMount(){
        axios.get("data/data.json").then(images=>{
            this.setState({
                images:images.data.portfolio
            })
        })
    }
   
    render(){
        const {images}=this.state;
        const lists=images.map(data=>{
            return(
                <div key={data.id} className='crut'>
                    <img src={data.image} alt=""/>
                    <button>show image</button>
                </div>
            )
        })
        return(
            <div className="portfolio">
                
                    <div className="header">
                        <h1><span>my</span>portfolio</h1>
                        <div className="links">
                            <ul>
                                <li >all</li>
                                <li >html</li>
                                <li >photoshop</li>
                                <li >wordpress</li>
                                <li >mobile</li>

                            </ul>
                        </div>
                    </div>
                    <div className="main">
                        {lists}
                    </div>

                
            </div>
        )
    }
}
export default Portfolio;
