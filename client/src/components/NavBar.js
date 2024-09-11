import React, { useContext } from "react";
import { Context } from "../index";
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import { SHOP_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";
import { useNavigate } from 'react-router-dom';

const NavBar = observer(() => {
    const { user } = useContext(Context);
    const navigate = useNavigate(); 

    const handleAdminClick = () => {
        navigate('/admin'); // Перенаправление на админ панель
    };

    const handleLoginClick = () => {
        navigate('/login'); // Перенаправление на страницу логина
    };

    return (
        <Navbar bg="dark" variant="dark" className="px-3"> 
            <Container>
                <NavLink 
                    style={{ color: 'white', textDecoration: 'none', marginRight: '20px' }} 
                    to={SHOP_ROUTE}>
                    JamalStore
                </NavLink>
                {user.isAuth ?
                <Nav className="ms-auto" style={{ color: "white" }}>
                    <Button 
                        variant={"outline-light"} 
                        style={{ marginLeft: '10px' }} 
                        onClick={handleAdminClick}
                    >
                        Админ панель
                    </Button> 
                    <Button 
                        variant={"outline-light"} 
                        style={{ marginLeft: '10px' }} 
                        onClick={() => { 
                            user.setIsAuth(false); 
                            navigate(SHOP_ROUTE); 
                        }}
                    >
                        Выйти
                    </Button> 
                </Nav>
                :
                <Nav className="ms-auto" style={{ color: "white" }}>
                    <Button 
                        variant={"outline-light"} 
                        style={{ marginLeft: '10px' }} 
                        onClick={handleLoginClick}
                    >
                        Авторизация
                    </Button>
                </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;
