import './App.css';
import CreateArea from './Components/CreateArea';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Note from './Components/Note';

function App() {
  return (
    <div >
     <Header/>
      <CreateArea/>   
       <Footer/>
       <Note key={1} title="Note title" content="Note content"/>
    </div>
  );
}

export default App;
