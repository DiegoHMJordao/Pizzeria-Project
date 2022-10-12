import styled from 'styled-components'

export const MenuStyle = styled.div`

    display:flex;
    justify-content:center;
    text-align:center;
    flex-direction:column;
    background-color: #740005;
    height:auto;

    
    section {
        max-width:80%;
        margin: 2rem 3rem ;
        background-color: #ae7a47;
        padding-bottom:1rem;
    }

    section div:first-child {
        width:100%;
    }

    img {
        width:100%;
        height:auto;
    }

    button {
        border:none;
        border-radius:8px;
        padding: 0.85rem;
        background-color: #3f1503;
        font-size:0.85rem;
        color:white;

        &:hover{
            cursor:pointer;
        }
    }

    @media (min-width: 960px){
        flex-direction:column;

        div:first-child, div:nth-child(2) {
            display:flex;

        }

        section{
            width:35%;
        }

        div:first-child section div:last-child{
            flex-direction:column;
        }

        section div:first-child {
            height:60%;
        }

        section div:last-child{
            display:flex;
            align-items:center;
        }


        img {     
            opacity:0.7;
            transition:700ms ease;

            &:hover {
            opacity:1;
            }
        }
    }
`