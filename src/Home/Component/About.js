import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
function About(){

    const [values , setValue] =  useState([]);

    const onChange = ((e)=>{
       setValue(e.target.value);
       console.log(setValue);
    })
    

    useEffect(()=>{
        //setValue(onChange);
    })

    return(
        <>
        <section className='about_sec'>
            <div className='container'>
                <div className='inner_'>
                    <div className='lf_'>
                        <h1>About</h1>
                    </div>
                    <div className='rgt_'>
                        <div className='text_box'>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                        <div className="btn_wrap">
                            <Link to="/about">Read More</Link>
                        </div>
                    </div>
                </div>

                <input value={values} onKeyUp={onChange} type='text' />
                <p>{values}</p>
            </div>
        </section>
        </>    
    )
    
}

export default About;