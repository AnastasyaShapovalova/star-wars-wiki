import React from 'react';

import './Header.css';

const Header = () => {
    return (
        <div className = "Header d-flex">
            <h1>Star Wars Wiki</h1>
            <ul className = "d-flex main_nav">
                <li>
                    <a href = "s">People</a>
                </li>
                <li>
                    <a href="s">Planets</a>
                </li>
                <li>
                    <a href="s">Ships</a>
                </li>
            </ul>
        </div>
    );
}

export default Header;