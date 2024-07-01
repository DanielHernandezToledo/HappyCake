import React from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Navigation() {
    return (
        <Navbar className="bg-danger">
            <Container>
                <Navbar.Collapse>
                    <Nav className='d-flex gap-4'>
                        <Link
                            to='/'
                            className='link-light link-opacity-75-hover text-decoration-none d-flex gap-1'
                        ><img src="/icons/hogar.png" alt="home" style={{maxHeight:20+'px'}}/><span>Home</span></Link>
                        <Link
                            to='/contacto'
                            className='link-light link-opacity-75-hover text-decoration-none d-flex gap-1'
                        ><img src="/icons/libro.png" alt="contacto" style={{maxHeight:20+'px'}}/><span>Contacto</span></Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Brand
                    className='d-flex gap-1'
                ><h3 className='text-white fw-bold text-center'>Happy Cake</h3><img src="/icons/rebanada-de-pastel.png" alt="home"style={{maxHeight:30+'px'}}/></Navbar.Brand>
            </Container>
        </Navbar>
    )
}
