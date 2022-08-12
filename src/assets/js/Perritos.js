import './App.css';
import Header from '../../Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomCard from '../../Components/Card';
import Button from "react-bootstrap/Button";
import '../src/assets/css/galeria.css';
import Footer from '../../Components/Footer';
import './index.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Header title="Galería de Imágenes con React" />
      </header>

      <section className='galeria'>
        <CustomCard title="Perrito 1" description="Esta es la descripción del perrito 1" img="http://placedog.net/200/300?id=0"/>
        <CustomCard title="Perrito 2" description="Esta es la descripción del perrito 2" img="http://placedog.net/200/300?id=1"/>
        <CustomCard title="Perrito 3" description="Esta es la descripción del perrito 3" img="http://placedog.net/200/300?id=2"/>
        <CustomCard title="Perrito 4" description="Esta es la descripción del perrito 4" img="http://placedog.net/200/300?id=3"/>
        <CustomCard title="Perrito 5" description="Esta es la descripción del perrito 5" img="http://placedog.net/200/300?id=10"/>
        <CustomCard title="Perrito 6" description="Esta es la descripción del perrito 6" img="http://placedog.net/200/300?id=5"/>
        <CustomCard title="Perrito 7" description="Esta es la descripción del perrito 7" img="http://placedog.net/200/300?id=6"/>
        <CustomCard title="Perrito 8" description="Esta es la descripción del perrito 8" img="http://placedog.net/200/300?id=7"/>
        <CustomCard title="Perrito 9" description="Esta es la descripción del perrito 9" img="http://placedog.net/200/300?id=8"/>
        <CustomCard title="Perrito 10" description="Esta es la descripción del perrito 10" img="http://placedog.net/200/300?id=9"/>
      </section>
        <Button href='' className='mb-5'>Ver gatitos</Button>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;