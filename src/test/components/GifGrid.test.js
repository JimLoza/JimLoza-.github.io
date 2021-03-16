import { shallow } from 'enzyme';   
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');


describe('Haciendo pruebas dentro de nuestro <GifGrid/>', () => {
    
    const category = 'One Punch';

    test('Haciendo la prueba del snapshot ', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow( <GifGrid category={category} />)

        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de mostrar items cuando se cargan imagenes con useFetchGifs', () => {
        
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquiercosa/cosa.jpg',
            title: 'cualquier cosa'
        },
        {
            id: '123',
            url: 'https://localhost/cualquiercosa/cosa.jpg',
            title: 'cualquier cosa'
        }] 

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow( <GifGrid category={category} /> );

        // expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );

    })
    
    
})
