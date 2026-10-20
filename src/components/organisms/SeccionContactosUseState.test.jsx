import {describe, expect, it} from "vitest";
import {render, screen} from "@testing-library/react";
import {SeccionContactosUseState} from "./SeccionContactosUseState.jsx";


describe('Componente SeccionContactoNoHooks', () => {
    it('debe renderizar el texto de contacto', () => {
        // ARRANGE & ACT: Renderizar el componente
        render(<SeccionContactosUseState />);

        // ACT: Buscar el título principal
        const tituloForm = screen.getByText('Formulario de contacto:');



        // ASSERT: Comprobar que existe en el documento y es visible
        expect(tituloForm).toBeInTheDocument();
        expect(tituloForm).toBeVisible();

    });

    it('debe mostrar el botón enlace a github', () => {
        // ARRANGE & ACT
        render(<SeccionContactosUseState />);

        const enlaceGithub = screen.getByRole('link', { name: /Ver perfil de GitHub/i });

        expect(enlaceGithub).toBeInTheDocument();
        expect(enlaceGithub).toBeVisible();
        expect(enlaceGithub).toHaveAttribute(
            'href',
            "https://github.com/NicolaiX9")
    });
});