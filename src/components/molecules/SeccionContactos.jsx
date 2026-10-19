import React from 'react';
import { Card, Form, Input, Button, message, Typography } from 'antd';
import {GithubOutlined} from "@ant-design/icons";

const { Title } = Typography;

export const FormularioContacto = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Datos enviados:', values);
        message.success('¡Mensaje enviado con éxito!');
        form.resetFields();
    };

    return (
        <Card style={{ marginTop: 16 }}>
            <Title level={3}>Contacto</Title>
            <Form form={form} layout="vertical" onFinish={onFinish}>
                <Form.Item
                    label="Nombre completo"
                    name="nombre"
                    rules={[{ required: true, message: 'Por favor ingresa tu nombre' }]}
                >
                    <Input placeholder="Ej. Juan Pérez" />
                </Form.Item>

                <Form.Item
                    label="Correo electrónico"
                    name="email"
                    rules={[
                        { required: true, message: 'Por favor ingresa tu correo' },
                        { type: 'email', message: 'Ingresa un correo válido' }
                    ]}
                >
                    <Input placeholder="ejemplo@correo.com" />
                </Form.Item>

                <Form.Item
                    label="Mensaje"
                    name="mensaje"
                    rules={[{ required: true, message: 'Por favor escribe un mensaje' }]}
                >
                    <Input.TextArea rows={4} placeholder="Escribe tu mensaje aquí..." />
                </Form.Item>

                <Button type="primary" htmlType="submit">
                    Enviar Mensaje
                </Button>
            </Form>

            <Typography.Link
                href="https://github.com/NicolaiX9"
                style={{ fontSize: '16px'}}
            >
                <GithubOutlined style={{marginTop: 20}} /> Ver perfil de GitHub
            </Typography.Link>

        </Card>
    );
};