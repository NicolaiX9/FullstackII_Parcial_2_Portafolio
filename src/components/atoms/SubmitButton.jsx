import { indigoDark } from '@radix-ui/colors'


const estilo = {
    background: indigoDark.indigo9,
    borderRadius: '8px',
    padding: '8px 16px',
    border: 'none'
}

export function SubmitButton ({ texto, onClick }) {
    return (
        <button style={estilo} type={"submit"} className="botonDefault" onClick={onClick}>
            {texto}
        </button>
    );
}


