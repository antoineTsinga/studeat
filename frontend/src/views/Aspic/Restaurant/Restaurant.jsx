import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { FiSmartphone } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { backend } from "../../../adapters/apiCalls";
import PanierAlim from "./PanierAlim";
import PanierAlims from "./PanierAlims";
import { HiLocationMarker } from "react-icons/hi";

export default function Restaurant() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState({});

  useEffect(() => {
    if (!id) return;
    async function fetchData() {
      let restaurantData = {};
      await backend.get(`restaurants/${id}`).then(({ data }) => {
        restaurantData = data;
      });

      setRestaurant(restaurantData);
    }

    fetchData();
  }, []);
  return (
    <div className="d-flex justify-content-center" style={{ width: "100%" }}>
      <div className=" m-0" style={{ width: "98%" }}>
        <div className="row">
          {/* <div className="col">1 of 2</div> */}
          <div
            className="col mb-3"
            style={{ overflowY: "hidden", height: "200px" }}
          >
            <img
              src={process.env.PUBLIC_URL + `/image-items/${restaurant.image}`}
              alt={restaurant.restaurant}
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="mb-5">
          <h3>{restaurant.restaurant}</h3>
          <p>{restaurant.description}</p>

          <Typography variant="body2" color="text.secondary" component="div">
            <div className="mb-2">
              <p>
                <FiSmartphone className="me-2" size={25} />
                {restaurant.tel}
              </p>
            </div>
            <div>
              <p>
                <HiLocationMarker className="me-2" size={25} />
                {restaurant.adress}
              </p>
            </div>
          </Typography>
        </div>
        <div>
          <PanierAlims panierAlims={restaurant.panierAlims} />
        </div>
      </div>
    </div>
  );
}
