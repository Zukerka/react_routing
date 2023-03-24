import React from 'react'
import './Articles.css'
import { useState, useEffect } from 'react'


const Articles = () => {
    const [article, setArticle] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            setArticle(data)
        }

        fetchArticles();
    }, [])

    return (
        <div>
            {article.map((article) => {
                return (<div className='article' key={article.id}>
                    {article.title}
                </div>)

            })}
        </div>
    )
}

export default Articles