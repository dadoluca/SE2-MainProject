import { Outlet } from 'react-router-dom';
import { Container} from 'react-bootstrap';
import NavHeader from "../components/NavHeader";


function RootLayout(){
    return (    
        <main>
            <NavHeader/>
            <Container fluid className='mt-3'>
                <Outlet/>
            </Container>  
        </main>
    );
}

export default RootLayout;