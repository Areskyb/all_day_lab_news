import React, { Component } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import NewsList from './NewsList';

class NewsBox extends Component{
    constructor(props) {
        super(props);
        this.state={

        }
    }
    

    render(){
        return(
            <div className="news-box">
            <Header title = "True News"></Header>
            <SearchBar></SearchBar>
            <NewsList></NewsList>
            </div>
        )
    }
}

export default NewsBox;