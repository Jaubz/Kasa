import React from 'react';
import Banner from '../Layout/Banner';
import bannerAbout from '../../assets/bannerAbout-kasa.png'

const BannerAbout = () => {
    return(
        <Banner
            title='À propos'
            src={bannerAbout}
        />
    )
}

export default BannerAbout;