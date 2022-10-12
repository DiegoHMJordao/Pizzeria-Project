import styled, { css } from 'styled-components'

//Abaixo as estilizações padrões do Menu Mobile

export const MenuMobileStyle = styled.section`
    position:absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
    z-index:5;
    display:flex;
    justify-content:flex-start;
    align-items:flex-start;
    width:100%;
    height:100%;
    background: rgb(255,255,255);
    background: linear-gradient(35deg, rgba(255,255,255,0.5270483193277311) 0%, rgba(207,112,29,0.6727065826330532) 100%);
    backdrop-filter:blur(3px);
    transform:translateX(-100%);
    transition: 700ms ease;

    nav{
        display:block;
        margin-top: 20%;
    }

    nav ul {
        flex-direction:column; 
        justify-content:flex-start;   
    }

    nav ul li a {
        font-size: 1.5rem;
        transform: scale(0.5);
        line-height:3;
        color:white;
        padding:0;
    }

    >svg {
        position:absolute;
        top:1rem;
        left:1rem;
        transform: rotate(45deg);
        transition: 700ms;
    }

    //Abaixo código para controlar a estuilização do MenuMobile. Na qual veremos se "menuMobileShow" estiver aitvo irá aplicar as estilizações!

    ${ ( { menuMobileShow } ) => menuMobileShow && css`

    transform:translateX(0);

    >svg {        
        transform: rotate(0);
    }

    nav ul li a{
        transform: scale(1);

    }
    ` }

`