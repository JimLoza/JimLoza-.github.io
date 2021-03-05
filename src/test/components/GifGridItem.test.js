import { shallow } from "enzyme"
import { GifGridItem } from "../../components/GifGridItem"

describe('Pruebas en <GifGridItem/>', () => {
    test('Debe mostrar el componente correcto', () => {
        const wrapper = shallow( <GifGridItem/> );

        expect( wrapper ).toMatchSnapshot();
    })
    
})
