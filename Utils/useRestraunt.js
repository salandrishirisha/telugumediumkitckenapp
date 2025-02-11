import { useState, useEffect } from 'react';
import { MENU_API_URL } from './config';

const useRestraunt = (restaurantId) => {
  const [restaurantDetail, setRestaurantDetail] = useState(null);

  // Get data from API
  useEffect(() => {
    getRestrauntInfo();
  }, [restaurantId]);

  async function getRestrauntInfo() {
    try {
      const response = await fetch(`${MENU_API_URL}${restaurantId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch restaurant info');
      }
      const data = await response.json();
      setRestaurantDetail(data);
    } catch (error) {
      console.error('Error fetching restaurant info:', error);
    }
  }

  return restaurantDetail;
};

export default useRestraunt;