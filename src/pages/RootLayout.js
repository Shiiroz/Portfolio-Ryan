import {Outlet} from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';



export default function Rootlayout(){
    return (
        <>
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
        </>
    );
}