import React from "react";

function Story() {
  return (
    <>
      <div className="story__pictures">
        <img
          src="img/story-1.jpeg"
          alt="Couple happy for new house"
          className="story__img-1"
        />
        <img src="img/story-2.jpeg" alt="New house" className="story__img-2" />
      </div>

      <div className="story__content">
        <h3 className="u-heading--light u-heading-3">
        Happy customers
          </h3>

        <h2 className="u-heading--dark u-heading-2 u-my-small">
        &raquo;The best decision of our lives&ldquo;
        </h2>

        <p className="story__text u-mb-medium">It is a dummy, meaningless text used to test fonts or fill space in a graphic design or printing industry. Web and graphic designers use this text to fill      </p>

        <button className="btn btn-brown">
        Find your home
          </button>
      </div>
    </>
  );
}

export default Story;
