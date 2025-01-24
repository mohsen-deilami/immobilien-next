import React from "react";
import { faBarChart,  faGlobe, faKey, faLock, faMarker, faTrophy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Features() {
  return (
    <div className="featurs">
      <div className="featur">
        <span className="featur__icon">
        <FontAwesomeIcon icon={faGlobe} />
        </span>
        <h4 className="u-heading--dark">The best luxury homes in the world </h4>
        <p className="u-paragraph">
          The next thing about the Lorem Ipsum fake text is that some website
          designers and graphic artists, after they have created the template
          and content they want
         
        </p>
      </div>

      <div className="featur">
        <span className="featur__icon">
          <FontAwesomeIcon icon={faMarker} />
        </span>
        <h4 className="u-heading--dark">All homes in prime locations</h4>
        <p className="u-paragraph">
          Lorem Ipsum is a fabricated text produced by the printing industry
          with the help of graphic designers.
        </p>
      </div>
      <div className="featur">
        <span className="featur__icon">
           <FontAwesomeIcon icon={faKey} />
        </span>
        <h4 className="u-heading--dark">New house in a week</h4>
        <p className="u-paragraph">
          Because Lorem Ipsum closely resembles real text, designers often use
          Lorem Ipsum to simply show a client or employer that the design is
          authentic.{" "}
        </p>
      </div>
      <div className="featur">
        <span className="featur__icon">
          <FontAwesomeIcon icon={faBarChart} />
        </span>
        <h4 className="u-heading--dark">Only the best properties</h4>
        <p className="u-paragraph">
          To only show the client or employer what the designed template will
          look like after the text is placed in it and how the fonts and sizes
          have been considered.
        </p>
      </div>
      <div className="featur">
        <span className="featur__icon">
          <FontAwesomeIcon icon={faLock} />
        </span>
        <h4 className="u-heading--dark">Secure payments in the future</h4>
        <p className="u-paragraph">
          As a result, the overall design does not give the user the right
          perspective. If the designer tries to search for related texts, his
          focus will be taken away from the main task and this will be time
          consuming.{" "}
        </p>
      </div>
      <div className="featur">
        <span className="featur__icon">
          <FontAwesomeIcon icon={faTrophy} />
        </span>
        <h4 className="u-heading--dark">Top 1% Real Estate Agents</h4>
        <p className="u-paragraph">
          The designer also seeks to ask others for their opinions on the design
          after presenting the work and does not want people to focus on the
          existing texts.{" "}
        </p>
      </div>
    </div>
  );
}

export default Features;
