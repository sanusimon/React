import { Link } from "react-router-dom";
import Header from "../../Component/Header";


function Register(){
   return(
    <>
        <Header />
        <section className="login_page">
            <div className="container">
                <div className="inner_">
                    <form className="form_box" action="/">
                        <h2>Register</h2>
                        <div className="box_">
                            <input type="text" placeholder="User Name" name="username" required />
                            <input type="text" placeholder="mail id" name="mailid" required />
                            <input type="text" placeholder="Password" required />
                            <div>
                                <input type="checkbox" name="checkbox" name="checkbox" id="checkbox" required /> 
                                <label for="checkbox">I agree all statements in terms of service.</label>
                            </div>
                            <button type="submit" className="sbmt_btn" id="register">
                                REGISTER
                            </button>
                           
                            
                            <span>Back to Home <Link to="/">Home</Link> </span>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </>
   )
}

export default Register;