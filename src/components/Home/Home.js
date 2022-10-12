import React from 'react'
import BgImage from './bgImage/BgImage'
import HomeMenuContent from './HomeContent/HomeContent'
import { HomeStyle } from './HomeStyle'

const Home = () => {
    return (
        <HomeStyle>
            <BgImage />
            <HomeMenuContent/>
        </HomeStyle>
    )
}

export default Home