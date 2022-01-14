import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Header from '../../Component/Header';
import '../Services/product.css'


function ProdcutDetail(){

    const [productList , setProductList] = useState([]);
    const [loading , setLoading] = useState(true);
    const [cart , setCart] = useState(0);
    const {productId} = useParams();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(res=>res.json())
        .then(response => {
            setProductList(response);
            setLoading(false);
        })
    }, [])


    const Loading = () =>{
        return(
            <>
                <h1>Loading...</h1>
            </>
        )
    }

    const AddCart = () =>{
        setCart(cart + 1);
    }
    const RemCart = () =>{
        setCart(false)
    }

    const ShowProduct = () => {
        return(
            <>
            <div className="inner_">
                    <div className="lf_">
                        <img src={productList.image} alt='{productList.image}' />
                    </div>
                    <div className="rgt_">
                        <h1>
                            {productList.title}
                        </h1>
                        <p>
                            {productList.description}
                        </p>
                        <label className='price'><strong>price </strong> : {productList.price}</label>

                        <div className='cart_btn'>
                            <button className='btn_' onClick={AddCart}>Cart <span> {cart} </span></button>
                        </div>
                        <div className='cart_btn'>
                            <button className='btn_' onClick={RemCart}>Remove Cart <span> </span></button>
                        </div>

                    </div>
                </div>
            </>
        )
    }


    return(
        <>
            <Header />
            <section className="p_detail_">
                <div className="container">
                    {loading ? <Loading /> : <ShowProduct /> }
                    
                </div>
            </section>
        </>
    )

    // const ShowProduct = () =>{
        
    // }


    
    
    //const thisProduct = productList.find(ss => ss.id === productId)
    
}

export default ProdcutDetail;