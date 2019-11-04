import React from 'react';

const Advert = ({advert}) => {
    return (
        <>
        <a href=""><p>Item Title: {advert.title}</p></a>
        <p>Item Price: {advert.price}</p>
        <p>Item Location: {advert._embedded.seller.location}</p> 
        </>
    )
}


export default Advert;