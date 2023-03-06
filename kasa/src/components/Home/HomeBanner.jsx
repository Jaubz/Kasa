import React from 'react';
import Banner from '../Layout/Banner';
import homeBanner from '../../assets/bannerHome-kasa.png'

const HomeBanner = () => {
    return(
        <Banner
            title='Chez vous, partout et ailleurs'
            src={homeBanner}
        />
    )
}

export default HomeBanner;