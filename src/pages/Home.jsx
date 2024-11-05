import img1 from "../assets/image1.png";
import img2 from "../assets/image2.jpeg";
import img3 from "../assets/image3.jpeg";
import img4 from "../assets/image4.jpeg";

function Home() {
  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <p>This is a protected page accessible after login.</p>
      <div className="images">
        <img src={img1} alt="Image1" height="200" width="200" />
        <img src={img2} alt="Image2" height="200" width="200" />
        <img src={img3} alt="Image3" height="200" width="200" />
        <img src={img4} alt="Image4" height="200" width="200" />
      </div>
    </div>
  );
}

export default Home;
