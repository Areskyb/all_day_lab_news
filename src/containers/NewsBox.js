import React, { Component } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import NewsList from './NewsList';
import LoadAmount from '../components/LoadAmount';

class NewsBox extends Component{
    constructor(props) {
        super(props);
        this.state={
            ids: [],
            stories:[]
        }
    }

    componentDidMount(){
        Promise.all([this.loadIds()])
    }

    // functions*****************************
     loadIds(){
        const url = "https://hacker-news.firebaseio.com/v0/topstories.json";
        fetch(url)
        .then(res => res.json())
        .then(ids => this.ids = ids)
        .then(this.loadStories(100))
    }

    loadStories(amount){
    
        for(let i = 0; i < amount ; i++){
            let storyId = this.ids[i];
            fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
            .then(res => res.json())
            .then(story => this.stories.push(story))
        }
    }






    // **************************************


    

    render(){
        return(
            <div className="news-box">
            <Header title = "True News"></Header>
            <SearchBar></SearchBar>
            <LoadAmount></LoadAmount>
            <NewsList stories={this.stories}></NewsList>
            </div>
        )
    }
}

export default NewsBox;