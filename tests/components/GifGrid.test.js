import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";

describe('Testing GifGrid', () => {
    const category = "One Punch";

    test('probar que al inicio este loading = true', () => { 
        render(<GifGrid category= {category} />);

        // eslint-disable-next-line jest/valid-expect
        expect (screen.getByText("Cargando..."));
        // eslint-disable-next-line jest/valid-expect
        expect( screen.getByText( category ));

     });
    
});
