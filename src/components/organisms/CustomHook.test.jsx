import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useFormularioContacto } from './useFormularioContacto';

describe('useStateHook', () => {
    it('debe comenzar con los campos en blanco por defecto', () => {
        // ARRANGE & ACT
        const { result } = renderHook(() => useFormularioContacto());

        // ASSERT: Comprobar estado inicial
        expect(result.current.formData).toEqual({
            nombre: '',
            email: '',
            mensaje: '',
        });
    });

    it('debe actualizar el campo nombre con lo escrito por el usuario', () => {
        // ARRANGE
        const { result } = renderHook(() => useFormularioContacto());

        // ACT: Ejecutar la actualización envuelta en act()
        act(() => {
            result.current.cambiarCampo('nombre', 'Mega Man');
        });

        // ASSERT
        expect(result.current.formData.nombre).toBe('Mega Man');
    });

    it('debe volver al estado inicial al reiniciar el formulario', () => {
        // ARRANGE
        const { result } = renderHook(() => useFormularioContacto());

        // ACT: Modificar datos y luego limpiar
        act(() => {
            result.current.cambiarCampo('nombre', 'Nicolás Moya');
            result.current.cambiarCampo('email', 'nicolas@ejemplo.com');
            result.current.reiniciarFormulario();
        });

        // ASSERT
        expect(result.current.formData).toEqual({
            nombre: '',
            email: '',
            mensaje: '',
        });
    });
});