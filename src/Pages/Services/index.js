import Header from '../../Component/Header'
import Banner from '../../Component/Banner'
import { Link } from 'react-router-dom';
import {useState , useEffect} from 'react'
import '../Services/product.css'

function ServicePage(){

    const [productList , setProductList] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
        .then(res=>res.json())
        .then(response => {
            setProductList(response);
            console.log(response)
        })
    }, [])
    
    const uniqueTags = [];
    const filterList = productList.map((pro,i)=>{
        if (uniqueTags.indexOf(pro.category) === -1) {
            uniqueTags.push(pro.category)
            return(
                <option key={pro} value={i} >{pro.category}</option>
            )
        }
        
    })

    // const filterbox = (e) =>{
    //    // console.log(e.target.value);
    // }

    return(
        <>
            <Header />
            <Banner />

            <section className="service_sec">
                <div className="container">
                    <div className='filer_sec'>
                        <select>
                            <option value="">All</option>
                            {filterList}
                        </select>
                    </div>
                    <div className="inner_">
                        {productList.map((product)=>{
                            return<div className="item" key={product.id}>
                                <div className="img_">
                                    <img src={product.image} alt="" />
                                </div>
                                <div className="cap_">
                                    <h3>{product.title}</h3>
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