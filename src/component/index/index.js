import React, { Fragment } from "react";
import Apout from "../apout/Apout";
import Contact from "../contact/contact";
import Footer from "../footer/Footer";
import Home from "../home/Home";
import Portfolio from "../portfolio/Portfoio";
import Profile from "../profile/profile";
import Social from "../socilmedia/Socilmedia";
import Work from "../work/Work";

const Index=()=>{
    return(
        <div>
            <Home/>
            <Work/>
            <Portfolio/>
            <Profile/>
            <Apout/>
            <Social/>
            <Footer/>
            <Contact/>
        </div>
    )
}
export default Index;
