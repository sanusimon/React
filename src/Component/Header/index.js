import {NavLink} from 'react-router-dom';
import './style.css';
import {useState} from 'react'



function Header(){

   const [open , setOpen] = useState(false)

   const burger_btn = () =>{
     setOpen(prevState => !prevState);
     document.body.classList.toggle('openmenu')
   }
  
   const closeMenu= () =>{

    setTimeout(function(){
      document.body.classList.remove('openmenu')
    },300)

     
   }
 

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
                    <NavLink className="navLink" to="/">Home</NavLink >
                  </li>
                  <li>
                    <NavLink className="navLink" to="/about">About</NavLink >
                  </li>
                  <li>
                    <NavLink className="navLink" to="/services" className='nav_link'>Services</NavLink >
                  </li>
                </ul>
                <div onClick={burger_btn} className={open ? 'active menu_btn' : 'menu_btn'}>
                    MENU
                </div>


                <div className='burgerMenu'>
                  <ul>
                    <li>
                      <NavLink onClick={closeMenu} className="navLink" to="/">Home</NavLink >
                    </li>
                    <li>
                      <NavLink onClick={closeMenu} className="navLink" to="/about">About</NavLink >
                    </li>
                    <li>
                      <NavLink onClick={closeMenu} className="navLink" to="/services" className='nav_link'>Services</NavLink >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
      );
      
}



export default Header;