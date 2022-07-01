import React, { useEffect, useState } from "react";

const News = () => {

    const [news, setNews] = useState([]);

    const getNews = async () => {
        const res = await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=34064804969743e497f09b12b2c21441");
        const topNews = await res.json();
        console.log(topNews.articles);
        setNews(topNews.articles);
    }

    useEffect(() => {
        getNews();
    }, [])

    return (
        <>
            <div className="main-div">
                <div className="cent-div">
                    <div className="heading">
                        <h1><span className="blink">Top Breaking News</span></h1>
                    </div>
                    <div className="all-cards">

                        {
                            news.map((curElem, ind) => {
                                return (
                                    <div className="card">
                                        <div className="ind_card" key={ind}>
                                            <h2 className="title">{curElem.title}</h2>
                                            <p className="time">Published at: {curElem.publishedAt}</p>
                                            <img src={curElem.urlToImage} alt="image" />
                                            <div className="content-height">
                                                <span className="content">{curElem.description}</span>
                                            </div>
                                            <a className="url" href={curElem.url} target="_blank"> Read Full Article</a>
                                        </div>
                                    </div>
                                );
                            })
                        }

                    </div>
                </div>
            </div>
        </>
    );
}

export default News;