import Banner from '../Component/Banner';
import About from './Component/About';
import Services from './Component/Services';
import Header from '../Component/Header'


import './Component/home.css';

function HomePage(){
    return(
        <>
            <Header />
            <Banner />
            <About />
            <Services />
        </>
    )
}

export default HomePage;