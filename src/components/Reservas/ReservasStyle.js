import styled from "styled-components";

export const ReservasStyle = styled.section`
    display:block;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    text-align:center;  
    gap: 2;
    padding: 4rem;    
    background-color: #3f1503;

    img {
        display:none;
    }

    form {
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        height:auto;
        border-radius:8px;
        padding: 1rem;
        box-shadow: 0 0 5px black;
        overflow:hidden;
        background-color: #91491a;
        position:relative;
    }

    form h1 {
        font-size:1.5rem;
        color:#e0e0e0;
    }

    label{
        text-align:left;
        display:flex;
        flex-direction:column;
        margin: 1.5rem 0; 
        color:#e0e0e0;       
    }

    label input {
        border-radius:8px;
        border:none;
        background-color: #ffce9f;
        line-height:2.2;
    }

    button{
        border:none;
        background-color:#3f1503;
        color:white;
        margin-top:1.25rem;
        padding:1.25rem 3rem;
        transition: 700ms ease;
        
        &:hover {
            border-radius:20px;
        }
    }

    span {
        position:absolute;
        color:red;
        margin-top:4.5rem;
        font-size:0.75rem;

    }

@media (min-width: 760px) {
    display:flex;
    justify-content:space-around;
    flex-direction:row;
    padding: 6.75rem 0;

    form{
        width:10%;
    }

    label {
        margin:1rem 0;
    }

    img {
        display:block;
        width: 30%;
    }

    form {
        width:30%;
    }
}
`