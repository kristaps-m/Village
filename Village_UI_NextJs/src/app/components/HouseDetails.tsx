import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AllApartmentsFilteredByHouseId from "./allSpecialApartments";

interface IHouse {
  id: number;
  number: number;
  street: string;
  city: string;
  country: string;
  postcode: string;
}

const OneHouseDetails = () => {
  const router = useRouter();
  const { houseId: houseId } = router.query; // Access the IHouse ID from the route parameter
  const [oneHouse, setOneHouse] = useState<IHouse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = "";
        const locStorToken = localStorage.getItem("amazingToken");
        const response = await axios.get(
          `https://localhost:8080/api/house/${houseId}`,
          {
            headers: {
              Authorization: `Bearer ${locStorToken}`,
            },
          }
        );
        setOneHouse(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      // Any cleanup code if needed
    };
  }, [houseId]);

  return (
    <>
      <h1>ID {oneHouse?.id}</h1>
      <h1>COUNTRY {oneHouse?.country}</h1>
      <h1>POSTCODE {oneHouse?.postcode}</h1>
      <h1>CITY {oneHouse?.city}</h1>
      <h1>STREET {oneHouse?.street}</h1>
      <h1>NUMBER {oneHouse?.number}</h1>
      <br />

      <AllApartmentsFilteredByHouseId id={oneHouse?.id} />
    </>
  );
};

export default OneHouseDetails;
