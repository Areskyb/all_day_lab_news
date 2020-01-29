import React, { Component } from 'react';
import Story from '../components/Story';

class NewsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    

    render(){

        // FUNCTIONS *********************************

        const storyNodes = this.props.stories.map( story => {
            return(
                <Story title={story.title}></Story>
            )
        })

        // *******************************************

        return(
            <div className="news-list">
                {storyNodes}
            </div>
        )
    }
}

export default NewsList;