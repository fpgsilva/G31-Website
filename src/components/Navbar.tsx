import './Navbar.css';

function Navbar() {

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    } else {
      console.error(`Element with id "${id}" not found.`);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <div  className='navbar-logo'>
            <img className='navbar-icon' src='track-and-taste-logo-Photoroom.png'/>
            TRACK AND TASTE
          </div>
          <div className='menu-icon'>
            <i className='fas fa-bars'/>
          </div>
          <ul className='nav-menu'>
            <li className='nav-item' onClick={() => handleScroll('top')}>
                Top
            </li>
            <li className='nav-item' onClick={() => handleScroll('team')}>
                Team
            </li>
            <li className='nav-item' onClick={() => handleScroll('report')}>
                Reports
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
