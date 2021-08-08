import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { UncontrolledDropdown, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Sidebar extends Component {
    constructor(props) {
        super(props)
        this.changeRoute = this.changeRoute.bind(this)
    }
    changeRoute(catogery) {
        const path = '/products?catogery=' + catogery
        this.props.history.push(path);
    }

    render() {
        return (
            <div className='container-fluid'>
                <div className='row sidebar'>
                    <div className='col-10 pl-0 pr-0'>
                        <Link to='/products/catogery/Electronics'><li className='sidebar-list-item list-unstyled' ><i className='fa fa-microchip pr-2'></i>Electronics</li></Link>
                    </div>
                    <div className='col-2 p-0'>
                        <UncontrolledDropdown >
                            <DropdownToggle caret className='catogery-dropdown' />
                            <DropdownMenu>
                                <DropdownItem header>Devices</DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Mobiles' className='sub-catogery'><li className=' list-unstyled' >Mobiles</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Camera' className='sub-catogery'><li className=' list-unstyled' >Camera</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Tablets' className='sub-catogery'><li className=' list-unstyled' >Tablets</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Smart-Wearables' className='sub-catogery'><li className=' list-unstyled' >Smart Wearables</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Laptop-And-Desktop' className='sub-catogery'><li className=' list-unstyled' >Laptop and Desktop</li></Link></DropdownItem>
                                <DropdownItem divider></DropdownItem>
                                <DropdownItem header>Accessories</DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Computer-Pheripherals' className='sub-catogery'><li className=' list-unstyled' >Computer-Pheripherals</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Mobile-Accessory' className='sub-catogery'><li className=' list-unstyled' >Mobile Accessory</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Powerbank' className='sub-catogery'><li className=' list-unstyled' >Powerbank</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Audio' className='sub-catogery'><li className=' list-unstyled' >Audio</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Gaming' className='sub-catogery'><li className=' list-unstyled' >Gaming</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Storage' className='sub-catogery'><li className=' list-unstyled' >Storage</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Laptop-Accessories' className='sub-catogery'><li className=' list-unstyled' >Laptop Accessories</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Smart-Home-Automation' className='sub-catogery'><li className=' list-unstyled' >Smart Home automation</li></Link></DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </div>
                </div>

                <div className='row sidebar'>
                    <div className='col-10 pl-0 pr-0'>
                        <Link to='/products/catogery/Grocery'><li className='sidebar-list-item list-unstyled' ><i className='fa fa-shopping-basket pr-2'></i>Grocery</li></Link>
                    </div>
                    <div className='col-2 p-0'>
                        <UncontrolledDropdown >
                            <DropdownToggle caret className='catogery-dropdown' />
                            <DropdownMenu>
                                <DropdownItem header>Kitchen</DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Dairy' className='sub-catogery'><li className=' list-unstyled' >Dairy</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Spices' className='sub-catogery'><li className=' list-unstyled' >Spices</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Oils' className='sub-catogery'><li className=' list-unstyled' >Oils</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Frozen-Foods' className='sub-catogery'><li className=' list-unstyled' >Frozen Foods</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Breads' className='sub-catogery'><li className=' list-unstyled' >Breads</li></Link></DropdownItem>
                                <DropdownItem divider></DropdownItem>
                                <DropdownItem header>Instant</DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Beverages' className='sub-catogery'><li className=' list-unstyled' >Beverages</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Soft-Drinks' className='sub-catogery'><li className=' list-unstyled' >Soft Drinks</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Baking' className='sub-catogery'><li className=' list-unstyled' >Baking</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Snacks' className='sub-catogery'><li className=' list-unstyled' >Snacks</li></Link></DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </div>
                </div>
                <div className='row sidebar'>
                    <div className='col-10 pl-0 pr-0'>
                        <Link to='/products/catogery/Fashion'><li className='sidebar-list-item list-unstyled' ><i className='fa fa-heart pr-2'></i>Fashion</li></Link>
                    </div>
                    <div className='col-2 p-0'>
                        <UncontrolledDropdown >
                            <DropdownToggle caret className='catogery-dropdown' />
                            <DropdownMenu>
                                <DropdownItem header>Gen</DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Men' className='sub-catogery'><li className=' list-unstyled' >Men</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Women' className='sub-catogery'><li className=' list-unstyled' >Women</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Kids' className='sub-catogery'><li className=' list-unstyled' >Kids</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Uni-Sex' className='sub-catogery'><li className=' list-unstyled' >Uni-Sex</li></Link></DropdownItem>

                                <DropdownItem divider></DropdownItem>
                                <DropdownItem header>Clothes</DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Jeans' className='sub-catogery'><li className=' list-unstyled' >Jeans</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Jacket' className='sub-catogery'><li className=' list-unstyled' >Jacket</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/T-shirt' className='sub-catogery'><li className=' list-unstyled' >T-shirt</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Shirt' className='sub-catogery'><li className=' list-unstyled' >Shirt</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Hoodie' className='sub-catogery'><li className=' list-unstyled' >Hoodie</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Gym-Clothes' className='sub-catogery'><li className=' list-unstyled' >Gym clothes</li></Link></DropdownItem>
                                <DropdownItem divider></DropdownItem>
                                <DropdownItem header>Accessories</DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Sunglasses' className='sub-catogery'><li className=' list-unstyled' >Sunglasses</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Shoes' className='sub-catogery'><li className=' list-unstyled' >Shoes</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Purse' className='sub-catogery'><li className=' list-unstyled' >Purse</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Belt' className='sub-catogery'><li className=' list-unstyled' >Belt</li></Link></DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </div>
                </div>
                <div className='row sidebar'>
                    <div className='col-10 pl-0 pr-0'>
                        <Link to='/products/catogery/Appliances'><li className='sidebar-list-item list-unstyled' ><i className='fa fa-television pr-2'></i>Appliances</li></Link>
                    </div>
                    <div className='col-2 p-0'>
                        <UncontrolledDropdown >
                            <DropdownToggle caret className='catogery-dropdown' />
                            <DropdownMenu>
                                <DropdownItem><Link to='/products/subcatogery/Televisions' className='sub-catogery'><li className=' list-unstyled' >Televisions</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Washing-Machines' className='sub-catogery'><li className=' list-unstyled' >Washing Machines</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Air-Conditioners' className='sub-catogery'><li className=' list-unstyled' >Air Conditioners</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Refrigerators' className='sub-catogery'><li className=' list-unstyled' >Refrigerators</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Home-Applicances' className='sub-catogery'><li className=' list-unstyled' >Home Applicances</li></Link></DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </div>
                </div>
                <div className='row sidebar'>
                    <div className='col-10 pl-0 pr-0'>
                        <Link to='/products/catogery/Restaurant'><li className='sidebar-list-item list-unstyled' ><i className='fa fa-cutlery pr-2'></i>Restaurants</li></Link>
                    </div>
                    <div className='col-2 p-0'>
                        <UncontrolledDropdown >
                            <DropdownToggle caret className='catogery-dropdown' />
                            <DropdownMenu>
                                <DropdownItem><Link to='/products/subcatogery/Ethnic' className='sub-catogery'><li className=' list-unstyled' >Ethnic</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Fastfood' className='sub-catogery'><li className=' list-unstyled' >Fast Food</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Snacks-Bar' className='sub-catogery'><li className=' list-unstyled' >Snacks Bar</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Casual-Dining' className='sub-catogery'><li className=' list-unstyled' >Casual dining</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Family-Style' className='sub-catogery'><li className=' list-unstyled' >Family style</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Fine-Dining' className='sub-catogery'><li className=' list-unstyled' >Fine dining</li></Link></DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </div>
                </div>
                <div className='row sidebar'>
                    <div className='col-10 pl-0 pr-0'>
                        <Link to='/products/catogery/Hotel'><li className='sidebar-list-item list-unstyled' ><i className='fa fa-bed pr-2'></i>Hotels</li></Link>
                    </div>
                    <div className='col-2 p-0'>
                        <UncontrolledDropdown >
                            <DropdownToggle caret className='catogery-dropdown' />
                            <DropdownMenu>
                                <DropdownItem header>Luxury</DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/3-star' className='sub-catogery'><li className=' list-unstyled' >3 star</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/5-star' className='sub-catogery'><li className=' list-unstyled' >5 star</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/7-star' className='sub-catogery'><li className=' list-unstyled' >7 star</li></Link></DropdownItem>
                                <DropdownItem divider></DropdownItem>
                                <DropdownItem header>Facility</DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Resort' className='sub-catogery'><li className=' list-unstyled' >Resort</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Motel' className='sub-catogery'><li className=' list-unstyled' >Motel</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Heritage' className='sub-catogery'><li className=' list-unstyled' >Heritage</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Door-Matery' className='sub-catogery'><li className=' list-unstyled' >Door Matery</li></Link></DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </div>
                </div>
                <div className='row sidebar'>
                    <div className='col-10 pl-0 pr-0'>
                        <Link to='/products/catogery/Movie'><li className='sidebar-list-item list-unstyled' ><i className='fa fa-film pr-2'></i>Movies</li></Link>
                    </div>
                    <div className='col-2 p-0'>
                        <UncontrolledDropdown >
                            <DropdownToggle caret className='catogery-dropdown' />
                            <DropdownMenu>
                                <DropdownItem><Link to='/products/subcatogery/Action' className='sub-catogery'><li className=' list-unstyled' >Actions</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Comedy' className='sub-catogery'><li className=' list-unstyled' >Comedies</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Romantic' className='sub-catogery'><li className=' list-unstyled' >Romantic</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Adventure' className='sub-catogery'><li className=' list-unstyled' >Adventure</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Musicals' className='sub-catogery'><li className=' list-unstyled' >Musicals</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Drama' className='sub-catogery'><li className=' list-unstyled' >Drama</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Sci-Fi' className='sub-catogery'><li className=' list-unstyled' >Sci-Fi</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Horror' className='sub-catogery'><li className=' list-unstyled' >Horror</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/War' className='sub-catogery'><li className=' list-unstyled' >War</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Biopic' className='sub-catogery'><li className=' list-unstyled' >Biopic</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Animation' className='sub-catogery'><li className=' list-unstyled' >Animation</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Fantasy' className='sub-catogery'><li className=' list-unstyled' >Fantasy</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Thriller' className='sub-catogery'><li className=' list-unstyled' >Thriller</li></Link></DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </div>
                </div>
                <div className='row sidebar'>
                    <div className='col-10 pl-0 pr-0'>
                        <Link to='/products/catogery/Music'><li className='sidebar-list-item list-unstyled' ><i className='fa fa-music pr-2'></i>Music</li></Link>
                    </div>
                    <div className='col-2 p-0'>
                        <UncontrolledDropdown >
                            <DropdownToggle caret className='catogery-dropdown' />
                            <DropdownMenu>
                                <DropdownItem header>Genre</DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Rock' className='sub-catogery'><li className=' list-unstyled' >Rock</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Folk' className='sub-catogery'><li className=' list-unstyled' >Folk</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Jazz' className='sub-catogery'><li className=' list-unstyled' >Jazz</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Pop' className='sub-catogery'><li className=' list-unstyled' >Pop</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Heavy' className='sub-catogery'><li className=' list-unstyled' >Heavy</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Classical' className='sub-catogery'><li className=' list-unstyled' >Classical</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Hip-Hop' className='sub-catogery'><li className=' list-unstyled' >Hip-Hop</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/EDM' className='sub-catogery'><li className=' list-unstyled' >EDM</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Lo-Fi' className='sub-catogery'><li className=' list-unstyled' >Lo-Fi</li></Link></DropdownItem>
                                <DropdownItem divider></DropdownItem>
                                <DropdownItem header>Language</DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/English' className='sub-catogery'><li className=' list-unstyled' >English</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Hindi' className='sub-catogery'><li className=' list-unstyled' >Hindi</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Panjabi' className='sub-catogery'><li className=' list-unstyled' >Panjabi</li></Link></DropdownItem>

                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </div>
                </div>
                <div className='row sidebar'>
                    <div className='col-10 pl-0 pr-0'>
                        <Link to='/products/catogery/Book'><li className='sidebar-list-item list-unstyled' ><i className='fa fa-book pr-2'></i>Books</li></Link>
                    </div>
                    <div className='col-2 p-0'>
                        <UncontrolledDropdown >
                            <DropdownToggle caret className='catogery-dropdown' />
                            <DropdownMenu>
                                <DropdownItem><Link to='/products/subcatogery/Story' className='sub-catogery'><li className=' list-unstyled' >Story</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/History' className='sub-catogery'><li className=' list-unstyled' >History</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Study' className='sub-catogery'><li className=' list-unstyled' >Study</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Comic' className='sub-catogery'><li className=' list-unstyled' >Comic</li></Link></DropdownItem>

                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </div>
                </div>
                <div className='row sidebar'>
                    <div className='col-10 pl-0 pr-0'>
                        <Link to='/products/catogery/Medical'><li className='sidebar-list-item list-unstyled' ><i className='fa fa-heartbeat pr-2'></i>Medical</li></Link>
                    </div>
                    <div className='col-2 p-0'>
                        <UncontrolledDropdown >
                            <DropdownToggle caret className='catogery-dropdown' />
                            <DropdownMenu>
                                <DropdownItem><Link to='/products/subcatogery/Hospital' className='sub-catogery'><li className=' list-unstyled' >Hospital</li></Link></DropdownItem>

                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </div>
                </div>
                <div className='row sidebar'>
                    <div className='col-10 pl-0 pr-0'>
                        <Link to='/products/catogery/Education'><li className='sidebar-list-item list-unstyled' ><i className='fa fa-graduation-cap pr-2'></i>Education</li></Link>
                    </div>
                    <div className='col-2 p-0'>
                        <UncontrolledDropdown >
                            <DropdownToggle caret className='catogery-dropdown' />
                            <DropdownMenu>
                                <DropdownItem><Link to='/products/subcatogery/Online-Course' className='sub-catogery'><li className=' list-unstyled' >Online Course</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Pre-School' className='sub-catogery'><li className=' list-unstyled' >Pre School</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Primary-School' className='sub-catogery'><li className=' list-unstyled' >Primary School</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/High-School' className='sub-catogery'><li className=' list-unstyled' >High School</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/University' className='sub-catogery'><li className=' list-unstyled' >University</li></Link></DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem header>Medium</DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/English-Medium' className='sub-catogery'><li className=' list-unstyled' >English-Medium</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Hindi-Medium' className='sub-catogery'><li className=' list-unstyled' >Hindi-Medium</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Gujarati-Medium' className='sub-catogery'><li className=' list-unstyled' >Gujarati-Medium</li></Link></DropdownItem>
                                <DropdownItem divider></DropdownItem>
                                <DropdownItem header>Stream</DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Engineering-stream' className='sub-catogery'><li className=' list-unstyled' >Engineering</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Medical-Medium' className='sub-catogery'><li className=' list-unstyled' >Medical</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Commerce' className='sub-catogery'><li className=' list-unstyled' >Commerce</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Arts' className='sub-catogery'><li className=' list-unstyled' >Arts</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Law' className='sub-catogery'><li className=' list-unstyled' >Law</li></Link></DropdownItem>

                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </div>
                </div>
                <div className='row sidebar'>
                    <div className='col-10 pl-0 pr-0'>
                        <Link to='/products/catogery/Mobile-App'><li className='sidebar-list-item list-unstyled' ><i className='fa fa-android pr-2'></i>Mobile Apps</li></Link>
                    </div>
                    <div className='col-2 p-0'>
                        <UncontrolledDropdown >
                            <DropdownToggle caret className='catogery-dropdown' />
                            <DropdownMenu>
                                <DropdownItem><Link to='/products/subcatogery/Life-Style-App' className='sub-catogery'><li className=' list-unstyled' >Life-Style App</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Social-Media' className='sub-catogery'><li className=' list-unstyled' >Social-Media</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Utility-App' className='sub-catogery'><li className=' list-unstyled' >Utility App</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Gaming-App' className='sub-catogery'><li className=' list-unstyled' >Gaming App</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Entertainment-App' className='sub-catogery'><li className=' list-unstyled' >Entertainment App</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Information-App' className='sub-catogery'><li className=' list-unstyled' >Information App</li></Link></DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </div>
                </div>
                <div className='row sidebar'>
                    <div className='col-10 pl-0 pr-0'>
                        <Link to='/products/catogery/Travel'><li className='sidebar-list-item list-unstyled' ><i className='fa fa-globe pr-2'></i>Travels</li></Link>
                    </div>
                    <div className='col-2 p-0'>
                        <UncontrolledDropdown >
                            <DropdownToggle caret className='catogery-dropdown' />
                            <DropdownMenu>
                                <DropdownItem><Link to='/products/subcatogery/WeekEnd-Tours' className='sub-catogery'><li className=' list-unstyled' >WeekEnd-Tours</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Holiday-Tours' className='sub-catogery'><li className=' list-unstyled' >Holiday-Tours</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Amuesment-Park' className='sub-catogery'><li className=' list-unstyled' >Amuesment Park</li></Link></DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </div>
                </div>
                <div className='row sidebar'>
                    <div className='col-10 pl-0 pr-0'>
                        <Link to='/products/catogery/Airline'><li className='sidebar-list-item list-unstyled' ><i className='fa fa-plane pr-2'></i>Air line</li></Link>
                    </div>
                    <div className='col-2 p-0'>
                        <UncontrolledDropdown >
                            <DropdownToggle caret className='catogery-dropdown' />
                            <DropdownMenu>
                                <DropdownItem header>Distance</DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Domestic' className='sub-catogery'><li className=' list-unstyled' >Domestic</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/International' className='sub-catogery'><li className=' list-unstyled' >International</li></Link></DropdownItem>
                                <DropdownItem divider></DropdownItem>
                                <DropdownItem header>Class</DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/First-Class' className='sub-catogery'><li className=' list-unstyled' >First Class</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Buisness-Class' className='sub-catogery'><li className=' list-unstyled' >Buisness Class</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Economy-Class' className='sub-catogery'><li className=' list-unstyled' >Economy Class</li></Link></DropdownItem>

                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(Sidebar)
