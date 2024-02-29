import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface IApartment {
  id: number;
  number: number;
  floor: number;
  numberOfRooms: number;
  population: number;
  fullArea: number;
  livingSpace: number;
  idOfHouse: number;
}

const OneApartmentDetails = () => {
  const router = useRouter();
  const { apartmentId: apartmentId } = router.query; // Access the IHouse ID from the route parameter
  const [oneApartment, setOneApartment] = useState<IApartment | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token =
          "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic3RyaW5nIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiTWFuYWdlciIsImV4cCI6MTcwOTMxOTU0M30.Yripqo8VhGs8K159TqBmS7BwyLFrEN46Np0GuFbYtRVFu1WomEsR19--iickizd0tkC7ditE_pQ1JW14xrSmAA";
        const response = await axios.get(
          `https://localhost:8080/api/apartment/${apartmentId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setOneApartment(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    console.log(oneApartment);

    // Cleanup function
    return () => {
      // Any cleanup code if needed
    };
  }, [apartmentId]);

  return (
    <>
      <h1>Id: {oneApartment?.id}</h1>
      <h1>Number: {oneApartment?.number}</h1>
      <h1>Floor: {oneApartment?.floor}</h1>
      <h1>Number of Rooms: {oneApartment?.numberOfRooms}</h1>
      <h1>Population: {oneApartment?.population}</h1>
      <h1>Full area: {oneApartment?.fullArea}</h1>
      <h1>Living Space: {oneApartment?.livingSpace}</h1>
      <br />

      {/* <AllApartments id={oneHouse?.id} /> */}
    </>
  );
};

export default OneApartmentDetails;
