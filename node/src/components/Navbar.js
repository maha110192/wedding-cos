import React, {useState} from 'react';


function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container">
            <a class="navbar-ico"margin={'10px 14px'}><img src="../wedding-rings.png" width={'25px'} height={'25px'} ></img></a>
            <i class="fas fa-accessible-icon    ">M&A</i>
            {/* <a class="navbar-brand" href="/">M&A</a> */}
            <button class="navbar-toggler hidden-lg-up" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"  aria-label="Toggle navigation"></button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" href="#" aria-current="page">Home<span class="visually-hidden">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Happy Couple</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Venues</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Want to Support Us?</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><b>RVSP</b></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    
  )
}

export default Navbar