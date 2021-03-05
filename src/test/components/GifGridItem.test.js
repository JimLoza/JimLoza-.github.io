import { shallow } from "enzyme"
import { GifGridItem } from "../../components/GifGridItem"

describe('Pruebas en <GifGridItem/>', () => {

    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow( <GifGridItem title={title} url={ url } /> );

    test('Debe mostrar el componente correcto', () => {



        expect( wrapper ).toMatchSnapshot();
    })

    test('debe de tener un parrafo con el titulo', () => {
        

        const p = wrapper.find('p');

        expect( p.text().trim() ).toBe( title );

    })
    
    test('Debe de tener la imagen igual al url y alt de los props', () => {
        
        const img = wrapper.find('img');
        // console.log( img.props() );
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );
    })

    test('Debe tener animate__fadeIn', () => {
        const div = wrapper.find('div');
        // console.log( div.prop('className') );

        const className = div.prop('className'); //Guardamos las clases dentro de la constante y dentro del expect revisamos que el valor de classname contenga la clase que la pasamos mediante el includes

        expect( className.includes('animate__fadeIn') ).toBe( true );

    })
    

    
})
