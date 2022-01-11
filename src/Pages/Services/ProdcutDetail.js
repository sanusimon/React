import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';


function ProdcutDetail(){

    const [productList , setProductList] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(response => {
            setProductList(response);
            
        })
    }, [])
    const {productId} = useParams()
    const thisProduct = (prod => prod.id === productId)
    console.log(thisProduct);
    return(
        <>
            <section className="p_detail_">
                <div className="container">
                    <div className="inner_">
                        <div className="lf_">
                           {thisProduct}
                        </div>
                        <div className="rgt_">
                           
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProdcutDetail;