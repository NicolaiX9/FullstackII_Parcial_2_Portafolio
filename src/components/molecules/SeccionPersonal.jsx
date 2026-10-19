import React from 'react';
import { Card, Avatar, Typography, Space } from 'antd';
import perfil from '../../assets/perfil.jpeg';



export const SeccionPersonal = () => {
    return (
        <Card style={{ marginTop: 16 }}>
            <Space direction="vertical" align="center" style={{ width: '100%', textAlign: 'center' }}>
                <Avatar
                    size={180}
                    src={perfil}
                    alt="Nicolás Moya"
                />
                <p level={2}>Nicolás Moya</p>
                <p type="secondary" style={{ fontSize: '16px' }}>
                    Estudiante de Duoc UC
                </p>
                <p style={{ maxWidth: 1000, fontSize: '20px' }}>
                    ¡Hola!, mi nombre es Nicolás Moya. Me apasiona la programación y el diseño de interfaces.
                    Me especializo en crear aplicaciones modernas y funcionales utilizando React+Vite y Ant Design.
                </p>
            </Space>
        </Card>
    );
};