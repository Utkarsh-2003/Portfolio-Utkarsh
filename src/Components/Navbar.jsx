import React, { useEffect } from "react";
import "../App.css";
import useLocalStorage from "use-local-storage";
import Toggle from "./Toggle";

const Navbar = () => {
  const [isDark, setIsDark] = useLocalStorage("isDark", false);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        document.title = '🙏 Come back to portfolio';
      } else {
        document.title = 'Portfolio | Utkarsh Sorathia';
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const collapseNavbar = () => {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");
    if (navbarToggler && navbarCollapse.classList.contains("show")) {
      navbarToggler.click();
    }
  };

  const handleNavLinkClick = (sectionName) => {
    document.title = `${sectionName} | Utkarsh Sorathia`;
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light border-bottom border-4 border-warning shadow-sm rounded fixed-top mx-4 mt-2">
        <div className="container-fluid">
          <a className="text-decoration-none text-dark mx-4 fs-4" href="#home">
            Utkarsh Sorathia
          </a>
          <button
            className={
              isDark
                ? "navbar-toggler border border-dark"
                : "navbar-toggler border border-dark"
            }
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span
              className={isDark ? "navbar-toggler-icon" : "navbar-toggler-icon"}
            ></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav mx-auto mb-2 mb-lg-0"
              onClick={collapseNavbar}
            >
              <li className="nav-item">
                <a
                  className="nav-link text-dark mx-3"
                  aria-current="page"
                  href="#home"
                  onClick={() => handleNavLinkClick("Home")}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-dark mx-3"
                  href="#about"
                  onClick={() => handleNavLinkClick("About")}
                >
                  About me
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-dark mx-3"
                  href="#skill"
                  onClick={() => handleNavLinkClick("Skill")}
                >
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-dark mx-3"
                  href="#projects"
                  onClick={() => handleNavLinkClick("Project")}
                >
                  Projects
                </a>
              </li>
              <li className="nav-item d-flex align-items-between">
                <a
                  className="nav-link text-dark mx-3"
                  href="#contact"
                  onClick={() => handleNavLinkClick("Contact")}
                >
                  Contact me
                </a>
              </li>
            </ul>
            {/* theme change */}
            <span className="me-4">
              <Toggle
                isChecked={isDark}
                handleChange={() => setIsDark(!isDark)}
              />
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
