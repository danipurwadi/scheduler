import { Nav, Navbar } from 'react-bootstrap';
import { ReactComponent as Logo } from '../assets/logo.svg';
// import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

const Styles = styled.div`
    .navbar {
        background-color: #EAECEB;
        padding: 1em;
    }
    .toggle, .toggle .nav-link {
        color: #386641;
        stroke: #386641;
        transition: 0.3s;
        &:hover {
            color: #BC4749;
            stroke: #BC4749;
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