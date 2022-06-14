import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas en hook useFetchGifs', () => {
    
    test('debe regresar el estado inicial', () => { 

        const { result } = renderHook( ()=> useFetchGifs("One Punch") );
        const { images, isLoading } = result.current;

        expect (images.length ).toBe(0);
        expect ( isLoading ).toBeTruthy();

        //useFetchGifs        
     });

     test('debe retornar un arreglo de imagenes y isLoading es false', async() => { 

        const { result } = renderHook( ()=> useFetchGifs("One Punch") );

        await waitFor(
            ()=> expect( result.current.images.length).toBeGreaterThan(0)
        );

        const { images, isLoading } = result.current;

        expect (images.length ).toBeGreaterThan(0);
        expect ( isLoading ).toBeFalsy();

        //useFetchGifs        
     });
});
