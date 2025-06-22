import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer.jsx";
import ScrollToHeaderButton from "../components/botaoNav/BotaoHeader.jsx";
import "./Layout.css"; // 👈 importa o CSS

export default function Layout() {
  return (
    <div className="layout-container">
      <Header />
      <main className="layout-main">
        <Outlet />
        <ScrollToHeaderButton />
      </main>
      <Footer />
    </div>
  );
}
