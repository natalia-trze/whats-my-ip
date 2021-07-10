import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const MyNavbar = () => {
    return (
        <div>
            <Container>
                <Navbar className="m-4" expand="lg" variant="dark" bg="dark">
                    <Navbar.Brand href="#">Navbar</Navbar.Brand>
                </Navbar>
            </Container>
        </div>
    )
}

export default MyNavbar
