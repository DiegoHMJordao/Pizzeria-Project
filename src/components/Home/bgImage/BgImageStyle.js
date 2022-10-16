import styled from 'styled-components'
import bgImage from '../../../assets/bgImage/bgImage.jpg'

export const BgImageStyle = styled.div`
    background-image: url(${bgImage});
    background-position:center;
    background-repeat:no-repeat;
    background-size:cover;
    max-width:100%;
    height:50vh;

    @media (min-width: 760px){
    height:60vh;
    }

`