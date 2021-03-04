import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const {data: images,  loading } = useFetchGifs( category );

    // getGifs();

    return (
        // key = id del gif, valor = title de la imagen 
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            
            {/* forma corta de operador ternario para evaluar  */}
            { loading && <p className="animate__animated animate__flash" >Loading </p> }

            <div className="card-grid">
                {
                    images.map((img) => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>

    )
}
