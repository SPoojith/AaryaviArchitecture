import Header from './Header/Header';
import SubComponents from './SubComponents/SubComponents';
import Footer from './Footer/Footer';

function MainPage() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <div style={{ flex: '0 0 10%' }}>
                <Header />
            </div>
            <div style={{ flex: '1 0 80%' }}>
                <SubComponents />
            </div>
            <div style={{ flex: '0 0 10%' }}>
                <Footer />
            </div>
        </div>
    );
}

export default MainPage;