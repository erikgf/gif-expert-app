import { render, screen } from "@testing-library/react";
import { GifGridItem } from "../../src/components/GifGridItem";

describe('Pruebas en componente', () => {

    const title = "Saitama";
    const url = 'https://one-punch.com/saitama.jpg';

    test('debe de hacer match con el snapshot', () => {
        const {container} = render(<GifGridItem title={title} url={url} />);
        expect( container ).toMatchSnapshot();         
    });

    test('debe mostrar el ALT y el URL en el componente', ()=>{        
        render(<GifGridItem title={title} url={url} />);
        const { src, alt } =  screen.getByRole("img");

        expect(src).toBe(url);
        expect(alt).toBe(title);
    });
    
});
