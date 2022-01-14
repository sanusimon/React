import { Link } from "react-router-dom";
import Header from "../../Component/Header";
import '../Login/style.css'


function Login(){
    return(
        <>
            <Header />
            <section className="login_page">
                <div className="container">
                    <div className="inner_">
                        <form className="form_box" action="/">
                            <h2>Login</h2>
                            <div className="box_">
                                <input type="text" placeholder="User Name" required />
                                <input type="text" placeholder="Password" required />
                                <input className="sbmt_btn" type="submit" value="SUBMIT" id="submit" />
                                <span>Don’t have an account? <Link to="/register">Register</Link></span>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login;