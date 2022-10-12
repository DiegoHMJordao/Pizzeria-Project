import styled from 'styled-components'

export const HeaderStyle = styled.header`

    display:flex;
    justify-content:space-around;
    align-items:center;
    background-color: #eadac0;
    color: #8c2311;

    >svg {
        display:none;
    }

    nav ul{
        display:flex;
        align-items:center;
    }

    nav ul li {
        margin: 0 2rem;
    }

    nav ul li a{
        font-size:1.25rem;      
        padding: 4rem 0;

    }

    img {
        width:12%;
    }

    @media screen and (max-width: 960px){
        justify-content:flex-start;
        
        img, nav {
            display:none;
        }

        >svg {
        display:block;
    }

    }




`