import React, { Component } from 'react';
import Story from '../components/Story';

class NewsList extends Component {

    render(){

        return(
            <div className="news-list">
                <Story></Story>
                <Story></Story>
                <Story></Story>
            </div>
        )
    }
}

export default NewsList;