import {describe, expect, it} from "vitest";
import {render, screen} from "@testing-library/react";
import {SeccionPersonal} from "./SeccionPersonal.jsx";


describe('Componente SeccionPersonal', () => {
    it('debe renderizar la pantalla de datos personales', () => {
        // ARRANGE & ACT: Renderizar el componente
        render(<SeccionPersonal />);

        // ACT: Buscar el título principal

        const foto = screen.getByTestId('foto');


        // ASSERT: Comprobar que existe en el documento y es visible
        expect(foto).toBeInTheDocument();
        expect(foto).toBeVisible();

    });

    it('debe mostrar el mensaje bajo la foto', () => {
        // ARRANGE & ACT
        render(<SeccionPersonal />);

        // ACT: Buscar los textos descriptivos dentro del componente
        const textoPerfil = screen.getByText(/¡Hola!, mi nombre es Nicolás Moya, me apasiona la programación y el diseño de interfaces. Me especializo en crear aplicaciones modernas y funcionales utilizando React\+Vite y Ant Design./i);

        // ASSERT
        expect(textoPerfil).toBeInTheDocument();
        expect(textoPerfil).toBeVisible();
    });
});