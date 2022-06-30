import React from 'react'

import { FaAtom,FaArrowRight,FaPhoneSquareAlt } from "react-icons/fa";

const OurServices = () => {
  return (
    <>
       <div class="container-fluid pt-5 pb-3" style={{backgroundColor: 'rgb(248 248 248)', marginTop: '150px'}}>
        <div class="container">
            <div class="row">
                <div class="col-lg-4 mb-5">
                    <small class="text-white text-uppercase font-weight-bold px-1" style={{backgroundColor:'#4267b2'}}>What we do</small>
                    <h2 class="mt-2 mb-3" style={{fontSize: '40px', fontWeight: '800'}}>We Offer Creative Services</h2>
                    <h4 class="font-weight-normal text-muted mb-4">Lorem ut kasd dolores elitr sed est duo ea ipsum justo diam, est erat lorem. Est magna sea clita diam tempor elitr</h4>
                    <a href="" class="btn py-md-2 px-md-4 font-weight-semi-bold"  style={{backgroundColor:'#4267b2'}}>Discover More</a>
                </div>
                <div class="col-lg-8">
                    <div class="row">
                        <div class="col-md-6 mb-5">
                            <div class="d-flex">
                                <i class="fa fa-3x fa-laptop-code text-primary mr-4" style={{width: '60px'}}>
                                   <FaPhoneSquareAlt style={{width: '50px', height:'50px', color:'black', marginRight:'8px', color:'#4267b2'}}/>
                                </i>
                                <div class="d-flex flex-column">
                                    <h4 class="font-weight-bold mb-3">Bảo trì 24/7</h4>
                                    <p>Et kasd justo clita amet kasd, vero amet vero eos kasd diam justo, ipsum diam sed elitr erat</p>
                                    <a class="font-weight-semi-bold" href="" style={{color:'#4267b2 !important'}}>Read More<i class="fa fa-angle-double-right"></i></a>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default OurServices
