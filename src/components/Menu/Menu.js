import React from 'react'
import { MenuStyle } from './MenuStyle'
import menu1 from '../../assets/menus/menu1.jpg'
import menu2 from '../../assets/menus/menu2.jpg'
import menu3 from '../../assets/menus/menu3.jpg'

const Menu = () => { 
    const menuPizza = [
        {
            text: "Menu Pizza 1",
            description: "Queijo, Fiambre e Atum",
            src: menu1
        },
        {
            text: "Menu Pizza 2",
            description: "Queijo, Fiambre e Ovo",
            src: menu2
        },
        {
            text: "Menu Pizza 3",
            description: "Queijo, Fiambre e Cebola",
            src: menu3
        }
    ]

    return (
            <MenuStyle>
                        <div>
                            {
                                menuPizza.map((param) => (
                                    <section key={param}>
                                        <div>
                                            <img  src={param.src} />
                                        </div>
                                        <div>
                                            <h1>{param.text}</h1>
                                            <p>{param.description}</p>
                                            <button>ENCOMENDAR AGORA</button>
                                        </div>
                                    </section>
                                ))
                            }
                        </div>
                        <div>
                            {
                                menuPizza.map((param) => (
                                    <section key={param}>
                                        <div><img  src={param.src} /></div>
                                        <h1>{param.text}</h1>
                                        <p>{param.description}</p>
                                        <button>ENCOMENDAR AGORA</button>
                                    </section>
                                ))
                            }
                        </div>                         
            </MenuStyle>
    )
    
}

export default Menu