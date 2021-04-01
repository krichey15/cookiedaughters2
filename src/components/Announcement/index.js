import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { AdBanner, AdContainer } from './AdElements'


const Announcement = () => {

    const { flickrPhoto } = useStaticQuery(
        graphql`
        query {
            flickrPhoto {
            photo_id
            url_o
            }
        }
    `
    )


    return (
        <AdContainer>
            <AdBanner src={flickrPhoto.url_o} />
        </AdContainer>
    )

}

export default Announcement;