import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";
import ThumbnailCard from "./components/ThumbnailCard";
import MediaCard from "./components/MediaCard";
import Testimonials from "./components/Testimonials";
import ImageRow from "./components/ImageRow";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ThumbnailCard />
      <MediaCard />
      <Testimonials />
      <ImageRow />
      <Footer />
    </>
  );
}

export default App;
