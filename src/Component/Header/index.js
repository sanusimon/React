import {Link} from 'react-router-dom';
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
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/services">Services</Link>
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