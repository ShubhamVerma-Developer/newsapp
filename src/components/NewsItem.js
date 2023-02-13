import React, { Component } from 'react';


export class NewsItem extends Component {
   

    render() {
      let {title, description} = this.props;
        return (
            <div>
            <div className="card" style={{width: "18rem"}}>
                <img src="https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1341546716/image_1341546716.jpg?io=getty-c-w1536" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href="/newdetail" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            </div>
        )
    }
}

export default NewsItem
    