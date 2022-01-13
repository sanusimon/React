import {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation'

import SwiperCore,{Navigation} from 'swiper';


SwiperCore.use([Navigation])


function Services(){

    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=6')
        .then(res=>res.json())
        .then(response=>{
            setProduct(response);
        })
    }, [])

    return(
        <>
            <section className="service_sec">
                <div className="container">
                    <Swiper className="inner_"
                        spaceBetween={50}
                        slidesPerView={4}
                        navigation={true}
                    >
                        {product.map((product,index)=>{
                            
                            return<SwiperSlide className="item" key={index.id}>
                                <div className="img_">
                                    <img src={product.image} alt="" />
                                </div>
                                <div className="cap_">
                                    <p>{product.description}</p>
                                    {/* <Link to={`/product/${i.id}`}> Read More </Link>  */}
                                    <Link to={`/services/${product.id}`}>Read More</Link>
                                </div>
                            </SwiperSlide>
                        })}
                    </Swiper>
                    <div className="btn_wrap text-center">
                        <Link to="/services">Read More</Link>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Services;