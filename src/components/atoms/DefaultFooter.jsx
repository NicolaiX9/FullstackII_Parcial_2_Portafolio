


export function DefaultFooter() {

    const currentYear = new Date().getFullYear();

    return (
    <footer style={{ textAlign: 'center' }}>
        ©NicolásMoya {currentYear}. Contacto: nic.moyac@duocuc.cl
    </footer>
    )
}