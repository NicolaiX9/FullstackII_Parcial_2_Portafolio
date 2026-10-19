import React from 'react';
import { Timeline, Card, Typography } from 'antd';
import {Styles as StylesParagraph} from "../atoms/StylesParagraph.jsx";



const { Title } = Typography;



export const SeccionEstudios = () => {
    return (
        <Card style={{ marginTop: 16 }}>
            <p level={2} style={{ fontSize: '30px', marginBottom: '20px' }}>
                Formación Académica
            </p>
            <p style={StylesParagraph.paragraph}> <small> Enseñanza media completa en el liceo Augusto D’halmar. Año de egreso: 2017 </small></p>
            <p style={StylesParagraph.paragraph}> <small>Carrera técnica (aún en curso) de Analista Programador. Actualmente en su último año. </small></p>
            <p></p>
        </Card>
    );
};