import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header';
import ScrollTop from './components/ScrollTop';
import Footer from './components/Footer';
import Script from './components/Script';


const Layout = () => {
    const location = useLocation();
    const showHeaderFooter = !location.pathname.startsWith('/auth/');

    // if(auth !== null){
        return (
            <>
                <div className="page-background">
                    {showHeaderFooter && <Header />}
                    {showHeaderFooter && <ScrollTop />}
                    <Outlet />
                    {showHeaderFooter && <Footer />}
                    {showHeaderFooter && <Script />}
                </div>
            </>
        );
    // }else{
    //     <div className='Loading'></div>
    // }
};

export default Layout;
