import React from 'react'

const Blog = () => {
     const imgs = [
          "https://www.wpbeginner.com/wp-content/uploads/2016/11/blogimagetools.jpg",
          "https://www.markuptag.com/images/user-img-2.jpg",
          "https://www.markuptag.com/images/user-img-3.jpg",
     ]
  return (
    <>
      <div class="container-fluid pt-5">
        <div class="container">
            <div class="text-center">
                {/* <small class="bg-primary text-white text-uppercase font-weight-bold text-center px-1">Our Blog</small> */}
                <h2 class="mt-2 mb-5" style={{color:'#4267b2'}}>Latest From Blog</h2>
            </div>
            <div class="row">
                <div class="col-md-6 mb-5">
                    <div class="position-relative">
                        <img class="img-fluid w-100" src={imgs[0]} alt=""/>
                        <div class="position-absolute d-flex flex-column align-items-center justify-content-center"
                         //    style="width: 80px; height: 80px; bottom: 0; left: 0;"
                            style={{width: '80px', height: '80px', bottom: '0', left: '0', backgroundColor:'#4267b2'}}
                            >
                            <h6 class="text-uppercase mt-2 mb-n2">Jan</h6>
                            <h1 class="m-0">01</h1>
                        </div>
                    </div>
                    <div class="border border-top-0" style={{padding:'30'}}>
                        <div class="d-flex mb-3">
                            <div class="d-flex align-items-center">
                                <img class="rounded-circle"
                                style={{width: '40px', height: '40px'}}
                              //    style="width: 40px; height: 40px;"
                                  src={imgs[1]} alt=""/>
                                <a class="text-muted ml-2" href="">John Doe</a>
                            </div>
                            <div class="d-flex align-items-center ml-4">
                                <i class="far fa-bookmark text-primary"></i>
                                <a class="text-muted ml-2" href="">Web Design</a>
                            </div>
                        </div>
                        <a class="h5 font-weight-bold" href="">Kasd tempor diam sea justo dolor kasd amet dolor labore amet clita est diam dolor</a>
                    </div>
                </div>
                <div class="col-md-6 mb-5">
                    <div class="position-relative">
                        <img class="img-fluid w-100" src={imgs[0]} alt=""/>
                        <div class="position-absolute bg-primary d-flex flex-column align-items-center justify-content-center"
                            style={{width: '80px', height: '80px', bottom: '0', left: '0', backgroundColor:'#4267b2'}}>
                            <h6 class="text-uppercase mt-2 mb-n2">Jan</h6>
                            <h1 class="m-0">01</h1>
                        </div>
                    </div>
                    <div class="border border-top-0"  style={{padding:'30'}}>
                        <div class="d-flex mb-3">
                            <div class="d-flex align-items-center">
                                <img class="rounded-circle"  style={{width: '40px', height: '40px'}} src={imgs[0]} alt=""/>
                                <a class="text-muted ml-2" href="">John Doe</a>
                            </div>
                            <div class="d-flex align-items-center ml-4">
                                <i class="far fa-bookmark text-primary"></i>
                                <a class="text-muted ml-2" href="">Web Design</a>
                            </div>
                        </div>
                        <a class="h5 font-weight-bold" href="">Kasd tempor diam sea justo dolor kasd amet dolor labore amet clita est diam dolor</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Blog
