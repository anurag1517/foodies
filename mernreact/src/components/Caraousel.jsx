import React from 'react'

export default function Caraousel() {
  return (
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ObjectFit:"contain !important"}}>
  <div className="carousel-inner" id='carousel'>
    <div className="carousel-caption" style={{zIndex:"10"}}>
          <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
    </form>
    </div>
    <div className="carousel-item active">
      <img src="gp4k2jro_burgers_625x300_20_June_22.jpg" className="d-block w-100" style={{filter:"brightness(30%)"}} alt="..."/>
    </div>
    <div className="carousel-item ">
      <img src="AR-24878-bbq-chicken-pizza-beauty-4x3-39cd80585ad04941914dca4bd82eae3d (1).jpg" className="d-block w-100" alt="..."/>
      
    </div>
    <div className="carousel-item ">
      <img src="1568222255998.jpg" className="d-block w-100" alt="..."/>
     
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}
