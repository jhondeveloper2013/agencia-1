import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";
import Footer from "components/navigation/Footer";
import {useEffect} from 'react';
import Header from "components/careers/Header";
import Testimonial from "components/careers/Testimonial";
import Companies from "components/careers/Companies";
import Features from "components/careers/Features";
import PositionsList from "components/careers/PositionsList";

function Careers(){
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
                <Testimonial />                
                <div className="bg-gray-50">
                    <div className=" mx-auto lg:mx-12 pt-24 pb-12">
                        <h3 className="lg:text-5xl text-3xl px-4 font-bold leading-6 text-gray-900">Work with top notch companies
                    </h3>
                    </div>
                    </div>
                </div>        
                <Companies />
                <Features />
                <PositionsList />
            <Footer/>
        </Layout>
        </div>
    );
}

export default Careers