import React from 'react';
import Menu from "../Components/NavBar/Menu";
import TopBanner from "../Components/TopBanner/TopBanner";
import Apartments from "../Components/Apartments/Apartments";
import Services from "../Components/Services/Services";
import Footer from "../Components/Footer/Footer";
import AuthProvider from "../Context/AuthProvider";

const HomePage = () => {
    return (
        <div>

                <Menu></Menu>
                <TopBanner></TopBanner>
                <Apartments></Apartments>
                <Services></Services>
                <Footer></Footer>


        </div>
    );
};

export default HomePage;