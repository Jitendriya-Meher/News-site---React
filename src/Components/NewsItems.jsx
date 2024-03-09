import React from 'react';
import image from "./Marketplace-Lending-News.jpg";

const NewsItems = ({article}) => {

    const dummydescription = "Stay informed with the latest headlines and updates from around the world. Your go-to source for breaking news, in-depth reporting, and a wide spectrum of stories. Explore our site for comprehensive coverage on global events, local news, and diverse topics that interest you.";


  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 p-2" style={{maxWidth:"345px"}}>
        <img src={article.urlToImage ? article.urlToImage : image} className="card-img-top" alt="..." style={{height:"200px", width:"360px"}} />
        <div className="card-body">
            <h5 className="card-title font-semibold text-lg leading-6">{article.title.slice(0,50)}...</h5>
            <p className="card-tex leading-5">
            {article.description ? article.description.slice(0,100) : dummydescription.slice(0,90)}...
            </p>
            <a href={article.url} className="btn btn-primary mt-3 block">
            Read More
            </a>
        </div>
    </div>

  )
}

export default NewsItems
