import React, { useState } from 'react'
import db from "../../data/db.json"
import Home from '@/components/madules/Home'
export default function index() {
    const [homes , setHomes]=useState(db.homes)
   console.log(homes)
    const searchHadler=searchValue=>{
        setHomes(db.homes.filter(home => home.title.toLowerCase().includes(searchValue)));
 
    }
  return (
    <div className="home-section" id="houses">
    <div className="home-filter-search">
        <div className="home-filter">
            <select name="" id="">
                <option value="" >Select</option>
                <option value="">Based on price</option>
                <option value="">Based on the number of rooms</option>
                <option value="">Based on address</option>
                <option value="">Based on size</option>
            </select>
        </div>
        <div className="home-search">
            <input type="text" placeholder="Search... " onChange={e=>searchHadler(e.target.value)} />
        </div>
    </div>
    <div className="homes">
     {homes.slice(0, 6).map((home) => (
            <Home key={home.id} {...home} />
          ))}
    </div>
    <ul className="pagination__list">
        <li className="pagination__item"><a href="#" className="">  </a></li>
        <li className="pagination__item"><a href="#" className="">2</a></li>
        <li className="pagination__item active"><a href="#" className="">1</a></li>
    </ul>
</div>
  )
}
