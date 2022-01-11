import Header from '../../Component/Header'
import Banner from '../../Component/Banner'
function AboutPage(){
    return(
        <>
            <Header />
            <Banner />
            <section className='abt_page'>
                    <div className='container'>
                        <h2>About Page</h2>
                        <div className='text_box'>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
            </section>

        </>
    )
}

export default AboutPage;