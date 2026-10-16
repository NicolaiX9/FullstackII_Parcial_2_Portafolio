import React from 'react';
import { Card, Avatar, Typography, Space } from 'antd';

const { Title, Paragraph } = Typography;

export const SeccionPersonal = () => {
    return (
        <Card style={{ marginTop: 16 }}>
            <Space direction="vertical" align="center" style={{ width: '100%', textAlign: 'center' }}>
                <Avatar
                    size={120}
                    src="https://api.dicebear.com/7.x/miniavs/svg?seed=Nicolas"
                    alt="Nicolás Moya"
                />
                <Title level={2}>Nicolás Moya</Title>
                <Paragraph type="secondary" style={{ fontSize: '16px' }}>
                    Desarrollador Front-End | Estudiante de Duoc UC
                </Paragraph>
                <Paragraph style={{ maxWidth: 600 }}>
                    ¡Hola! Soy apasionado por la programación web y el diseño de interfaces.
                    Me especializo en crear aplicaciones modernas y funcionales utilizando React, Vite y Ant Design.
                </Paragraph>
            </Space>
        </Card>
    );
};