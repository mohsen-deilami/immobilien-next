import React from 'react'


export default function Home() {





  return (

  
  
       <div className="card" >
         <img src={home.img} alt="House 6" className="card__img" />
         <h5 className="card__title">{home.title}  </h5>
         <span className="card__like">
           <i className="fa fa-heart"></i>
         </span>
         <div className="card__details">
           <span className="">
             <i className="fa fa-map-marker card__icon"></i>
           </span>
           <p className="card__text">Location : {home.location}</p>
           <span className="">
             <i className="fa fa-user card__icon"></i>
           </span>
           <p className="card__text">Rooms : {home.roomCount} </p>
           <span className="">
             <i className="fa fa-expand card__icon"></i>
           </span>
           <p className="card__text">Meterage :{home.meterage}  </p>
           <span className="">
             <i className="fa fa-key card__icon"></i>
           </span>
           <p className="card__text">price: {home.price} $ </p>
         </div>
 
         <a href="#" className="btn btn-brown btn-card">
          View
         </a>
       </div> 
      
  
  
 
 
    
  )
}
