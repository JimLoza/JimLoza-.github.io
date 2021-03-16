import { shallow } from "enzyme";
import { GifExpertApp } from "../GifExpertApp";

describe('Haciendo pruebas en componente <GifExpertApp/>', () => {
    

    test('Tiene que hacer match con el snap', () => {
        
        const wrapper = shallow( <GifExpertApp/> );

        expect( wrapper ).toMatchSnapshot();
    });


    test('Debe de mostrar yba lista de categorias', () => {
        
        const categories = ['One Punch', 'Dragon Ball'];
        const wrapper = shallow( <GifExpertApp defaultCategories={ categories } /> );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );
    });
    
    
})
