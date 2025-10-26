import './App.css';
import MainPage from './Main/MainPage';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';

function App() {
  return (
    <MantineProvider>
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header> */}
        <MainPage></MainPage>
      </div>
    </MantineProvider>
  );
}

export default App;
