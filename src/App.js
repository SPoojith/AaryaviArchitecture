import './App.css';
import MainPage from './Main/MainPage';
import { MantineProvider } from '@mantine/core';

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
