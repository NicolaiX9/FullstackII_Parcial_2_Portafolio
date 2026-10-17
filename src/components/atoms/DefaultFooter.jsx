export function DefaultFooter() {

    const currentYear = new Date().getFullYear();

    return (
    <footer style={{ textAlign: 'center' }}>
        ©NicolásMoya {currentYear}. Email: nic.moyac@duocuc.cl
    </footer>
    )
}