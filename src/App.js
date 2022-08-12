import './App.css';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomCard from './Components/Card';
import Button from "react-bootstrap/Button";
import '../src/assets/css/galeria.css';
import Footer from './Components/Footer';
import './index.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Header title="Galería de Imágenes con React" />
      </header>

      <section className='galeria'>
        <CustomCard title="Gatito 1" description="Esta es la descripción del gatito 1" img="http://placekitten.com/200/300?image=0" ifNew='true'/>
        
        <CustomCard title="Gatito 2" description="Esta es la descripción del gatito 2" img="http://placekitten.com/200/300?image=1" ifNew='true'/>
        <CustomCard title="Gatito 3" description="Esta es la descripción del gatito 3" img="http://placekitten.com/200/300?image=2" ifNew='false'/>
        <CustomCard title="Gatito 4" description="Esta es la descripción del gatito 4" img="http://placekitten.com/200/300?image=4" ifNew='true'/>
        <CustomCard title="Gatito 5" description="Esta es la descripción del gatito 5" img="http://placekitten.com/200/300?image=10" ifNew='true'/>
        <CustomCard title="Gatito 6" description="Esta es la descripción del gatito 6" img="http://placekitten.com/200/300?image=5" ifNew='false'/>
        <CustomCard title="Gatito 7" description="Esta es la descripción del gatito 7" img="http://placekitten.com/200/300?image=6" ifNew='false'/>
        <CustomCard title="Gatito 8" description="Esta es la descripción del gatito 8" img="http://placekitten.com/200/300?image=7" ifNew='true'/>
        <CustomCard title="Gatito 9" description="Esta es la descripción del gatito 9" img="http://placekitten.com/200/300?image=8" ifNew='false'/>
        <CustomCard title="Gatito 10" description="Esta es la descripción del gatito 10" img="http://placekitten.com/200/300?image=9" ifNew='false'/>
      </section>
        <Button href='' className='mb-5'>Ver perritos</Button>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
