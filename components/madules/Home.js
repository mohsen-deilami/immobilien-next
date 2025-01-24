import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand, faHeart, faKey, faLocationDot, faMapMarker, faUser } from "@fortawesome/free-solid-svg-icons";

export default function Home({id ,img ,  title,   location,  roomCount,  meterage,    price}) {
  return (
    <div className="card">
      <img src={img} alt="House 6" className="card__img" />
      <h5 className="card__title">{title} </h5>
      <span className="card__like">
       
          <FontAwesomeIcon icon={faHeart} className="card__icon"/>
      </span>
      <div className="card__details">
      <span className="">

        <FontAwesomeIcon icon={faLocationDot} className="card__icon"/>
      </span>

        <p className="card__text">Location : {location}</p>

        <span className="">
            <FontAwesomeIcon icon={faUser} className="card__icon"/>
        </span>
        <p className="card__text">Rooms : {roomCount} </p>
        
        <span className="">
          <FontAwesomeIcon icon={faExpand} className="card__icon"/>
        </span>
        <p className="card__text">Meterage :{meterage} </p>
        <span className="">
          <FontAwesomeIcon icon={faKey} className="card__icon"/>
        </span>
        <p className="card__text">price: {price != null ? new Intl.NumberFormat('en-US').format(price):''} $ </p>
      </div>

      <Link href={`/homes/${id}`} className="btn btn-brown btn-card">
        View
      </Link>
    </div>
  );
}
