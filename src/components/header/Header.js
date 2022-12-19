import React from 'react';
import "./Header.css";
import {Link, Navigate, NavLink} from "react-router-dom";

const Header = () => {
    return (
        <>
<header>
            <nav className="navbar">
                <ul>
                    <li>
                        <NavLink to ="/">Hottest Post</NavLink>
                    </li>
                    <li>
                        <a href="https://www.reddit.com/"> Reddit</a>
                    </li>
                    <li>
                        <NavLink to ="/subreddit/Memes">Meme</NavLink>
                    </li>
                </ul>
            </nav>

</header>
        </>
    );
};

export default Header;