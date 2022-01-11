import './style.css';
import bannerBackground from '../../assets/images/abudhabi_01.jpg'



function Banner (){
    return (
        <section className="banner">
            <div className='banner_img'>
                <div className='img_' style={{backgroundImage:`url(${bannerBackground})`}}></div>
                <h1>
                    Banner
                </h1>
            </div>
        </section>
    )
}


export default Banner;