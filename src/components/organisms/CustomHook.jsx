import {useState} from "react";
import {message} from "antd";

export const CustomHook = () => {


    // Definimos el estado inicial del formulario
    //Recuerda que FormData es seteado por setFormData y que los estados modificables son nombre, email y mensaje, que parten vacíos.
    //Cada vez que escribes algo setFormData reescribe la información de FormData, reemplazando el objeto anterior por uno nuevo.
    const [formData, setDatosForm] = useState({
        nombre: '',
        email: '',
        mensaje: ''
    });


    // Función al enviar el formulario
    const onFinish = () => {
        console.log('Datos enviados:', formData);
        message.success('¡Mensaje enviado con éxito!');

        // Recuerda que esto limpia lo ya escrito al hacer submit
        setDatosForm({
            nombre: '',
            email: '',
            mensaje: ''
        });
    };
}