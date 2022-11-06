import React from 'react'
import '../src/App.css';

export const Detail = () => {
  return (
   <>
    <nav className="navbar-collapse dropdown-nav collapse " id="navbar" >
 <div className="dropdown-nav__container container-xxl d-flex align-items-start align-items-md-center">
   <div className="row align-items-start">
     <div className="col-12 col-sm-4 mt-4">
       <a href="#" className="row text-decoration-none">
         <div className="col-2 col-sm-12 mb-4">
           <img src="img-1.jpg" alt="Coffe Flavour" className="img-fluid" width="553" height="746" loading="lazy"/>
         </div>
         <div className="col-10 text-dark">
           <h3>Amazing Flavour</h3>
           <p>Find out more about our Amazing Flavour</p>
           <p>Learn More <i className="bi bi-arrow-right-short"></i></p>
         </div>
       </a>
     </div>
     <div className="col-12 col-sm-4 mt-4">
       <a href="#" className="row text-decoration-none">
         <div className="col-2 col-sm-12 mb-4">
           <img src="img-2.jpg" alt="Coffe Flavour" className="img-fluid" width="553" height="746" loading="lazy"/>
         </div>
         <div className="col-10 text-dark">
           <h3>Surprising Benefits</h3>
           <p>Find out more about our Surprising Benefits</p>
           <p>Learn More <i className="bi bi-arrow-right-short"></i></p>
         </div>
       </a>
     </div>
     <div className="col-12 col-sm-4 mt-4">
       <a href="#" className="row text-decoration-none">
         <div className="col-2 col-sm-12 mb-4">
           <img src="img-3.jpg" alt="Coffe Flavour" className="img-fluid" width="553" height="746" loading="lazy"/>
         </div>
         <div className="col-10 text-dark">
           <h3>Essential Nutrients</h3>
           <p>Find out more about our Essential Nutrients</p>
           <p>Learn More <i className="bi bi-arrow-right-short"></i></p>
         </div>
       </a>
     </div>
   </div>

   <button className="navbar-toggler dropdown-nav__closeNavBtn" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="true" aria-label="Toggle navigation">
     <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
       <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path>
     </svg>
   </button>
 </div>
</nav>
   
   </>
  )
}
