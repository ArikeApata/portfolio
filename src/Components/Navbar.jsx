const Navbar = () => {
  return (
    // <nav className="navbar navbar-expand-lg bg-light">
    //   <div className="container-fluid justify-content-between">
    //     <div className="nav-logo">
    //       <a className="navbar-brand" href="#">
    //         {/* <img
    //         src="/logo.jpg"
    //         alt="Logo"
    //         classNameName="img-fluid d-inline-block align-text-top"
    //       /> */}
    //         Arike Apata
    //       </a>
    //     </div>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarNav"
    //       aria-controls="navbarNav"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="nav-links">
    //       <div className="collapse navbar-collapse" id="navbarNav">
    //         <ul className="navbar-nav nav-ul nav-tabs">
    //           <li className="nav-item">
    //             <a className="nav-link active" aria-current="page" href="#">
    //               Home
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="#about">
    //               About
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="#about">
    //               Projects
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="#contact">Contact</a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <div className="left">
          <a class="navbar-brand" href="/">
            Apata Priscilla
          </a>
        </div>
        <div className="right">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
