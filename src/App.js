import './App.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import SideBar from './components/SideBar';
import MainPage from './components/MainPage';

// import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
// importing charts.js
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import MainNavBar from './components/NavBar';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function App() {
  return (
    <>
      <MainNavBar/>

      <Row>
        {/* this is the sidebar */}
        <Col>
          <SideBar></SideBar>
        </Col>

        {/* this is the main page */}
        <Col xs={9}>
          <MainPage />
        </Col>
      </Row>
    </>
  );
}

export default App;
