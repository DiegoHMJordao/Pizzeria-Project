import styled from 'styled-components'
import bgImage from '../../../assets/bgImage/bgImage.jpg'

export const BgImageStyle = styled.div`
    background-image: url(${bgImage});
    background-position:center;
    background-repeat:no-repeat;
    background-size:cover;
    background-attachment:fixed;
    max-width:100%;
    height:100vh;

    @media (max-width: 760px){
    background-attachment:scroll;
    height:60vh;
    }
`