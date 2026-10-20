import { useState } from "react";
import { message } from "antd";

export const useFormulario = () => {
    // Definimos el estado inicial del formulario
    const [formData, setDatosForm] = useState({
        nombre: '',
        email: '',
        mensaje: ''
    });

    // Función para actualizar un campo dinámicamente
    const cambiarCampo = (campo, valor) => {
        setDatosForm((prev) => ({
            ...prev,
            [campo]: valor
        }));
    };

    // Función para reiniciar/limpiar los datos
    const reiniciarFormulario = () => {
        setDatosForm({
            nombre: '',
            email: '',
            mensaje: ''
        });
    };

    // Función al enviar el formulario
    const onFinish = () => {
        console.log('Datos enviados:', formData);
        message.success('¡Mensaje enviado con éxito!');
        reiniciarFormulario();
    };

    // 💡 IMPORTANTE: Debes retornar los estados y funciones para que puedan usarse fuera
    return {
        formData,
        cambiarCampo,
        reiniciarFormulario,
        onFinish
    };
};