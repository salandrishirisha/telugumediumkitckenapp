import { useEffect, useState } from "react"
import { IMG_URL, API_URL } from "../Utils/config"

const Crowsel = () => {
    const [banner, setBanner] = useState([]);

    useEffect(() => {
        getBanner();
    }, []);

    async function getBanner() {
        try {
            const response = await fetch(RES_API);
            if (response.ok) {
                const json = await response.json();
                const bannerData = json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info || [];
                setBanner(bannerData);
            } else {
                throw new Error('Failed to fetch banner data');
            }
        } catch (error) {
            console.error('Error fetching banner data:', error);
        }
    }

    return (
        <div className="c-main">
            <h1 className="c-head">Plates of joy!</h1>
            <div className="banner-list">
                {banner.map((data, index) => (
                    <img key={index} src={IMG_URL + data?.imageId} alt={`Banner ${index + 1}`} />
                ))}
            </div>
        </div>
    );
}

export default Crowsel;
