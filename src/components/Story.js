import React, { Component } from 'react';

class Story extends Component {

    constructor(props){
        super(props);
        this.state = {
            totalLiked: 0
        }

        this.handleLike = this.handleLike.bind(this);
        this.handleDislike = this.handleDislike.bind(this);

    }

    handleLike(){
        let result = this.state.totalLiked +=1;
        this.setState({totalLiked:result})

    }

    handleDislike(){
        let result = this.state.totalLiked -=1;
        this.setState({totalLiked:result})
    }


    render(){
    return(
        <div>
        <h4>  <a href = {this.props.url} target = "_blank">{this.props.title}  </a></h4>
        <div style = {{display: "flex"}}>
        <div style = {{paddingRight:"20px"}}>
            <button onClick = {this.handleLike} style = {{fontSize:"28px"}}> 👍 </button> 
        </div>  
        <div style = {{paddingRight:"20px"}}>
            <button onClick ={this.handleDislike} style = {{fontSize:"28px"}}> 👎</button>
        </div>  

        <p>totalLiked: {this.state.totalLiked}</p>
        </div>
        </div>
    )
    }
}

export default Story;