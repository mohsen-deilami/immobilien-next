import React, { useState } from "react";
import db from "../../data/db.json";
import Home from "@/components/madules/Home";
export default function index() {
  const [homes, setHomes] = useState(db.homes);
  const [pageNumber , setPageNumber]=useState(1)
  const searchHadler = (searchValue) => {
    const newHomes = db.homes.filter((home) =>
      home.title.toLowerCase().includes(searchValue)
    );
    setHomes(newHomes);
  };
  const selectHandler = (value) => {
    switch (value) {
      case "price": {
        const result = [...homes].sort((a, b) => a.price - b.price);
        setHomes(result);

        break;
      }
      case "rooms": {
        const result = [...homes].sort((a, b) => a.roomCount - b.roomCount);
        setHomes(result);
        break;
      }
      case "metrage": {
        const result = [...homes].sort((a, b) => a.meterage - b.meterage);
        setHomes(result);
        break;
      }
      default: {
        setHomes([...db.homes]);
        break;
      }
    }
  };

  const selectPage=(event,page)=>{
    event.preventDefault();
   console.log(page);
   setPageNumber(page)
    const endIndex=(page * 3) ;
    const startIndex=endIndex - 3;
    setHomes(db.homes.slice(startIndex , endIndex));
  }
  return (
    <div className="home-section" id="houses">
      <div className="home-filter-search">
        <div className="home-filter">
          <select
            name=""
            id=""
            onChange={(event) => selectHandler(event.target.value)}
          >
            <option value="-1">Select</option>
            <option value="price">Based on price</option>
            <option value="rooms">Based on the number of rooms</option>
            <option value="metrage">Based on size</option>
          </select>
        </div>
        <div className="home-search">
          <input
            type="text"
            placeholder="Search title... "
            onChange={(e) => searchHadler(e.target.value)}
          />
        </div>
      </div>
      <div className="homes">
        {!homes.length && (
          <p className="null-result-search">
            There are no results for your search......
          </p>
        )}
        {homes.slice(0,3).map((home) => (
          <Home key={home.id} {...home} />
        ))}
      </div>

      <ul className="pagination__list">
      {Array.from({length:Math.ceil( db.homes?.length / 3)}).map((item , index) =>(
        <li className={ (index +1) === pageNumber ? "pagination__item active " : "pagination__item"  } key={index} >
          <a href="#" className="" onClick={event=>selectPage(event,index+1)}>
           {index+1}
          </a>
        </li>

      ))}
    
      </ul>
    </div>
  );
}
