import './App.css';
import Home from './components/Home';
import About from './components/About';
import Events from './components/Events';
import Domains from './components/Domains';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import one from './assets/events/1.jpg';
import two from './assets/events/2.jpg';
import three from './assets/events/3.png';
import four from './assets/events/4.jpg';
import five from './assets/events/5.png';
import six from './assets/events/6.jpg';
import seven from './assets/events/7.png';
import nine from './assets/events/9.jpg';
import ten from './assets/events/10.jpg';
import eleven from './assets/events/11.png';
import  {Teams}  from './components/Teams/index';

function App(){
  const events = [
    {
      id: '1',
      type: 'workshop',
      name: 'Security and Linux',
      desc: '',
      image: one
    },
    {
      id: '2',
      type: 'Contest',
      name: "Code-O-Fiesta'16",
      desc: '',
      image: two
    },
    {
      id: '3',
      type: 'Contest',
      name: 'The Triwizard Tournament',
      desc: '',
      image: three
    },
    {
      id: '4',
      type: 'Contest',
      name: "Codio_Fiesta'17",
      desc: '',
      image: four
    },
    {
      id: '5',
      type: 'Workshop',
      name: 'Angular 5/Java Training',
      desc: '',
      image: five
    },
    {
      id: '6',
      type: 'Workshop',
      name: 'Cypher',
      desc: '',
      image: six
    },
    {
      id: '7',
      type: 'Workshop',
      name: "Cypher'20",
      desc: '',
      image: seven
    },
    {
      id: '9',
      type: 'Contest',
      name: 'Code Kaze',
      desc: '',
      image: nine
    },
    {
      id: '10',
      type: 'Contest',
      name: 'Code_O_Fiesta 5.0',
      desc: '',
      image: ten
    },
    {
      id: '11',
      type: 'Workshop',
      name: 'Node Jam',
      desc: '',
      image: eleven
    }
  ];

  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Events events={events} />
      <Domains />
      <Teams />
      <Contact />
    </div>
  );
}
export default App;