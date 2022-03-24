import { BrowserRouter } from "react-router-dom";
import "swiper/css";
import "./App.scss";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import GlobalRoutes from "./config/GlobalRoutes";

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <GlobalRoutes />
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
