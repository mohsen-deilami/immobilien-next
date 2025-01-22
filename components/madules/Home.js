import React from "react";

export default function Home({img ,  title,   location,  roomCount,  meterage,    price}) {
  return (
    <div className="card">
      <img src={img} alt="House 6" className="card__img" />
      <h5 className="card__title">{title} </h5>
      <span className="card__like">
        <i className="fa fa-heart"></i>
      </span>
      <div className="card__details">
        <span className="">
          <i className="fa fa-map-marker card__icon"></i>
        </span>
        <p className="card__text">Location : {location}</p>
        <span className="">
          <i className="fa fa-user card__icon"></i>
        </span>
        <p className="card__text">Rooms : {roomCount} </p>
        <span className="">
          <i className="fa fa-expand card__icon"></i>
        </span>
        <p className="card__text">Meterage :{meterage} </p>
        <span className="">
          <i className="fa fa-key card__icon"></i>
        </span>
        <p className="card__text">price: {price} $ </p>
      </div>

      <a href="#" className="btn btn-brown btn-card">
        View
      </a>
    </div>
  );
}
