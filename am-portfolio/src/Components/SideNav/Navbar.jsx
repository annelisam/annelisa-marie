import React from "react"; 
import {
    SideNav,
    SideNavItem,
    NavItem,
    Dropdown,
    Collapsible,
    CollapsibleItem
} from "react-materialize"; 
import "./Navbar.css"; 

const NavMenu = () => (
    <SideNav
        fixed
        >
        <div className="profile-info center-align">
        <img src="http://via.placeholder.com/100x100" className="circle" />
        <span><h5>annelisa marie</h5></span>
        </div>
        <SideNavItem divider />
        <li className="no-padding">
            <ul className="collapsible" data-collapsible="expandible">
                <li>
                    <div className="collapsible-header" href="#">about</div>
                </li>
                <li>
                    <div className="collapsible-header">work</div>
                    <div className="collapsible-body" style={{padding:0}}>
                        <ul>
                            <li><a>music</a></li>
                            <li><a>tech</a></li>
                            <li><a>fitness</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div className="collapsible-header" href="#">contact</div>
                </li>
                <li>
                    <div className="collapsible-header" href="#">blog</div>
                </li>
        </ul>
        </li>


    </SideNav>

        ); 

export default NavMenu; 

