import About from "./pages/About";
import Contact from "./pages/Contact";
import Features from "./pages/Features";
import Navbar from "./pages/Navbar";
import FAQ from "./pages/Faq";
import Testimonials from "./pages/Testimonails";
import StayConnected from "./pages/StayConnected";
import DealershipManagement from "./pages/DealershipManagement";
import CarFinancing from "./pages/CarFinancing";
import Main from "./pages/Main";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Main/>
    <About/>
    <CarFinancing/>
    <DealershipManagement/>
    <Features/>
    <Testimonials/>
    <StayConnected/>
    <FAQ/>
    <Contact/>
    </>
  );
}
