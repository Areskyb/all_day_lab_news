import React, { Component } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import NewsList from './NewsList';
import LoadAmount from '../components/LoadAmount';

class NewsBox extends Component{
    constructor(props) {
        super(props);
        this.state={
            stories:[],
            amount: 100,
            currentSearch : '',
            fetchStories: []
        }
        this.handleStorySearchResult = this.handleStorySearchResult.bind(this);
    }

    componentDidMount(){
        this.loadStories()
    }

    // functions*****************************
     loadIds(){
        const url = "https://hacker-news.firebaseio.com/v0/topstories.json";
        return fetch(url)
            .then(res => res.json())
    }

    loadStories(){
        this.loadIds()
        .then(ids => {
            const promises = ids
            .slice(0, this.state.amount)
            .map(id => {
                return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
                    .then(res => res.json())
            })
    
            Promise.all(promises)
            .then(stories => this.setState({stories:stories, fetchStories:stories}))
        }) 
    }

     handleStorySearchResult(value){
            const fetchStories = this.state.fetchStories;
            this.setState({currentSearch:value})

            const storySearchResult = this.state.stories.filter(story => {
                if (story.title.includes(value)){
                    return story
                }
            });


            if (this.state.currentSearch == ''){
                this.setState({stories: fetchStories});
            
            }

            this.setState({stories: storySearchResult});
            this.loadStories();

    }
    



    // **************************************


    

    render(){
        return(
            <div className="news-box">
            <Header title = "True News"></Header>
            <SearchBar currentSearchStory = {this.state.currentSearch} onSearch = {this.handleStorySearchResult}></SearchBar>
            <LoadAmount></LoadAmount>
            <NewsList stories={this.state.stories}></NewsList>
            </div>
        )
    }
}

export default NewsBox;