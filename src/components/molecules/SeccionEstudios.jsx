import React from 'react';
import { Card, List, Typography, Tag } from 'antd';

const { Title } = Typography;

export const SeccionEstudios = () => {
    const estudios = [
        {
            institucion: 'Duoc UC',
            titulo: 'Analista Programador / Ingeniería en Informática',
            año: '2022 - En curso',
        },
        {
            institucion: 'Curso Online / Plataforma',
            titulo: 'Especialización en React y Front-End Moderno',
            año: '2023',
        },
    ];

    return (
        <Card style={{ marginTop: 16 }}>
            <Title level={3}>Formación Académica</Title>
            <List
                itemLayout="horizontal"
                dataSource={estudios}
                renderItem={(item) => (
                    <List.Item>
                        <List.Item.Meta
                            title={item.titulo}
                            description={item.institucion}
                        />
                        <Tag color="blue">{item.año}</Tag>
                    </List.Item>
                )}
            />
        </Card>
    );
};