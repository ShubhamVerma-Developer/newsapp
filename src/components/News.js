import React, { Component } from 'react';
import NewsItem from './NewsItem';


export class News extends Component {
    constructor(){
        super();
        this.state = {
                articles: [],
                loading: true
        }
   }

   async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=47f304fc904e445bb1e2cf721602980a";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles:parsedData.articles})
}


    render() {

        console.log("render")
        return (
            <div className='container my-3'>
                <h1>NewsMonkey - Top Headlines</h1>
                 
                <div className="row">
                {this.state.articles.map((element)=>{
                   return <div className="col-md-4"  key={element.url} >
                        <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} />
                    </div>
                })}
                     
                </div>
                         
            </div>
        )
    }
}

export default News
    