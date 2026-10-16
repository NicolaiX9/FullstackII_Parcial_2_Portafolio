import { indigoDark } from '@radix-ui/colors'


const estilo = {
    background: indigoDark.indigo9,
    color: '#fff',
    borderRadius: '8px',
    padding: '8px 16px'
}

export function MiBoton({ texto, onClick }) {
    return (
        <button style={estilo} className="mi-btn" onClick={onClick}>
            {texto}
        </button>
    );
}


