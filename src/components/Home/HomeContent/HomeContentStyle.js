import styled from 'styled-components'

export const HomeContentStyle = styled.main`
    height:auto;
    max-width:100%;
    display:block;
    justify-content:center;
    align-items:center;
    padding:1.25rem;
    background-color: #3f1503;
    color:white;
    line-height:1.5;

    h1{
        text-align:center;
        font-size:1.5rem;
    }

    div {
        max-height:100%;
    }

    iframe {
        max-width:100%;
        max-height:100%;
        border-radius:8px;
        opacity:0.8;
        transition: 700ms ease;
        border:none;

        &:hover{
            opacity:1;
        }
    }

    @media screen and (min-width:760px) {   
        display:flex;
        justify-content:space-around;
        
        div{
            max-width:50%;
            height:100%;
            height:100%;
        }

      
    }

`