import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory"

describe('Pruebas en <AddCategory/>', () => {
    
    // const setCategorias = () => {}; Es lo mismo que lo de abajo
    const setCategorias = jest.fn();  //Con el jest podremos saber cuantas veces fue llamada la funcion 
    let wrapper = shallow( <AddCategory setCategorias={setCategorias} /> ); //Se inicializa 2 veces para tener la ayuda de completado
    
    beforeEach( () => {

        jest.clearAllMocks();
        
        wrapper = shallow( <AddCategory setCategorias={setCategorias} /> );
    } );

    test('Debe de mostrarse correctamente', () => {

        expect(  wrapper ).toMatchSnapshot();

    })

    test('Debe de cambiar la caja de texto', () => {
        
        const input = wrapper.find('input');
        const value = 'Hola mundo';
        input.simulate('change', { target: {value}  });

        expect( wrapper.find('p').text().trim() ).toBe( value )

    })
    
    test('No debe de postear la informacion con submit', () => {
        
        wrapper.find('form').simulate('submit', { preventDefault(){} } );
        
        expect( setCategorias ).not.toHaveBeenCalled();

    })

    test('Debe de llamar el setCategories y limpiar la caja de texto ', () => {
        const value = 'Hola input';
    //1 simular el inputChange
    wrapper.find('input').simulate('change', {target: {value}});
    //2 simular el submit
    wrapper.find('form').simulate('submit', { preventDefault(){} } );
    //3 llamar el setCategories
    expect( setCategorias ).toHaveBeenCalled();
    // expect( setCategorias ).toHaveBeenNthCalledWith( expect.any(Function) ); Esta es la forma de decirle que se esperaba que se llamara desde una funcion
    //4 el valor del input debe de estar '' 
    expect( wrapper.find('input').prop('value') ).toBe( '' );


    });
    
    
})
