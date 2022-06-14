import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe ("Pruebas en AddCategory", ()=>{
    test("Se debe cambiar el valor de la caja de texto de la nueva categoría", ()=>{
        render(<AddCategory onNewCategory={() => {}}/>);
        const input = screen.getByRole("textbox");
        //obtengo el input a ttestear

        fireEvent.input( input, { target: {value: "Saitama"}});
        //genero un evento de tipeo en dicho input, agregando el valor saitama.

        expect( input.value ).toBe("Saitama");
        //Espero que el valor ingresado sea SAitama.
    });

    test("debe llamar a onNewCategory si el input tieen un valor.", ()=>{
        const inputValue = "Saitama";
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory}/>);
        const input = screen.getByRole("textbox");
        const form = screen.getByRole("form");

        fireEvent.input (input, {target: {value: inputValue}});
        fireEvent.submit(form);

        expect(input.value).toBe("");
        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith(inputValue);
    });

    
});