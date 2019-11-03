import React from 'react';

const Advert = ({advert}) => {
    return (
        <>
        <p>Item Name: {advert.seller}</p>
        <p>Item Title: {advert.title}</p>
        <p>Item Price: {advert.price}</p>
        </>
    )
}


export default Advert;