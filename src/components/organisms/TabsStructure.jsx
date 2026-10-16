import React from 'react';
import { Tabs } from 'antd';
import {SeccionPersonal} from "../molecules/SeccionPersonal.jsx";
import {FormularioContacto} from "../molecules/SeccionContactos.jsx";
import {SeccionProyectos} from "../molecules/SeccionProyectos.jsx";
import {SeccionEstudios} from "../molecules/SeccionEstudios.jsx";
import {SeccionExperiencia} from "../molecules/SeccionExperiencia.jsx";

// Importamos los organismos de las secciones (o los marcadores de posición)


export const TabsStructure = () => {
    // Arreglo de ítems exigidos por la pauta
    const items = [
        {
            key: '1',
            label: 'Sobre mí',
            children: <SeccionPersonal />,
        },
        {
            key: '2',
            label: 'Experiencia Laboral',
            children: <SeccionExperiencia />,
        },
        {
            key: '3',
            label: 'Estudios',
            children: <SeccionEstudios />,
        },
        {
            key: '4',
            label: 'Desarrollos y Proyectos',
            children: <SeccionProyectos />,
        },
        {
            key: '5',
            label: 'Contacto',
            children: <FormularioContacto />,
        },
    ];

    return (
        <Tabs
            defaultActiveKey="1"
            type="line"
            size="large"
            // AQUÍ ESTÁ LA MAGIA: Título a la izquierda de las pestañas
            tabBarExtraContent={{
                left: (
                    <div
                        style={{
                            fontSize: '20px',
                            fontWeight: 'bold',
                            color: '#1677ff',
                            marginRight: '32px',
                            paddingLeft: '12px',
                        }}
                    >
                        Portafolio Profesional
                    </div>
                ),
            }}
            items={items}
            onChange={(key) => console.log('Pestaña activa:', key)}
        />
    );
};