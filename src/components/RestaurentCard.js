import { CDN_URL } from "../utils/constants";

const RestaurentCard=(props)=>{

    const {resData}=props;

    const{cloudinaryImageId,name,cuisines,lastMileTravelString,area,deliveryTime,avgRating,costForTwoString}= resData?.data;

    return(
        <div className="res-card">
            <img  
              className="res-img" 
              src={
                CDN_URL+cloudinaryImageId
                }
            />
            <h2>{name}</h2>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{area}</h4>
            <span>
              <h4><i class="fa-solid fa-star"></i>{avgRating}</h4>
              <h4>{lastMileTravelString}</h4>
              <h4>{costForTwoString}</h4>
            </span>
            {/* <h4>{deliveryTime} minutes</h4> */}
        </div>
    )
}

export default RestaurentCard;