import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HeaderStyle } from './HeaderStyle'
import logo from '../../assets/logo/logo.png'
import MenuMobile from '../MenuMobile/MenuMobile'
import {IoList} from 'react-icons/io5'


const Header = () => {

    
const headerList = ['Home', 'Menu', 'Reservas','TakeAway']
const [menuMobileShow, setMenuMobileShow] = useState(false)


    return (
        <HeaderStyle>
            <MenuMobile 
                menuMobileShow={menuMobileShow}
                setMenuMobileShow={setMenuMobileShow}
            />
            <IoList size={45} onClick={() => setMenuMobileShow(!menuMobileShow)} />
            <img src={logo} />
            <nav>
                <ul>
                    {
                    headerList.map(param =>
                        <li key={param} >
                            <Link to={`/${param}`} >{param}</Link>
                        </li>
                        )
                    }
                </ul>
            </nav>
        </HeaderStyle>
    )
}

export default Header