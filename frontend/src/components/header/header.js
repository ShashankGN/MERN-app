import React from 'react'
import {
  Navbar,
  Form,
  FormControl,
  Nav,
  NavDropdown,
  Container
} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import {useDispatch,useSelector} from "react-redux";
import {logout} from '../../actions/userActions';

const Header = ({setSearch}) => {
  const history = createBrowserHistory();
  const dispatch=useDispatch()
  const userLogin=useSelector(state=>state.userLogin);
  const {userInfo}=userLogin;
  const logoutHandler=()=>{
    dispatch(logout());
    history.push("/");
  };
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
      <Navbar.Brand>
        <Link to='/'>Note Zipper</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className='m-auto'>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            onChange={(e)=>setSearch(e.target.value)}
          />
        </Form>
        </Nav>
        <Nav >
          <Nav.Link href="/mynotes">
            <Link to='/mynotes'>My Notes</Link></Nav.Link>
          <NavDropdown title="USER"/*{`${userInfo.name}`}*/id="basic-navbar-nav">
            <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={logoutHandler}>
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        
      </Navbar.Collapse>
      </Container>
  </Navbar>
  );
};

export default Header;
