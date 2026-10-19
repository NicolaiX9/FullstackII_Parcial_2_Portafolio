import React from 'react';
import { Card, Row, Col, Button, Typography } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import {Styles as StylesParagraph} from "../atoms/StylesParagraph.jsx";

const { Title, Paragraph } = Typography;

export const SeccionProyectos = () => {


    return (
        <Card style={{ marginTop: 16 }}>
           <p style={{fontSize: '30px', marginBottom: '20px'}}> <strong>Proyectos en los que he trabajado:</strong> </p>
              <p style={StylesParagraph.paragraph}> <small> Home Catalogue: Proyecto Backend para la asignatura de FullStack I </small> </p>
            <Typography.Link
                href="https://github.com/NicolaiX9/homecatalogue---moya---sobarzo---011D"
                style={{ fontSize: '16px'}}
            >
                <GithubOutlined style={{marginTop: 20}} /> Ver repositorio en GitHub
            </Typography.Link>
        </Card>
    );
};