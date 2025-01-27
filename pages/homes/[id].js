import { useRouter } from "next/router";
import React from "react";
import db from "../../data/db.json";

export default function SingleHome() {
  const router = useRouter();

  const { id: homeID } = router.query;

  const homeDetail = db.homes.find((home) => home.id === Number(homeID));
  console.log(homeDetail);

  return (
    <div className="home-details">
      <div className="home-details-top">
        <div className="home-img">
          <img src={homeDetail?.img} alt="" />
        </div>
        <div className="home-interduce">
          <div className="home-title">
            <h1>
              <span>{homeDetail?.title} </span>
              <span>{homeDetail?.price.toLocaleString()} $</span>
            </h1>
            <div className="tags">
              <span className="tag green-tag">{homeDetail?.offer}</span>
              <span className="tag brown-tag">{homeDetail?.tags}</span>
            </div>
            <div className="adrress">Adrress : {homeDetail?.address} </div>
          </div>
          <div className="home-review">
            <div className="home-review-top">
              <p className="">
                <span>Property Code : </span>
                <span>{homeDetail?.code}</span>
              </p>
              <h2>Overview</h2>
            </div>
            <ul className="home-review-bottom">
              <li>
                <span>Property type: </span>
                <span>{homeDetail?.type}</span>
              </li>
              <li>
                <span>Rooms : </span>
                <span>{homeDetail?.roomCount}</span>
              </li>
              <li>
                <span>Metrage : </span>
                <span>{homeDetail?.meterage}</span>
              </li>
              <li>
                <span>Year of manufacture :</span>
                <span>{homeDetail?.manufacture}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="home-details-bottom">
        <div className="home-details-description">
          <p className="">Describe</p>
          <p className="">{homeDetail?.desc}</p>
        </div>
      </div>
    </div>
  );
}
