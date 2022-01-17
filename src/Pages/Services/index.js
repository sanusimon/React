import Header from '../../Component/Header'
import Banner from '../../Component/Banner'
import { Link } from 'react-router-dom';
import {useState , useEffect} from 'react'
import '../Services/product.css'

function ServicePage(){

    const [productList , setProductList] = useState([])
    const [filter,setFilter] = useState(productList)
    const [loading , setLoading] = useState(true)
   // const [limit , setLimit] = useState(8)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(response => {
            setProductList(response);
            setLoading(false);   
            setFilter(response)
            //setFilter(response.js)         
            
        })
    }, [])
    
  


    const Loading = () =>{
        return(
            <>
                <h1>Loading...</h1>
            </>
        )
    }

    // const LoadMore= () =>{
    //     setLimit(limit+4)
    // }

    const filterProduct = (cat) =>{
        
        const updateList = productList.filter((x) => x.category === cat);
        
        setFilter(updateList);  
    }

    const filterProductsss = (selCat) => {
        alert();
        const updateFI = productList.filter((y)=> y.category === selCat);
        setFilter(updateFI)
        console.log(updateFI)
    }
    

    const uniqueTags = [];
    const filterList = filter.map((pro)=>{
        if (uniqueTags.indexOf(pro.category) === -1) {
            uniqueTags.push(pro.category)
            console.log(pro.category);
            return(
                <>
                    <option onChange={()=>filterProductsss(productList)} >{pro.category}</option>   
                </>
            )
        }
    })

    const ShowProduct = () =>{
            return(
                <>
                    {filter.map((product)=>{
                        return<div className="item" key={product.id}>
                            <div className="img_">
                                <img src={product.image} alt="" />
                            </div>
                            <div className="cap_">
                                <h3>{product.title.substring(0,12)}...</h3>
                                <p>{product.description.substring(0,120)}...</p>
                                <Link className='cmn_button' to={`/services/${product.id}`}>Read More</Link>
                            </div>
                        </div>
                    })}
                    {/* <div className="btn_wrap text-center">
                        <div className='sbmt_btn'  onClick={LoadMore}> Load More </div>
                    </div> */}
                </>
            )
        }


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
                            <option value="" onChange={()=>setFilter(productList)}>All</option>
                            {filterList}
                        </select>
                    </div>

                    <ul className='filter_wrap'>
                        <li><div className='sbmt_btn' onClick={()=>setFilter(productList)}> All </div></li>
                        <li>
                            <div className='sbmt_btn' onClick={()=>filterProduct("men's clothing")}>men's clothing</div>
                        </li>
                        <li><div className='sbmt_btn' onClick={()=>filterProduct("jewelery")}>jewelery</div></li>
                        <li><div className='sbmt_btn' onClick={()=>filterProduct("electronics")}>electronics</div></li>
                        <li><div className='sbmt_btn' onClick={()=>filterProduct("women's clothing")}>women's clothing</div></li>
                        
                    </ul>

                    <div className="inner_">

                    {loading ? <Loading /> : <ShowProduct /> }
                    
                    
                        
                    </div>
                    
                </div>
            </section>

            

            

        </>
    )
}

export default ServicePage;