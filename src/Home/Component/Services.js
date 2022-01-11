import {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';





function Services(){

    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=4')
        .then(res=>res.json())
        .then(response=>{
            setProduct(response);
        })
    }, [])

    return(
        <>
            <section className="service_sec">
                <div className="container">
                    <div className="inner_">
                        {product.map((product,index)=>{
                            
                            return<div className="item" key={index.id}>
                                <div className="img_">
                                    <img src={product.image} alt="" />
                                </div>
                                <div className="cap_">
                                    <p>{product.description}</p>
                                    {/* <Link to={`/product/${i.id}`}> Read More </Link>  */}
                                    <Link to={`/services/${product.id}`}>Read More</Link>
                                </div>
                            </div>
                        })}
                    </div>
                    <div className="btn_wrap text-center">
                        <Link to="/services">Read More</Link>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Services;