import React from 'react';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import GitHubIcon from '@material-ui/icons/GitHub';
import { grey } from '@material-ui/core/colors';
import Tooltip from '@material-ui/core/Tooltip';


const Navbar = () => {
    return (            <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand">
                    <WbSunnyIcon/> UV index
                    </a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                           
                        </li>
                    </ul>
                </div>
                <span class="navbar-text">
                <a className="nav-link" href="https://github.com/dharmadeveloper108/should-I-wear-sunscreen">
                    <Tooltip title="GitHub Repo" aria-label="GitHub Repo">
                    <GitHubIcon style={{ fontSize: 20, color: grey[600] }}/> 
                    </Tooltip>
                </a>
                </span>
            </nav>
            </div>
        );
};

export default Navbar;
