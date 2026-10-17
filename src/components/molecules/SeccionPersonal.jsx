import React from 'react';
import { Card, Avatar, Typography, Space } from 'antd';
import perfil from '../../assets/perfil.jpeg';

const { Title, Paragraph } = Typography;

export const SeccionPersonal = () => {
    return (
        <Card style={{ marginTop: 16 }}>
            <Space direction="vertical" align="center" style={{ width: '100%', textAlign: 'center' }}>
                <Avatar
                    size={120}
                    src={perfil}
                    alt="Nicolás Moya"
                />
                <Title level={2}>Nicolás Moya</Title>
                <Paragraph type="secondary" style={{ fontSize: '16px' }}>
                    Estudiante de Duoc UC
                </Paragraph>
                <Paragraph style={{ maxWidth: 1000, fontSize: '20px' }}>
                    ¡Hola!, mi nombre es Nicolás Moya. Me apasiona la programación y el diseño de interfaces.
                    Me especializo en crear aplicaciones modernas y funcionales utilizando React+Vite y Ant Design.
                </Paragraph>
            </Space>
        </Card>
    );
};