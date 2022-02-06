import logo from './logo.png';
import './headers.css';

const Header = () => {
  return (
    <div className='header'>
        <img className='logo' src={logo} alt="logo"/>
        <ul className='navbar'>
            <li><a href="/"> Home </a></li>
            <li> <a href="/Antrenamente"> Antrenamente </a> </li>
            <li><a href="/Nutritie"> Nutritie </a></li>
        </ul>
      
    </div>
  )
}

export default Header
