import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-1">
      <div className="container-md">
        <div className="d-flex justify-content-between align-items-center">
          <p className="mb-0">
            <i className="mb-1 bi bi-c-circle" /> 2024, Utkarsh Sorathia. All
            rights reserved.
          </p>

          <div className="p-1">
            <Link
              to="https://www.instagram.com/utkarsh__sorathia"
              className="text-danger mb-1 mx-3 bi bi-instagram"
              target="_blank"
            />
            <Link
              to="https://www.linkedin.com/in/utkarsh-sorathia-a9292b22a"
              className="text-primary mb-1 mx-3 bi bi-linkedin"
              target="_blank"
            />
            <Link
              to="https://www.facebook.com/profile.php?id=100056616396448&mibextid=JRoKGi"
              className="text-primary mb-1 mx-3 bi bi-facebook"
              target="_blank"
            />
            <Link
              to="https://github.com/Utkarsh-2003"
              className="text-white mb-1 mx-3 bi bi-github"
              target="_blank"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
