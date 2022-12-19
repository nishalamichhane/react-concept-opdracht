import React, {useEffect, useState} from 'react';
import "./Home.css";
import {Link, NavLink} from "react-router-dom";
import axios from "axios";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import logo from "../../assets/logo.png";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";


const Home = () => {
    const [reddit, setReddit] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(()=>{
        async function fetchRedditData(){
            setLoading(true);
            try{
                const response =await axios.get('https://www.reddit.com/hot.json?limit=15');
                setReddit(response.data.data.children);
                console.log(response.data.data.children);
            }
            catch(e){
                console.error(e);
                setError(true);
            }
            setLoading(false);
        }
        fetchRedditData();
    }, [])
    return (
        <>
            <div className="header">
                <Header />
                <img src={logo} alt="" align="center"/>
                <h1>Reddit</h1>
            </div>
            <div>
                <h2 align="center">Hottest Post</h2>
                <h4 align="center">On reddit right now</h4>
            </div>
            <div className="div-container">
                    {reddit.map((reddit)=>{
                        return(<article className="article-container" key={reddit.data.id}>
                                <h3><a href={reddit.data.url}> {reddit.data.title}</a></h3>
                                <div>
                                    <h5><Link to={`/subreddit/${reddit.data.subreddit}`}>{reddit.data.subreddit_name_prefixed}</Link></h5>
                                    <p>Comments{reddit.data.num_comments}  - ups {reddit.data.ups}</p>
                                </div>
                        </article>)
                    })}
                {loading && <span>Loading......</span>}
                {error && <ErrorMessage>Problem to retrieve data. Please check the JSON links!!</ErrorMessage>}
            </div>
            <Footer office="NOVI Hogeschool" made_in_year="2022" />
        </>
    );
};
export default Home;