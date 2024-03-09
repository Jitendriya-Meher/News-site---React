import React, { useEffect, useState } from 'react'
import NewsItems from './NewsItems';
import Loading from './Loading';

const NewsBoard = ({category,country}) => {

    const [articles,setArticles] = useState([]);
    const [loading, setLoading] = useState(false);

    const getArticle = async () => {
        setLoading(true);

        try{

            const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=***key***`;

            const response = await fetch(url);
            const data = await response.json();

            setArticles(data.articles);

        }
        catch(e){
            console.log(e.message);
        }

        setLoading(false);

    }

    useEffect( () => {

        getArticle();
        
    },[category,country]);


  return (
    <div>
      <h2 className=' text-center text-3xl m-2 mt-4'>
        Latest
        <span className='badge bg-danger ml-1'>
            News
        </span>
      </h2>

      {
        loading ? (
            <Loading></Loading>
        ):(
                <div className=" flex justify-center items-center flex-wrap">
                    {
                        articles.map( (article,index) =>(
                            <NewsItems key={index} article={article}></NewsItems>
                        ))
                    }
                </div>
        )
      }

    </div>
  )
}

export default NewsBoard
