import Link from 'next/link';
import './Nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faHeart } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <ul className='navbar'>
        <li><Link href='/'><FontAwesomeIcon className='icon' icon={faHouse} />Home</Link></li>
        <li><Link href='favorites'><FontAwesomeIcon className='icon' icon={faHeart} />Favorites</Link></li>
    </ul>
  )
}

export default Navbar;