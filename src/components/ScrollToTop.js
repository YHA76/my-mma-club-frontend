import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Remonte en haut de la page
  }, [pathname]); // Exécute l'effet à chaque changement de route

  return null;
}

export default ScrollToTop;
