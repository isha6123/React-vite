import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProductsSection from "./components/ProductsSection";
import StaffFeaturesSection from "./components/StaffFeaturesSection";
import PaymentNotificationSection from "./components/PaymentNotificationSection";
import TestimonialSection from "./components/TestimonialSection";
import Footer from "./components/Footer";



function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <StaffFeaturesSection />
      <PaymentNotificationSection />
      <TestimonialSection />
      
      
      <Footer />
    </div>
  );
}


export default App;


