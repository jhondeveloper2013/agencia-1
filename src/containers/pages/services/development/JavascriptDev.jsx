import Contact from "components/Contact"
import CasesList from "components/cases/CasesList"
import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Features from "components/services/javascriptdev/Features"
import Header from "components/services/javascriptdev/Header"
import OurClients from "components/services/javascriptdev/OurClients"
import TechStack from "components/services/javascriptdev/TechStack"
import Testimonials from "components/services/javascriptdev/Testimonials"
import Layout from "hocs/layouts/Layout"


function JavascriptDev(){
    return(
        <Layout>
        <Navbar/>
        <div className="pt-28">
        <div className="mx-auto max-w-1700 px-4 sm:px-6 lg:px-8">
        {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
        <div className="mx-auto max-w-1700">
            {/* Content goes here */}
            <Header/>
            <Features/>
            <TechStack/>
            <div className="px-4 py-5 sm:px-8">
            <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
                <div className="ml-4 mt-2">
                <h3 className="text-4xl font-bold leading-6 text-gray-900">Our Cases</h3>
                </div>
            </div>
            </div>
            <CasesList/>
            <OurClients/>
            <div className="grid grid-cols-12">
                <div className="col-span-6">

                    <Contact/>
                </div>
                <div className="col-span-6">
                    <Testimonials />
                    <Testimonials />
                </div>
            </div>
            <br/>
        </div>
        </div>
        </div>
        <Footer/>
    </Layout>
    )
}

export default JavascriptDev