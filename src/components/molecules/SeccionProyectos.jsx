import React from 'react';
import { Card, Row, Col, Button, Typography } from 'antd';
import { GithubOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

export const SeccionProyectos = () => {
    const proyectos = [
        {
            titulo: 'Aplicación Portafolio React',
            descripcion: 'Portafolio profesional desarrollado con React, Vite y Ant Design.',
            github: 'https://github.com/tu-usuario/portafolio',
        },
        {
            titulo: 'Sistema de Gestión de Tareas',
            descripcion: 'App web interactiva para control de proyectos y tareas diarias.',
            github: 'https://github.com/tu-usuario/task-manager',
        },
    ];

    return (
        <Card style={{ marginTop: 16 }}>
            <Title level={3}>Desarrollos y Proyectos</Title>
            <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
                {proyectos.map((proy, idx) => (
                    <Col xs={24} sm={12} key={idx}>
                        <Card title={proy.titulo} type="inner">
                            <Paragraph>{proy.descripcion}</Paragraph>
                            <Button
                                type="primary"
                                icon={<GithubOutlined />}
                                href={proy.github}
                                target="_blank"
                            >
                                Ver Repositorio
                            </Button>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Card>
    );
};