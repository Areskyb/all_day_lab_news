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
            amount: 100
        }
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
        this.loadIds().then(ids => {
            const promises = ids.slice(0, this.state.amount).map(id => {
                return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
                    .then(res => res.json())
            })
    
            Promise.all(promises)
            .then(stories => this.setState({stories:stories}))
        }) 
    }






    // **************************************


    

    render(){
        return(
            <div className="news-box">
            <Header title = "True News"></Header>
            <SearchBar></SearchBar>
            <LoadAmount></LoadAmount>
            <NewsList stories={this.state.stories}></NewsList>
            </div>
        )
    }
}

export default NewsBox;