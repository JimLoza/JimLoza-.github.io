import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({ defaultCategories = []}) => {

    // const categorias = ['One Punch', 'Samurai X', 'Dragon Ball'];
    // const [categorias, setCategorias] = useState(['One Punch']);

    const [categorias, setCategorias] = useState( defaultCategories );

    // const handleadd = () => {
    //     // setCategorias( [...categorias, 'HunterXHunter'] );
    //     setCategorias( cats =>  [...cats, 'HunterXHunter'] );
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategorias={ setCategorias }/>
            <hr />

            <ol>
                { 
                    categorias.map( category => ( //Estamos haciendo obvio que hay un return encerrando entre parentesis el GifGrid 
                        <GifGrid 
                            key={ category }
                            category={ category } 
                        />
                    ))
                }
            </ol>

        </>
    )
}
