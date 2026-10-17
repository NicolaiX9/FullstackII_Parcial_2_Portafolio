import React from 'react';
import { Card, List, Typography, Tag } from 'antd';



const { Title } = Typography;

const Styles = {

    paragraph: {
        fontSize: '20px',
        padding: '4px'
    }
}


export const SeccionEstudios = () => {
    return (
        <Card style={{ marginTop: 16 }}>
            <Title level={2} style={{ fontSize: '30px' }}>
                Formación Académica
            </Title>
            <p style={Styles.paragraph}>Enseñanza media completa en el liceo Augusto D’halmar. Año de egreso: 2017</p>
            <p style={Styles.paragraph}>Carrera técnica (aún en curso) de Analista Programador. Actualmente en su último año.</p>
            <p></p>
        </Card>
    );
};