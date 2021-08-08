import React, { Component } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';

class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(value) {
        console.log(value)
    }
    render() {
        return (
            <>
                <div className='container-fluid'>
                    <div className='row index'>
                        <div className='col-12 col-md-6 mt-lg-4 pt-lg-5'>
                            <h1 className='index-heading mt-4 pt-4'>Everything <br /> that can be sold <br /> in the world, <br />can be reviewed</h1>
                            <button className='explore-product-btn' onClick={() => { this.props.history.push('/products') }}>Explore Products! <i class="fa fa-space-shuttle" aria-hidden="true"></i></button>
                        </div>
                        <div className='col-12 col-md-6'>
                            <img className="img img-responsive " src="/assets/images/rating.jpg" alt="Card image " />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Index