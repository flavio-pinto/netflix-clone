import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import ContentHeader from './components/ContentHeader';
import HeaderNav from './components/HeaderNav';

function App() {
  return (
    <div className="App" style={{backgroundColor: "#221f1f"}}>
      <HeaderNav />
      <ContentHeader />
    </div>
  );
}

export default App;
