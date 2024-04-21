import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/Discover.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import explore from "../Resources/explore.jpg";

const Discover = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleListItemHover = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setModalContent("");
  };

  return (
    <section className="discover">
      <Navbar />
      <div className="discover_body">
        <div className="discover_section">
          <h2>Share Your Room</h2>
          <p>
            Only women can share their rooms with trustworthy female guests and
            earn extra income. Ensuring safety for women.
          </p>
          <button
            className="feminine_button"
            onClick={() => navigate("/shareRoom")}
          >
            Share Your Room
          </button>
        </div>
        <div className="discover_section">
          <h2>Rent a Room</h2>
          <p>
            Discover unique places to stay from local female hosts for your next
            vacation rental. Ensuring safety for women.
          </p>
          <button
            className="feminine_button"
            onClick={() => navigate("/rentRoom")}
          >
            Rent a Room
          </button>
        </div>
        <div className="discover_section">
          <h2>Explore</h2>
          <div className="explore-content" onMouseLeave={handleModalClose}>
            <div className="content">
              <ul>
                <li onMouseEnter={() => handleListItemHover("Welcome")}>
                  <div className="fa fa-star" /> Welcome
                </li>
                <li onMouseEnter={() => handleListItemHover("Safety")}>
                  <div className="fa fa-star" /> Safety
                </li>
                <li onMouseEnter={() => handleListItemHover("Adventures")}>
                  <div className="fa fa-star" /> Adventures
                </li>
                <li onMouseEnter={() => handleListItemHover("Community")}>
                  <div className="fa fa-star" /> Community
                </li>
              </ul>
            </div>
            <div className="modal">
              <div className="modal-content">
                {modalContent === "" ? (
                  <div className="default-image">
                    <img src={explore} alt="Explore" />
                  </div>
                ) : (
                  <div>
                    {modalContent === "Welcome" && <WelcomeContent />}
                    {modalContent === "Safety" && <SafetyContent />}
                    {modalContent === "Adventures" && <AdventuresContent />}
                    {modalContent === "Community" && <CommunityContent />}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

const WelcomeContent = () => {
  return (
    <div>
      <h3>Welcome</h3>
      <p>
        Welcome to our rental platform designed exclusively for women! Whether you're looking for a cozy
        apartment in the heart of the city or a serene cottage by the beach,
        we've got you covered. Explore our listings and discover your perfect
        getaway.
      </p>
    </div>
  );
};

const SafetyContent = () => {
  return (
    <div>
      <h3>Safety</h3>
      <p>
        Your safety, as a woman traveler, is our top priority. We thoroughly vet all hosts and
        properties to ensure they meet our rigorous safety standards tailored for women.
        Additionally, our 24/7 customer support is always available to assist
        you in case of any emergencies during your stay.
      </p>
    </div>
  );
};

const AdventuresContent = () => {
  return (
    <div>
      <h3>Adventures</h3>
      <p>
        Embark on unforgettable adventures during your stay! Whether it's hiking
        through scenic trails, exploring hidden gems in the city, or indulging
        in local cuisine, there's something for every adventurous woman. Let us help
        you make the most out of your trip.
      </p>
    </div>
  );
};

const CommunityContent = () => {
  return (
    <div>
      <h3>Community</h3>
      <p>
        Join our vibrant community of women travelers and hosts! Connect with
        like-minded individuals, share travel tips, and discover insider
        recommendations. Whether you're a seasoned traveler or new to the
        journey, you'll find a welcoming community of women here.
      </p>
    </div>
  );
};


export default Discover;
