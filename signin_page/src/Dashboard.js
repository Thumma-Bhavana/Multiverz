import React from "react";
import "./main.css";

function Dashboard()
{
    return(
        <div class="main">
            {/* Navigation bar */}
            <nav class="navbar navbar-dark bg-dark text-light fixed-top red-font fadein-animation1">
                <div class="container-fluid">
                    <div className="nav-brand"> {/*Branding and Navigations */}
                    <img src=".\logo192.png" alt="" width="30" height="24" class="d-inline-block align-text-top"/>  JobVerse
                    </div>
                     <a class="d-flex" href="/Signin">Sign Out</a>     
                </div>
            </nav>
           {/* Card Container of JobVerse using Bootstrap 5 */}
            <div class="container my-5">
                <div className="row d-flex justify-content-center">
                    <div class="card text-dark col-lg-6 mx-2 my-3 image-card w3-animate-left">
                    <img src="banner.jpg" class="img-fluid" alt="JobPool"/>
                    <div class="card-img-overlay">
                        <h1 class="card-title">Welcome to JobVerse</h1>
                    </div>
                    </div>
                    <div class="card text-dark bg-light-jobverse text-center col-lg-4 mx-2 my-3 w3-animate-right" style={{maxWidth: 25 +'rem'}}>
                        <div class="card-header  bg-light-jobverse"><h5 class="card-title">JobVerse</h5></div>
                        <div class="card-body">
                            <p class="card-text">
                        JobVerz is conceptualized as a job analytics platform that will cater to a wide range of clients – individuals, companies, academic institutions, and governments. The platform is proposed to be developed by <a className="red-font" data-bs-toggle="modal" data-bs-target="#Multiverz" href="#">Multiverz</a> in partnership with <a  className="red-font" data-bs-toggle="modal" data-bs-target="#Recruiterpal" href="#">Recruiterpal</a>. <br/>
                        <br/>
                        </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Bootstrap Modals with pop on click animation for displaying the Multiverse and JobVerse */}
            <div class="modal fade" id="Multiverz" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Mutiverse</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    Multiverz is a Singapore based social enterprise that aims to help governments, businesses, and individuals to explore and pursue alternative pathways to the future by leveraging the power of analytics.
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
                </div>
                <div class="modal fade" id="Recruiterpal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Recruiterpal</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    Recruiterpal is a Singapore based recruitment platform that caters to the tech hiring needs of SMEs and larger enterprises. <br/>
                        <br/>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    );
}

export default Dashboard;