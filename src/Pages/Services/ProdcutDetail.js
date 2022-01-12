import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Header from '../../Component/Header';


function ProdcutDetail(){

    const [productList , setProductList] = useState([])
    const {productId} = useParams()

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(res=>res.json())
        .then(response => {
            setProductList(response);
        })
    }, [])
    return(
        <>
            <Header />
            <section className="p_detail_">
                <div className="container">
                    <div className="inner_">
                        <div className="lf_">
                            <img src={productList.image} />
                           
                        </div>
                        <div className="rgt_">
                           
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

    // const ShowProduct = () =>{
        
    // }


    
    
    //const thisProduct = productList.find(ss => ss.id === productId)
    
}

export default ProdcutDetail;