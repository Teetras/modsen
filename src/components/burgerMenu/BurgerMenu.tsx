import React, { useRef, useState } from "react";
// import styles from "./BurgerMenu.css";
import useOutsideClick from "../../utils/customHook";

const BurgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useOutsideClick(menuRef, () => setIsOpen(false)); // Закрытие меню при клике вне

  return (
    <div className="burgerContainer">
      <button
        className="burgerButton"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? "X" : "☰"}
      </button>
      {isOpen && (
        <div className="menu" ref={menuRef}>
          <ul className="menuList">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/#/fav">Favorite</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
