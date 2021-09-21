import logo from './logo.svg';
import './App.css';
import images from 'data.js';
import Header from './Header.js';
import ImageList from './ImageList.js';

function App() {
  return (
    <div className="App">
      <Header />
      <ImageList />
    </div>
  );
}

export default App;
