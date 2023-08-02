import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";
import Footer from "components/navigation/Footer";
import {useEffect} from 'react';
import Header from "components/about/Header";
import TestStats from "components/about/TestStats";
import Images from "components/about/Images";
import Clients from "components/about/Clients";
import Achievements from "components/about/Achievements";
import Features from "components/about/Features";
import Team from "components/about/Team";
import CTA from "components/about/CTA";

function About(){
    //sirve para que cuando se cargue la página se vea desde el inicio.
    useEffect(() => {
        window.scrollTo(0,0)
    },[])

    return(
        <div>
        <Layout>
            <Navbar/>
                <div className="pt-28">
                 <Header />
                 <TestStats />
                 <Images />
                 <Clients />
                 <Achievements />
                 <Features />
                 <Team />
                 <CTA />
                </div>        
            <Footer/>
        </Layout>
        </div>
    );
}

export default About