import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header>
      <div><Link to="/"><img id="logo" src="/logo192.png" alt="" /></Link>Kim's Cafe Köln</div>
      <Navbar />
    </header>
  );
}

export default Header;
