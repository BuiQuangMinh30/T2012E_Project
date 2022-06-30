import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import { useDispatch } from 'react-redux'

import { set } from '../redux/product-modal/productModalSlice'

import Button from './Button'

import numberWithCommas from '../utils/numberWithCommas'

// props home component
const ProductCard = props => {
    console.log('props, props',props)

    let image = '';
    let counter = props.img.split(",").length - 1
    console.log('counter'   , counter)
    if(counter  == 0){
        image = props.img
    }
        image = props.img.split(',')[0];


    const dispatch = useDispatch()

    return (
        <div className="product-card">
            {/* <h2>hello</h2> */}
            {/* <Link to={`/catalog/${props.slug}`}> */}
            <Link to={`/catalog/${props.ID}`}>
                <div className="product-card__image">
                    <img src={`https://elevatorsystemdashboard.azurewebsites.net${image}`} alt="" />
                    {/* <img src={props.img02} alt="" /> */}
                </div>
                {/* <h3 className="product-card__name">{props.name}</h3> */}
                <h3 className="product-card__name">{props.name}</h3>
                <div className="product-card__price">
                    {props.price} VNĐ
                    {/* <span className="product-card__price__old">
                        <del>{numberWithCommas(399000)}</del>
                    </span> */}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  </div>
            </Link>
            <div className="product-card__btn">
                <Button
                    size="sm"    
                    icon="bx bx-cart"
                    animate={true}
                    // onClick={() => dispatch(set(props.slug))}
                >
                    Xem chi tiết
                </Button>
            </div>
        </div>
    )
}

ProductCard.propTypes = {
    img01: PropTypes.string.isRequired,
    img02: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
}

export default ProductCard
