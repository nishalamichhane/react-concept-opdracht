import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './Subreddit.css';
import Header from '../../components/header/Header';
import Footer from "../../components/footer/Footer";
import logo from "../../assets/logo.png";


const Subreddit = () => {
    const [subredditdetails, setsubredditDetails] = useState({});
    const { id } = useParams();
    console.log("id is"+id);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`https://www.reddit.com/r/${id}/about.json`);
                console.log(response);
                setsubredditDetails(response.data.data);
            } catch (e) {
                console.error(e);
            }
        }
            fetchData();
    }, []);
    return (
        <>
            <div className="header">
                <Header />
                <h1>r/{id}</h1>
                <h4>Subreddit specifications</h4>
            </div>
                    <div >
                        {Object.keys(subredditdetails).length > 0 && (
                            <div className="subreddit_details">
                                <h4>Title</h4>
                                <p>{subredditdetails.title}</p>
                                <h4>Description</h4>
                                <p>{subredditdetails.public_description}</p>
                                <h4>Number of subscribers</h4>
                                <p>{subredditdetails.subscribers}</p>
                                <span>
                                    <Link to="/" className="back">Take me back</Link>
                                </span>
                            </div>
                        )}
                    </div>
            <Footer office="NOVI Hogeschool" made_in_year="2022" />
        </>
    );
};

export default Subreddit;