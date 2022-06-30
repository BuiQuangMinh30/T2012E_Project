import React from 'react'

const OurTeam = () => {
     const imgs = [
          "https://www.markuptag.com/images/user-img-1.jpg",
          "https://www.markuptag.com/images/user-img-2.jpg",
          "https://www.markuptag.com/images/user-img-3.jpg",
     ]
  return (
    <>
     <div class="container" style={{ marginTop: '150px'}}>
		<div class="row">
			<div class="col-sm-6 offset-sm-3 mt-4 mb-4">
				<h2 class="text-center" style={{color:'#4267b2'}}>Our Expert Team</h2>
				<p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
			</div>
		</div>

		<div class="row">
			<div class="col-md-4">
				<div class="card-box text-center">
					<div class="user-pic">
						<img src={imgs[0]} class="img-fluid" alt="User Pic"/>
					</div>
					<h4>Rajnish Kumar</h4>
					<h6>Web Designer</h6>
					<hr/>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
					<hr/>
					<a href="#" class="btn" style={{backgroundColor:'#4267b2', color:'#fff' }}>Know More</a>
				</div>
			</div>

			<div class="col-md-4">
				<div class="card-box text-center">
					<div class="user-pic">
						<img src={imgs[1]} class="img-fluid" alt="User Pic"/>
					</div>
					<h4>Satyam Tiwari</h4>
					<h6>Web Developer</h6>
					<hr/>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
					<hr/>
					<a href="#" class="btn" style={{backgroundColor:'#4267b2', color:'#fff' }}>Know More</a>
				</div>
			</div>

			<div class="col-md-4">
				<div class="card-box text-center">
					<div class="user-pic">
						<img src={imgs[2]} class="img-fluid" alt="User Pic"/>
					</div>
					<h4>Salim Malik</h4>
					<h6>Front End Developer</h6>
					<hr/>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
					<hr/>
					<a href="#" class="btn" style={{backgroundColor:'#4267b2', color:'#fff' }}>Know More</a>
				</div>
			</div>
		</div>
	</div>
    </>
  )
}
export default OurTeam;
