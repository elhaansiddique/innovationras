import { useState} from 'react';
import { Link } from 'react-router-dom';


function Navbar(){

const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className='flex justify-between items-center p-5'>
      <div className='flex items-center space-x-16 text-lg'>
        <Link to='/'> 
          <img className='h-20 w-20' src="./innovationras logo white-01.png" alt="Logo" />
        </Link>
        <ul className='hidden md:flex space-x-6'>
          <li><Link to='/'>HOME</Link></li>
          <li><Link to='/aboutus'>ABOUT US</Link></li>
          <li><Link to='/portfolio'>PORTFOLIO</Link></li>
          <li><Link to='/blog'>BLOG</Link></li>
          <li><Link to='/shop'>SHOP</Link></li>
          <li><Link to='/furniture'>FURNITURE</Link></li>
        </ul>
      </div>
      <div className='flex items-center p-5 text-lg'>
        <ul className='hidden md:flex space-x-6'>
          <li><Link to='/'>FACEBOOK</Link></li>
          <li><Link to='/'>INSTAGRAM</Link></li>
          <li><Link to='/'>YOUTUBE</Link></li>
        </ul>
      </div>
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
        ☰
      </button>
      {isOpen && (
          <ul className="absolute top-16 left-0 w-full flex flex-col space-y-4 bg-gray-800 p-5 md:hidden">
            <li><Link to='/'>HOME</Link></li>
            <li><Link to='/aboutus'>ABOUT US</Link></li>
            <li><Link to='/portfolio'>PORTFOLIO</Link></li>
            <li><Link to='/blog'>BLOG</Link></li>
            <li><Link to='/shop'>SHOP</Link></li>
            <li><Link to='/furniture'>FURNITURE</Link></li>
          </ul>
      )}
    </nav>
  )
}

export default Navbar
