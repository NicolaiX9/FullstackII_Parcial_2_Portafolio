export function DefaultFooter() {

    const currentYear = new Date().getFullYear();

    return (
    <footer style={{ textAlign: 'center', backgroundColor: '#1677ff', color: 'black' }}>
        ©NicolásMoya {currentYear}. Email: nic.moyac@duocuc.cl
    </footer>
    )
}