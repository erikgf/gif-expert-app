import { getGifs  } from "../../src/helpers/getGifts";

describe ('Pruebas en getGifs', ()=>{

    test ("debe retornar un arreglo de fgifs", async()=>{
        const gifs = await getGifs("one Punch");
        expect (gifs.length).toBeGreaterThan(0);

        expect( gifs[0] ).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        });
    })
});