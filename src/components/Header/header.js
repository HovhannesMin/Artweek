import './header.css';
function Header() {


  return (
    <>
      <div className="header">
        <div className='right'>
          <h2 className='name'><b>A+</b> Studio</h2>
        </div>
        <div className='left'>
          <a className='lefttext'><b>Home</b></a>
          <a className='lefttext'><b>What We Do</b></a>
          <a className='lefttext'><b>Service</b></a>
          <a className='lefttext'><b>Project</b></a>
          <a className='lefttext'><b>Blog</b></a>
          <a className='lefttext'><b>Contact</b></a>
        </div>

      </div>
    </>
  );
}

export default Header;