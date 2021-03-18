import { Link } from 'react-router-dom'
import React, { Component } from 'react'


class Navbar extends Component {
  state = {
    isClicked: false
  }
  changeBgc = () => {
    this.setState({ isClicked: !this.state.isClicked });
  }
  render() {
    return (
      <nav>
        <ul>
          <li><Link onClick={this.changeBgc} className={this.state.isClicked === false ? "hellButton" : "dunkelButton"} to="/speisekarte">Speisekarte</Link></li>
          <li><Link className="hellButton" to="/kontakt">Kontakt</Link></li>
          <li><Link className="hellButton" to="/öffnungszeiten">Öffnungszeiten</Link></li>
          <li><Link className="hellButton" to="/galerie">Galerie</Link></li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;


// const Navbar = () => {
//   return (
//     <nav>
//       <ul>
//         <li><Link className="hellButton" to="/speisekarte">Speisekarte</Link></li>
//         <li><Link className="hellButton" to="/kontakt">Kontakt</Link></li>
//         <li><Link className="hellButton" to="/öffnungszeiten">Öffnungszeiten</Link></li>
//         <li><Link className="hellButton" to="/galerie">Galerie</Link></li>
//       </ul>
//     </nav>

//   );
// }

// export default Navbar;
