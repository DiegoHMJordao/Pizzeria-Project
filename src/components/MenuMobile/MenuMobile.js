import React from 'react'
import { MenuMobileStyle } from './MenuMobileStyle'
import { IoClose } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const MenuMobile = ({menuMobileShow, setMenuMobileShow}) => {

    const headerList = ['Home', 'Menu', 'Reservas', 'TakeAway']

    return(
        <MenuMobileStyle  menuMobileShow={menuMobileShow}>
            <IoClose size={45} onClick={() => setMenuMobileShow(!menuMobileShow)}   />
            <nav>
                <ul>
                    {
                        headerList.map(param =>
                            <li key={param}>
                                <Link onClick={() => setMenuMobileShow(!menuMobileShow)}  to={`/${param}`} >{param}</Link>
                            </li>)
                    }
                </ul>
            </nav>
        </MenuMobileStyle>
    )
}

export default MenuMobile