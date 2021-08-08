import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import queryString from 'query-string'
import { Card, CardImg, CardTitle, CardSubtitle, CardText, Button, CardBody, BreadcrumbItem, Breadcrumb, Row, Label, FormGroup, Col, Modal, ModalBody, ModalHeader } from 'reactstrap'
import { Loading } from './LoadingComponent'
import { LocalForm, Control, Errors } from 'react-redux-form'
import moment from 'moment';
import ReactQuill, { Quill } from 'react-quill'
import { ImageResize } from 'quill-image-resize-module';
import { ImageDrop } from 'quill-image-drop-module'
import Parser from 'html-react-parser'
import ReactTooltip from 'react-tooltip';
import 'react-quill/dist/quill.snow.css';
import Editor from './EditorComponent'
Quill.register('modules/imageResize', ImageResize);
//  https://api.cloudinary.com/v1_1/sohil/image/upload
const minLength = (len) => (value) => value && value.length >= len
const maxLength = (len) => (value) => !value || value.length <= len
const required = (value) => value && value.length



class ProductForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isModalOpen: false,
            productName: this.props.product ? this.props.product.productName : '',
            price: this.props.product ? this.props.product.price : 0,
            catogeryList: [],
            inputCatogeryList: this.props.product ? this.props.product.catogery : [],
            subcatogeryList: [],
            inputSubCatogeryList: this.props.product ? this.props.product.subCatogery : [],
            featured: this.props.product ? this.props.product.featured : false,
            description: this.props.product ? this.props.product.description : "",
            pic: this.props.product ? this.props.product.pic : ""
        }
        this.toggleModal = this.toggleModal.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
        this.handlePriceChange = this.handlePriceChange.bind(this)
        this.handleProductNameChange = this.handleProductNameChange.bind(this)
        this.handleCatogeryChange = this.handleCatogeryChange.bind(this)
        this.handleCatogerySelect = this.handleCatogerySelect.bind(this)
        this.handleSubCatogeryChange = this.handleSubCatogeryChange.bind(this)
        this.handleSubCatogerySelect = this.handleSubCatogerySelect.bind(this)
        this.handleFeatureChange = this.handleFeatureChange.bind(this)
        this.handlePicChange = this.handlePicChange.bind(this)
        this.handleCatogeryCancle = this.handleCatogeryCancle.bind(this)
        this.handleSubCatogeryCancle = this.handleSubCatogeryCancle.bind(this)
    }
    handleSubmit(value) {
        this.props.history.push('/products')
        console.log(this.state.productName, this.state.price, this.state.inputCatogeryList, this.state.inputSubCatogeryList, this.state.description, this.state.featured)
        console.log(this.state.description)
        this.props.product
            ?
            this.props.editProduct(this.props.product._id, this.state.productName, this.state.price, this.state.inputCatogeryList, this.state.inputSubCatogeryList, this.state.description, this.state.featured, this.state.pic)
            :
            this.props.postProduct(this.state.productName, this.state.price, this.state.inputCatogeryList, this.state.inputSubCatogeryList, this.state.description, this.state.featured, this.state.pic)
    }
    toggleModal() {
        this.setState({
            isModalOpen: !(this.state.isModalOpen)
        })
    }
    handleCatogeryChange(value) {
        const catogeries = ['Electronics', 'Appliances', 'Grocery', 'Fashion', 'Restaurant', 'Hotel', 'Movie', 'Music', 'Book', 'Medical', 'Education', 'Mobile-App', 'Travel', 'Airline']
        if (value === '') {
            this.setState({
                catogeryList: []
            })
        }
        else {
            const matches = catogeries.filter(catogery => catogery.toLowerCase().includes(value.toLowerCase()))
            this.setState({
                catogeryList: matches
            })
        }

    }
    handleCatogerySelect(value) {
        let catogerylist = new Set(this.state.inputCatogeryList)
        catogerylist.add(value)
        this.setState({
            inputCatogeryList: Array.from(catogerylist)
        })
    }
    handleCatogeryCancle(value) {
        this.setState({
            inputCatogeryList: this.state.inputCatogeryList.filter(catogery => catogery !== value)
        })
    }
    handleSubCatogeryCancle(value) {
        this.setState({
            inputSubCatogeryList: this.state.inputSubCatogeryList.filter(subcatogery => subcatogery !== value)
        })
    }
    handleProductNameChange(value) {
        this.setState({
            productName: value
        })
    }
    handlePriceChange(value) {
        this.setState({
            price: value
        })
    }
    handleSubCatogeryChange(value) {
        const subcatogeries = [
            'Mobiles', 'Computer-Pheripherals', 'Mobile-Accessory', 'Powerbank', 'Audio', 'Gaming', 'Storage', 'Laptop-Accessories', 'Camera', 'Tablets', 'Smart-Wearables', 'Smart-Home-Automation', 'Laptop-And-Desktop',
            'Televisions', 'Washing-Machines', 'Air-Conditioners', 'Refrigerators', 'Home-Applicances',
            'Dairy', 'Spices', 'Beverages', 'Soft-Drinks', 'Baking', 'Oils', 'Snacks', 'Frozen-Foods', 'Breads',
            'Men', 'Women', 'Kids', 'Jeans', 'Jacket', 'T-shirt', 'Shirt', 'Hoodie', 'Gym-Clothes', 'Sunglasses', 'Shoes', 'Purse', 'Belt',
            'Ethnic', 'Fastfood', 'Snacks-Bar', 'Casual-Dining', 'Family-Style', 'Fine-Dining',
            'Action', 'Comedy', 'Romantic', 'Adventure', 'Musicals', 'Drama', 'Sci-Fi', 'Horror', 'War', 'Biopic', 'Animation', 'Fantasy', 'Thriller',
            'Comic', 'Study', 'Story', 'History',
            '3-star', '5-star', '7-star', 'Resort', 'Motel', 'Heritage', 'Door-Matery',
            'Rock', 'Folk', 'Jazz', 'Pop', 'Heavy', 'Classical', 'Hip-Hop', 'EDM', 'Lo-Fi', 'English', 'Hindi', 'Panjabi',
            'Hospital',
            'Online-Course', 'Pre-School', 'Primary-School', 'High-School', 'University',
            'Life-Style-App', 'Social-Media', 'Utility-App', 'Gaming-App', 'Entertainment-App', 'Information-App',
            'WeekEnd-Tours', 'Holiday-Tours', 'Amuesment-Park',
            'Domestic', 'International', 'First-Class', 'Buisness-Class', 'Economy-Class'
        ]
        if (value === '') {
            this.setState({
                subcatogeryList: []
            })
        }
        else {
            const matches = subcatogeries.filter(subcatogery => subcatogery.toLowerCase().includes(value.toLowerCase()))
            this.setState({
                subcatogeryList: matches
            })
        }
    }
    handleSubCatogerySelect(value) {
        let subcatogerylist = new Set(this.state.inputSubCatogeryList)
        subcatogerylist.add(value)
        this.setState({
            inputSubCatogeryList: Array.from(subcatogerylist)
        })
    }
    handleDescriptionChange(value) {
        this.setState({
            description: value
        })
        console.log(value)
        console.log('changed')
    }
    handleFeatureChange(value) {
        this.setState({
            featured: !(this.state.featured)
        })
    }
    handlePicChange(value) {
        this.setState({
            pic: value
        })
        console.log('handle change worked, image loaded')
    }
    render() {
        console.log(this.props.product)
        console.log('from edit ?')
        const modules = {
            toolbar: [
                [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
                [{ size: [] }],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [{ 'list': 'ordered' }, { 'list': 'bullet' },
                { 'indent': '-1' }, { 'indent': '+1' }],
                ['link', 'image', 'video'],
                ['clean']
            ],
            imageResize: {
                displaySize: true,
                resize: true
            },
            clipboard: {
                // toggle to add extra line breaks when pasting HTML:
                matchVisual: false,
            }
        }
        const formats = [
            'header', 'font', 'size',
            'bold', 'italic', 'underline', 'strike', 'blockquote',
            'list', 'bullet', 'indent',
            'link', 'image', 'video'
        ]
        const catogerylist = this.state.catogeryList.map(tag => {
            return (
                <span className='review-tag clickable col-auto' onClick={(e) => this.handleCatogerySelect(e.target.innerText)}>{tag}</span>
            )
        })
        const selectedCatogeryList = this.state.inputCatogeryList.map(catogery => {
            return (
                <span className='mt-2'>
                    <span className='selected-tag col-auto'>{catogery}</span><span className='cancle-tag clickable' onClick={(e) => this.handleCatogeryCancle(catogery)}> X </span>
                </span>
            )
        })
        const subcatogerylist = this.state.subcatogeryList.map(tag => {
            return (
                <span className='review-tag clickable col-auto' onClick={(e) => this.handleSubCatogerySelect(e.target.innerText)}>{tag}</span>
            )
        })
        const selectedSubCatogeryList = this.state.inputSubCatogeryList.map(subcatogery => {
            return (
                <span className='mt-2'>
                    <span className='selected-tag col-auto'>{subcatogery}</span><span className='cancle-tag clickable' onClick={(e) => this.handleSubCatogeryCancle(subcatogery)} > X </span>
                </span>
            )
        })
        return (
            <LocalForm onSubmit={this.handleSubmit} row className='product-form p-0 ml-md-4 mr-md-4 ml-1 mr-1'>
                <div className='container-fluid'>
                    <Row >
                        <Col md={12} align='center' className='product-form-head'>
                            {this.props.product ? <h1 className='product-form-heading'>Edit Your product here</h1> : <h1 className='product-form-heading'>Add your product here</h1>}
                        </Col>
                    </Row>
                    <Row className='form-group'>
                        <Col md={6}>
                            <Label md={12} className='pl-0 pr-0' htmlFor='.productname'>Product name</Label>
                            <Col md={12} className='pl-0 pr-0'>
                                <Control.text model='.productname'
                                    id='productname'
                                    className='form-control'
                                    placeholder='Iphone 12 pro max Gray'

                                    onChange={(e) => { this.handleProductNameChange(e.target.value) }}
                                    validators={{ required, minLength: minLength(3), maxLength: maxLength(50) }}
                                />
                                <Errors
                                    className='form-error'
                                    model='.productname'
                                    show='touched'
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be at least 3 character long ',
                                        maxLength: 'Must be at most 50 character long '
                                    }}
                                />
                            </Col>
                        </Col>
                        <Col md={6}>
                            <Label md={12} className='pl-0 pr-0' htmlFor='.price'>Price</Label>
                            <Col md={6} className='pl-0 pr-0'>
                                <Control.text model='.price'
                                    id='price'
                                    className='form-control'
                                    placeholder='799'
                                    onChange={(e) => { this.handlePriceChange(e.target.value) }}
                                    validators={{ required, minLength: minLength(1), maxLength: maxLength(50) }}
                                />
                                <Errors
                                    className='form-error'
                                    model='.price'
                                    show='touched'
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be at least 1 character long ',
                                        maxLength: 'Must be at most 50 character long '
                                    }}
                                />
                            </Col>
                        </Col>
                    </Row>
                    <Row className='form-group button-wrap'>
                        <Label md={12} htmlFor='.pic' className='new-button'>Upload Image</Label>
                        <Col md={4}>
                            <Control.file model='.pic'
                                id='pic'
                                className='form-control'
                                placeholder='upload image here'
                                onChange={(e) => { this.handlePicChange(e.target.files[0]) }} />
                        </Col>
                    </Row>
                    <Row>
                        {catogerylist.length !== 0 &&
                            <div className='col-12'>
                                <h6>Suggested Catogeries</h6>
                                <div className='row review-tags'>
                                    {catogerylist}
                                </div>
                            </div>
                        }
                    </Row>
                    <Row>
                        {this.state.inputCatogeryList.length !== 0 &&
                            <div className='col-12'>
                                <h6>Selected Catogery</h6>
                                <div className='row selected-tags'>
                                    {selectedCatogeryList}
                                </div>
                            </div>
                        }
                    </Row>
                    <Row className='form-group'>
                        <Label md={12} htmlFor='.catogeries'>Catogery</Label>
                        <Col md={4}>
                            <Control.textarea model='.catogeries'
                                id='catogeries'
                                className='form-control'
                                placeholder='Search relevant catogeries here'
                                rows='1'
                                onChange={(e) => { this.handleCatogeryChange(e.target.value) }} />
                        </Col>
                    </Row>
                    <Row>
                        {subcatogerylist.length !== 0 &&
                            <div className='col-12'>
                                <h6>Suggested Sub-Catogeries</h6>
                                <div className='row review-tags'>
                                    {subcatogerylist}
                                </div>
                            </div>
                        }
                    </Row>
                    <Row>
                        {this.state.inputSubCatogeryList.length !== 0 &&
                            <div className='col-12'>
                                <h6>Selected Sub-Catogery</h6>
                                <div className='row selected-tags'>
                                    {selectedSubCatogeryList}
                                </div>
                            </div>
                        }
                    </Row>
                    <Row className='form-group'>
                        <Label md={12} htmlFor='.subcatogeries'>Sub-Catogery</Label>
                        <Col md={4}>
                            <Control.textarea model='.subcatogeries'
                                id='subcatogeries'
                                className='form-control'
                                placeholder='Search relevant Sub-catogeries here'
                                rows='1'
                                onChange={(e) => { this.handleSubCatogeryChange(e.target.value) }} />
                        </Col>
                    </Row>
                    <Row className='form-group'>
                        <Label md={12} htmlFor='.description'>Description</Label>
                        <Col md={12}>
                            <ReactQuill
                                theme='snow'
                                onChange={this.handleDescriptionChange}
                                modules={modules}
                                formats={formats}
                            />
                        </Col>
                    </Row>
                    <Row className='form-group'>
                        <Col md={12} className='feature-form'>
                            <div className='row'>
                                <div className='col-6 col-md-2 pr-0'>
                                    <span className='feature-question m-auto'>Wants to feature ? </span>
                                </div>
                                <div className='col-6 pl-3 pl-md-0 pt-1 col-md-3'>
                                    <Label className="switch">
                                        <input type="checkbox" onChange={this.handleFeatureChange} />
                                        <span className="slider round"></span>
                                    </Label>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <FormGroup row>
                        <Col md={{ size: 12 }} className='text-center pb-3'>
                            <Button type='submit' color="primary">Submit</Button>
                        </Col>
                    </FormGroup>
                </div>
            </LocalForm>
        )
    }
}
export default withRouter(ProductForm);