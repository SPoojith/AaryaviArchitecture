import Header from './Header/Header';
import SubComponents from './SubComponents/SubComponents';
import Footer from './Footer/Footer';

function MainPage() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <div>
                <Header />
            </div>
            <div>
                <SubComponents />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default MainPage;