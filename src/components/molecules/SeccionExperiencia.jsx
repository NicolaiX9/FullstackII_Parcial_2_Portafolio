import React from 'react';
import { Timeline, Card, Typography } from 'antd';

const { Title } = Typography;

export const SeccionExperiencia = () => {
    const experiencias = [
        {
            children: (
                <>
                    <strong>Desarrollador Front-End Trainee</strong> - Empresa X
                    <br />
                    <small>Enero 2024 - Presente</small>
                    <p>Desarrollo de componentes reutilizables con React y control de estado.</p>
                </>
            ),
        },
        {
            children: (
                <>
                    <strong>Soporte Técnico y TI</strong> - Empresa Y
                    <br />
                    <small>Marzo 2023 - Diciembre 2023</small>
                    <p>Mantenimiento de sistemas y atención a usuarios.</p>
                </>
            ),
        },
    ];

    return (
        <Card style={{ marginTop: 16 }}>
            <Title level={3}>Experiencia Laboral</Title>
            <Timeline items={experiencias} style={{ marginTop: 24 }} />
        </Card>
    );
};