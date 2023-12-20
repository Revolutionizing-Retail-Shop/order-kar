import React from 'react'
import { Typography} from '@mui/material'

function Home(){

  return(
    <div className="bg-body-secondary">
    <div className="col-12 h-50 bg-transparent px-4" > 
      <div id="carouselExampleControls" class="carousel slide" style={{height:'30rem'}} data-bs-ride="carousel">
        <div class="carousel-inner" style={{height:'30rem'}}>
          <div class="carousel-item active" >
      
          <img src={require('../../assets/images/home/Hero-image-min-min.webp')} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item" >
            <img src={require('../../assets/images/home/photo1.avif')} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item" >
            <img src={require('../../assets/images/home/photo2.avif')} class="d-block w-100" alt="..."/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>  
    </div>
    <div className="col-12 bg-transparent d-flex justify-content-center  ">
    <Typography sx={{color:'black'}} variant='h3'>Ordering Made Easy,<br /> Get your Order at Your Doorstep</Typography>  
    
    </div>
    </div>
    
  );
}

export default Home;