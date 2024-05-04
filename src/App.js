import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import RestaurentCard from "./components/RestaurentCard";
import Footer from "./components/Footer";
import RestaurentList from "./utils/mockData";
import { useState } from "react";

// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index

const Body=()=>{
    //Local state variable = Supur powerful variable
const [ListOfRestaurents,setListOfRestaurents] =useState(RestaurentList);

    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" 
                onClick={() =>{
                    filteredList=ListOfRestaurents.filter(
                        (res) => res.data.avgRating >4
                    );
                    setListOfRestaurents(filteredList);
                }}
                >
                    Top rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {
                    ListOfRestaurents.map((restaurant)=>(
                        <RestaurentCard key={restaurant.data.id} resData={restaurant}/>
                    ))
                }
               {/* restaurent cards (since reusage of it create as functional component) */}
            </div>
        </div>
    )
}

const AppLayout=()=>{
    return(
        <div className="app">
          <Header/>
          <Body/>
          <Footer/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>); 

