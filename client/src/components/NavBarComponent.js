import { Nav, Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { ReactComponent as Logo } from '../assets/logo.svg';
// import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

const Styles = styled.div`
    .navbar {
        background-color: #EAECEB;
        padding: 1em;
    }
    a, .navbar-brand, .navbar-nav, .nav-link, .nav-item, .nav, .logo{
        color: #386641;
        transition: 0.3s;
        &:hover {
            color: #BC4749;
        }
    }
    .toggle {
        color: #386641 !important;
        stroke: #386641 !important;
        transition: 0.3s !important;
        &:hover {
            color: #BC4749 !important;
            stroke: #BC4749 !important;
        }
    }
    .toggle .navlink{
        color: #386641 !important;
        stroke: #386641 !important;
        transition: 0.3s !important;
        &:hover {
            color: #BC4749 !important;
            stroke: #BC4749 !important;
        }
    }
    
`

function NavigationBar() {
    return(
        <Styles>
            <Navbar expand="lg" className="justify-content-between">
                <Navbar.Brand className="toggle" href="/" >
                <Logo width="30" height="30" />
                {' '}Scheduler
                </Navbar.Brand>
                <Nav className="toggle">
                    <Nav.Link href="/">About</Nav.Link>
                    <Nav.Link href="/">My Schedules</Nav.Link>
                    <Nav.Link href="/">Profile</Nav.Link>
                </Nav>
            </Navbar>
        </Styles>
    )
}

export default NavigationBar;