import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IMG_URL } from '../Utils/config';
import Category from './Category';
import logofake from '../Images/for res-menu.jpg';

const Restaurantmenu = () => {
  const { restaurantId } = useParams();
  const [restaurantDetail, setRestaurantDetail] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch(`${MENU_API_URL}${restaurantId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch menu');
        }
        const data = await response.json();
        setRestaurantDetail(data);
      } catch (error) {
        console.error('Error fetching menu:', error);
      }
    };

    fetchMenu();
  }, [restaurantId]);

  if (!restaurantDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <h1>{restaurantDetail.name}</h1>
        <p>Locality: {restaurantDetail.locality}</p>
        <p>Rating: {restaurantDetail.avgRating} ({restaurantDetail.totalRatings})</p>
        <p>{restaurantDetail.costForTwoMessage}</p>
      </div>
      <div className="right-side">
        <img src={IMG_URL + restaurantDetail.cloudinaryImageId} alt={restaurantDetail.name} />
      </div>
    </div>
  );
};

export default Restaurantmenu;