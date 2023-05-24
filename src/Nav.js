import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


export default function Nav() {
  const [isClick, setIsClick] = useState({
    isOpen : true,
    isClass : true
  })
  const icon = isClick.isOpen? faBars : faXmark
  const clsNme = isClick.isClass? 'nav-links' : 'nav-links active'
  function updateIcon(){
    setIsClick(prevIcon => ({
      isOpen : !prevIcon.isOpen,
      isClass : !prevIcon.isClass
    }))
  }
  return (
    <div>
      <nav className='header'>
        <h1 className='logo-text'>Marcel</h1>
        <ul className={clsNme}>
            <li className='psudo'><a href='#'>Get a Quote</a></li>
            <li className='psudo'><a href='#'>Portfolio</a></li>
            <li className='psudo'><a href='#'>Contact us</a></li>
        </ul>
        <FontAwesomeIcon onClick={updateIcon} icon={icon} className='mobile'/>
      </nav>
    </div>
  )
}
