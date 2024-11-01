import { Outlet } from 'react-router-dom';
import { Container} from 'react-bootstrap';

function RootLayout(){
    return (    
        <main>
            <Container fluid className='mt-3'>
                <Outlet/>
            </Container>  
        </main>
    );
}

export default RootLayout;