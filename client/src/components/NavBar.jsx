import { AppBar, Toolbar, styled } from '@mui/material';

import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
background-image: linear-gradient(135deg, white, lightgreen, darkblue)`;


const Tabs = styled(NavLink)`
 font-size: 20px;
 color: black;
 text-decoration: none;
 margin-right: 35px;
 `;

const NavBar = () => {
 return (
    <Header position="static">
        <Toolbar>
            <Tabs to='/'>Milestone</Tabs>
            <Tabs to='/all'>All Users</Tabs>
            <Tabs to='/add'>Add User</Tabs>
        </Toolbar>
    </Header>
 )
}

export default NavBar;