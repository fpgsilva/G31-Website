import './Navbar.css';

function Navbar() {


  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <div  className='navbar-logo'>
            <img className='navbar-icon' src='https://i.ibb.co/PCZmkbw/track-and-taste-logo-transparent.png'/>
            TRACK AND TASTE
          </div>
          <div className='menu-icon'>
            <i className='fas fa-bars'/>
          </div>
          <ul className='nav-menu'>
            <li className='nav-item'>
                Top
            </li>
            <li className='nav-item'>
                Team
            </li>
            <li className='nav-item'>
                Reports
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
