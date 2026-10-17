import React from 'react';
import { Card, Row, Col, Button, Typography } from 'antd';
import { GithubOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

export const SeccionProyectos = () => {

    const Styles = {

        paragraph: {
            fontSize: '20px',
            padding: '4px'
        }
    }

    return (
        <Card style={{ marginTop: 16 }}>
            <strong style={{fontSize: '30px', marginBottom: 20}} >Proyectos en los que he trabajado:</strong>
              <p style={Styles.paragraph}> <small> Home Catalogue: Proyecto Backend para la asignatura de FullStack I </small> </p>
            <Typography.Link
                href="https://github.com/NicolaiX9/homecatalogue---moya---sobarzo---011D"
                style={{ fontSize: '16px'}}
            >
                <GithubOutlined style={{marginTop: 20}} /> Ver repositorio en GitHub
            </Typography.Link>
        </Card>
    );
};