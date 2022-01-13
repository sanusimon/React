import {NavLink} from 'react-router-dom';
import './style.css';







function Header(){

    return (
        <header className='header'>
          <div className='container'>
            <div className='navBar'>
              <div className='logo'>
                <h1>LOGO</h1>
              </div>
              <div className='menu'>
                <ul>
                    <li>
                      <NavLink className="navLink"  to="/">Home</NavLink >
                    </li>
                    <li>
                      <NavLink className="navLink"  to="/about">About</NavLink >
                    </li>
                    <li>
                      <NavLink className="navLink"  to="/services" className='nav_link'>Services</NavLink >
                    </li>
                    <li>
                    </li>
                  </ul>
                </div>
                </div>
            </div>
        </header>
      );
      
}



export default Header;