import Header from '../../Component/Header'
import Banner from '../../Component/Banner'
import { Link } from 'react-router-dom';
import {useState , useEffect} from 'react'


function ServicePage(){

    const [productList , setProductList] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(response => {
            setProductList(response);
            
        })
    }, [])


    return(
        <>
            <Header />
            <Banner />

            <section className="service_sec">
                <div className="container">
                    <div className="inner_">
                        {productList.map((product,index)=>{
                            
                            return<div className="item" key={index}>
                                <div className="img_">
                                    <img src={product.image} alt="" />
                                </div>
                                <div className="cap_">
                                    <p>{product.description}</p>
                                    <Link to={`/services/${product.id}`}>Read More</Link>
                                </div>
                            </div>
                        })}
                    </div>
                    
                </div>
            </section>

        </>
    )
}

export default ServicePage;