import React, { useCallback, useState, useEffect, useRef } from 'react'
import axios from "axios";

import Helmet from '../components/Helmet'
import CheckBox from '../components/CheckBox'

import productData from '../assets/fake-data/products'
// import category from '../assets/fake-data/category'
import colors from '../assets/fake-data/product-color'
import size from '../assets/fake-data/product-size'
import Button from '../components/Button'
import InfinityList from '../components/InfinityList'

const Catalog = () => {
    const [listProduct, setProduct] = useState([]);
    const [category, setCategory] = useState([]);
    useEffect(()=>{
         const fetchData = async () =>{
              const data = await axios.get('https://elevatorsystemdashboard.azurewebsites.net/api/Elevators');
              if(data.status == 200){
                   setProduct(data.data);
              }else{
                   alert('loi')
              }
              
         }
         fetchData();
    },[]);
    console.log('listProduct',listProduct)

    useEffect(()=>{
        const fetchData = async () =>{
             const data = await axios.get('https://elevatorsystemdashboard.azurewebsites.net/api/Categories');
             if(data.status == 200){
                setCategory(data.data);
             }else{
                  alert('loi')
             }
             
        }
        fetchData();
   },[]);
//    console.log('category', category)
   
    const initFilter = {
        category: [],
        // color: [],
        // size: []
    }

    // const productList = productData.getAllProducts()

    const [products, setProducts] = useState(listProduct)

    const [filter, setFilter] = useState(initFilter)

    const filterSelect = (type, checked, item) => {
        if (checked) {
            switch(type) {
                case "CATEGORY":
                    setFilter({...filter, category: [...filter.category, item.ID]})
                    break
               
                default:
            }
        } else {
            switch(type) {
                case "CATEGORY":
                    const newCategory = filter.category.filter(e => e !== item.ID)
                    setFilter({...filter, category: newCategory})
                    break
               
                default:
            }
        }
    }

    const clearFilter = () => setFilter(initFilter)

    const updateProducts = useCallback(
        () => {
            let temp = listProduct

            if (filter.category.length > 0) {
                temp = temp.filter(e => filter.category.includes(e.CategoryID))
            }   

            setProducts(temp)
        },
        [filter, listProduct],
    )

    useEffect(() => {
        updateProducts()
    }, [updateProducts])

    const filterRef = useRef(null)

    const showHideFilter = () => filterRef.current.classList.toggle('active')

    return (
        <Helmet title="Sản phẩm">
            <div className="catalog">
                <div className="catalog__filter" ref={filterRef}>
                    <div className="catalog__filter__close" onClick={() => showHideFilter()}>
                        <i className="bx bx-left-arrow-alt"></i>
                    </div>
                    <div className="catalog__filter__widget">
                        <div className="catalog__filter__widget__title">
                            danh mục sản phẩm
                        </div>
                        <div className="catalog__filter__widget__content">
                            {
                                category.map((item, index) => (
                                    <div key={index} className="catalog__filter__widget__content__item">
                                        <CheckBox
                                            label={item.Name}
                                            onChange={(input) => filterSelect("CATEGORY", input.checked, item)}
                                            checked={filter.category.includes(item.ID)}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    {/* <div className="catalog__filter__widget">
                        <div className="catalog__filter__widget__title">
                            màu sắc
                        </div>
                        <div className="catalog__filter__widget__content">
                            {
                                colors.map((item, index) => (
                                    <div key={index} className="catalog__filter__widget__content__item">
                                        <CheckBox
                                            label={item.display}
                                            onChange={(input) => filterSelect("COLOR", input.checked, item)}
                                            checked={filter.color.includes(item.color)}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div> */}
 {/*
                    <div className="catalog__filter__widget">
                        <div className="catalog__filter__widget__title">
                            kích cỡ
                        </div>
                        <div className="catalog__filter__widget__content">
                            {
                                size.map((item, index) => (
                                    <div key={index} className="catalog__filter__widget__content__item">
                                        <CheckBox
                                            label={item.display}
                                            onChange={(input) => filterSelect("SIZE", input.checked, item)}
                                            checked={filter.size.includes(item.size)}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div> */}

                    <div className="catalog__filter__widget">
                        <div className="catalog__filter__widget__content">
                            <Button size="sm" onClick={clearFilter}>xóa bộ lọc</Button>
                        </div>
                    </div>
                </div>
                <div className="catalog__filter__toggle">
                    <Button size="sm" onClick={() => showHideFilter()}>bộ lọc</Button>
                </div>
                <div className="catalog__content">
                    <InfinityList
                        product={products}
                    />
                </div>
            </div>
        </Helmet>
    )
}

export default Catalog
