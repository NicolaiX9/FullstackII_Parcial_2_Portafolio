import React from 'react';
import { Card, Avatar, Typography, Space } from 'antd';
import perfil from '../../assets/perfil.jpeg';



export const SeccionPersonal = () => {
    return (
        <Card style={{ marginTop: 16 }}>
            <Space direction="vertical" align="center" style={{ width: '100%', textAlign: 'center' }}>
                <div data-testid="foto">
                <Avatar
                    size={180}
                    src={perfil}
                />
                </div>
                <p style={{ maxWidth: 1000, fontSize: '20px', marginTop: 16 }}>
                    <small>
                    ¡Hola!, mi nombre es Nicolás Moya. Me apasiona la programación y el diseño de interfaces. Me especializo en crear aplicaciones modernas y funcionales utilizando React+Vite y Ant Design.
                    </small>
                </p>

            </Space>
        </Card>
    );
};