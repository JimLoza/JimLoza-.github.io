import React from 'react'

export const GifGridItem = ( {title, url} ) => {
    

    return (
        <div className="card animate__animated animate__fadeIn">
            <img
                src={url}
                alt={title}
            />
            <p>{title}</p>
        </div>
    )
}

/*  
Configurar Enzyme y configurar enzyme to json

    3. Debe de mostart el componente correctamente
    shallow
    wrapper
    wrapper .toMarchSnapshot()


*/
 