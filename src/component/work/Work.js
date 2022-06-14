import React, { Component } from "react";
import "./styrl.css"
import axios, { Axios } from "axios";

class Work extends Component{
    state={
        works:[]
    }
    componentDidMount(){
        axios.get("data/data.json").then(e=>{
            this.setState({works:e.data.works})
            
        })
    }
    
    render(){
        const {works}=this.state
        const lists=works.map(data=>{
            return(
                <div key={data.id} className="box">
                    
                        <i className={data.icon_name}></i>
                        <span>{data.title}</span>
                        <p>{data.body}</p>
                    
                </div>
            )
        })
        
        return(
            <div className="work">
                <div className="contener">
                    <h1><span>my</span> work</h1>
                    <div className="cards">
                        {lists}
                        
                    </div>
                </div>
            </div>
        )
    }
}
export default Work;
