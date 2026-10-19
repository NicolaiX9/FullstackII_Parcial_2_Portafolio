import React from 'react';
import { Timeline, Card, Typography } from 'antd';
import {Styles as StylesParagraph} from "../atoms/StylesParagraph.jsx";



const { Title } = Typography;



export const SeccionEstudios = () => {
    return (
        <Card style={{ marginTop: 16 }}>
            <p level={2} style={{ fontSize: '30px' }}>
                Formación Académica
            </p>
            <p style={StylesParagraph.paragraph}>Enseñanza media completa en el liceo Augusto D’halmar. Año de egreso: 2017</p>
            <p style={StylesParagraph.paragraph}>Carrera técnica (aún en curso) de Analista Programador. Actualmente en su último año.</p>
            <p></p>
        </Card>
    );
};