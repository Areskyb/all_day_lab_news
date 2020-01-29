import React, { Component } from 'react';

const Story = (props) => {

    console.log(props.url)
    return(

        <h4>  <a href = {props.url} target = "_blank">{props.title}  </a></h4>
  
    )
}

export default Story;