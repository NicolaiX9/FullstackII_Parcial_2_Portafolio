import React, { useState } from 'react';
import { Card, Form, Input, Button, message, Typography } from 'antd';
import {SubmitButton} from "../atoms/SubmitButton.jsx";
import {GithubOutlined} from "@ant-design/icons";

const { Title } = Typography;

export const SeccionContactosUseState = () => {


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

    //dentro de los parametros del form le pasamos la función onFinish para cuando apretemos el botón submit
    return (
        <Card style={{ marginTop: 16, backgroundColor: '#201d74'  }}>
            <Title level={3}>Redes:</Title>

            <Typography.Link
                href="https://github.com/NicolaiX9"
                style={{ fontSize: '16px'}}
            >
                <GithubOutlined style={{marginTop: 20, marginBottom: 20}} /> Ver perfil de GitHub
            </Typography.Link>

            <Title level={3}>Formulario de contacto: </Title>

            <Form layout="vertical" onFinish={onFinish}>
                <Form.Item
                    label="Nombre completo"
                    name="nombre"
                    rules={[{ required: true, message: 'Por favor ingrese su nombre' }]}
                >
                    <Input
                        name="nombre"
                        value={formData.nombre}
                        onChange={(e) => setDatosForm(prev => ({ ...prev, nombre: e.target.value }))}
                        placeholder=""
                    />
                </Form.Item>

                <Form.Item
                    label="Correo electrónico"
                    name="email"
                    rules={[
                        { required: true, message: 'Por favor ingrese su correo' },
                        { type: 'email', message: 'Ingrese un correo válido' }
                    ]}
                >
                    <Input
                        name="email"
                        value={formData.email}
                        onChange={(e) => setDatosForm(prev => ({ ...prev, email: e.target.value }))}
                        placeholder=""
                    />
                </Form.Item>

                <Form.Item
                    label="Mensaje"
                    name="mensaje"
                    rules={[{ required: true, message: 'Por favor escriba un mensaje' }]}
                >
                    <Input.TextArea
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={(e) => setDatosForm(prev => ({ ...prev, mensaje: e.target.value }))}
                        //espacio para el mensaje
                        rows={4}
                        placeholder=""
                    />
                </Form.Item>

                <SubmitButton texto={"Enviar datos"}/>

            </Form>



        </Card>
    );
};