import Link from "next/link";
import React from "react";

const MobileMenus = ({ setSidebarOpen }) => {
  return (
    <>
      <nav className="mean-nav">
        <ul>
          <li>
            <Link onClick={() => setSidebarOpen(false)} href='#'>Главная</Link>
            <Link onClick={() => setSidebarOpen(false)} href='#services'>Услуги</Link>
            <Link onClick={() => setSidebarOpen(false)} href='#clients_way'>Как работает</Link>
            <Link onClick={() => setSidebarOpen(false)} href='#advantages'>Преимущества</Link>
            <Link onClick={() => setSidebarOpen(false)} href='#faq'>FAQ</Link>
            <Link onClick={() => setSidebarOpen(false)} href='#contact'>Подключение</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MobileMenus;
