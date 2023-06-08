import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://media.istockphoto.com/id/157569856/photo/udaipur-lake-palace.jpg?s=612x612&w=0&k=20&c=VvMTA1DugiV3a68Hk-glWmHzbQ49v3oC5cTsDgVGNas="
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination."
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
