import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AllApartments from "./allSpecialApartments";

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
        const token =
          "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic3RyaW5nIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiTWFuYWdlciIsImV4cCI6MTcyMDAyNzI0NH0.E5bZGgTDDr57kg5Rjmv6GPcK3-KEj1T85unohz_WGshzpiNELL1nv9xaPGhxhhuwBOmunripcBR0Exx1_hckWw";
        const locStorToken = localStorage.getItem('amazingToken');
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
    console.log(oneHouse);

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

      <AllApartments id={oneHouse?.id} />
    </>
  );
};

export default OneHouseDetails;
