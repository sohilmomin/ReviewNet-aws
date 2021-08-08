import React, { Component } from 'react'
import { Nav, Navbar, NavItem, NavLink, NavbarBrand, Collapse, NavbarToggler } from 'reactstrap'
import { Link } from 'react-router-dom'
class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this)
        this.toggleModal = this.toggleModal.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
        this.handleCompanyLogout = this.handleCompanyLogout.bind(this)
    }
    toggleModal() {
        this.setState({ isModalOpen: !this.state.isModalOpen })
    }
    toggleNav() {
        this.setState({ isNavOpen: !this.state.isNavOpen })
    }
    handleLogout() {
        console.log('reached at handle logout')
        this.props.logout()
        this.props.history.push('/')
    }
    handleCompanyLogout() {
        console.log('reached at handle logout')
        this.props.logoutCompany()
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <Navbar className='nav-bar' expand='lg'>
                    <div className='container-fluid navbar-container'>
                        <NavbarToggler onClick={this.toggleNav}><i className="fa fa-bars fa-lg" ></i></NavbarToggler>
                        <NavbarBrand className='mr-auto text-white '>
                            <Link className='text-white' to='/'>
                                <span className='pr-1'></span>ReviewNet
                                        </Link>
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className='mr-auto'>
                                <NavItem className='navitem'>
                                    <NavLink className='nav-link text-white' style={{ cursor: "pointer" }}>
                                        <Link className='text-white' to='/home'>
                                            <span className='fa fa-home pr-1'></span>Home
                                        </Link>
                                    </NavLink>
                                </NavItem>
                                <NavItem className='navitem'>
                                    <NavLink className='nav-link text-white' style={{ cursor: "pointer" }}>
                                        <Link className='text-white' to='/products'>
                                            <span className='fa fa-list  pr-1'></span>Products
                                        </Link>
                                    </NavLink>
                                </NavItem>
                                <NavItem className='navitem'>
                                    <NavLink className='nav-link text-white' style={{ cursor: "pointer" }}>
                                        <Link className='text-white' to='/aboutus'>
                                            <span className='fa fa-info pr-1'></span>About Us
                                        </Link>
                                    </NavLink>
                                </NavItem>
                                <NavItem className='navitem'>
                                    <NavLink className='nav-link text-white' style={{ cursor: "pointer" }}>
                                        <Link className='text-white' to='/contactus'>
                                            <span className='fa fa-address-card pr-1'></span>Contact Us
                                        </Link>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav>
                                {Object.keys(this.props.user.user).length !== 0
                                    ?
                                    <>
                                        <NavItem className='ml-auto navitem'>
                                            <NavLink className='nav-link text-white' style={{ cursor: "pointer" }}>
                                                <Link className='text-white' to='/userprofile'>
                                                    <span className='fa fa-user pr-1'></span> {this.props.user.user.user.fullname}
                                                </Link>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem className='ml-auto navitem'>
                                            <NavLink className='nav-link text-white' style={{ cursor: "pointer" }}>
                                                <Link className='text-white' to='/' onClick={() => this.handleLogout()}>
                                                    <span className='fa fa-sign-out pr-1'></span> Log out
                                    </Link>
                                            </NavLink>
                                        </NavItem>
                                    </>
                                    :
                                    Object.keys(this.props.company.company).length !== 0 ?
                                        <>
                                            <NavItem className='ml-auto navitem'>
                                                <NavLink className='nav-link text-white' style={{ cursor: "pointer" }}>
                                                    <Link className='text-white' to='/addproduct'>
                                                        <span className='fa fa-plus pr-1'></span> Add product
                                                    </Link>
                                                </NavLink>
                                            </NavItem>



                                            <NavItem className='ml-auto navitem'>
                                                <NavLink className='nav-link text-white' style={{ cursor: "pointer" }}>
                                                    <Link className='text-white' to='/products/myproducts'>
                                                        <span className='fa fa-list pr-1'></span> My products
                                                    </Link>
                                                </NavLink>
                                            </NavItem>
                                            <NavItem className='ml-auto navitem'>
                                                <NavLink className='nav-link text-white' style={{ cursor: "pointer" }}>
                                                    <Link className='text-white' to='/companyprofile'>
                                                        <span className='fa fa-user pr-1'></span> {this.props.company.company.company.fullname}
                                                    </Link>
                                                </NavLink>
                                            </NavItem>
                                            <NavItem className='ml-auto navitem'>
                                                <NavLink className='nav-link text-white' style={{ cursor: "pointer" }}>
                                                    <Link className='text-white' to='/' onClick={() => this.handleCompanyLogout()}>
                                                        <span className='fa fa-sign-out pr-1'></span> Log out
                                    </Link>
                                                </NavLink>
                                            </NavItem>
                                        </>
                                        :
                                        <>
                                            <NavItem className='ml-auto navitem'>
                                                <NavLink className='nav-link text-white' style={{ cursor: "pointer" }}>
                                                    <Link className='text-white' to='/signin'>
                                                        <span className='fa fa-sign-in pr-1'></span>Log In
                                        </Link>
                                                </NavLink>
                                            </NavItem>
                                            <NavItem className='ml-auto navitem'>
                                                <NavLink className='nav-link text-white' style={{ cursor: "pointer" }}>
                                                    <Link className='text-white' to='/signup'>
                                                        <span className='fa fa-user-plus pr-1'></span>Sign Up
                                        </Link>
                                                </NavLink>
                                            </NavItem>
                                        </>

                                }

                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        )
    }
}
export default Header