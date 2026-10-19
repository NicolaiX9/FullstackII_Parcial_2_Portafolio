import React, { useState } from 'react';
import { Card, Form, Input, Button, message, Typography } from 'antd';
import {SubmitButton} from "../atoms/SubmitButton.jsx";

const { Title } = Typography;

export const SeccionContactosUseState = () => {
    // 1. Definimos el estado inicial del formulario
    //Recuerda que FormData es seteado por setFormData y que los estados modificables son nombre, email y mensaje, que parten vacíos.
    //Cada vez que escribes algo setFormData reescribe la información de FormData, reemplazando el objeto anterior por uno nuevo.
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        mensaje: ''
    });

    // 2. Función manejadora para actualizar el estado según el input que cambia
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value // Actualiza dinámicamente la propiedad según el atributo 'name'
        }));
    };

    // 3. Función al enviar el formulario
    const onFinish = () => {
        console.log('Datos enviados:', formData);
        message.success('¡Mensaje enviado con éxito!');

        // Recuerda que esto limpia lo ya escrito al hacer submit
        setFormData({
            nombre: '',
            email: '',
            mensaje: ''
        });
    };

    return (
        <Card style={{ marginTop: 16 }}>
            <Title level={3}>Contacto</Title>
            <Form layout="vertical" onFinish={onFinish}>
                <Form.Item
                    label="Nombre completo"
                    rules={[{ required: true, message: 'Por favor ingresa tu nombre' }]}
                >
                    <Input
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        placeholder=""
                    />
                </Form.Item>

                <Form.Item
                    label="Correo electrónico"
                    rules={[
                        { required: true, message: 'Por favor ingresa tu correo' },
                        { type: 'email', message: 'Ingresa un correo válido' }
                    ]}
                >
                    <Input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder=""
                    />
                </Form.Item>

                <Form.Item
                    label="Mensaje"
                    rules={[{ required: true, message: 'Por favor escribe un mensaje' }]}
                >
                    <Input.TextArea
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        rows={4}
                        placeholder=""
                    />
                </Form.Item>

                <SubmitButton texto={"Enviar datos"}/>

            </Form>
        </Card>
    );
};