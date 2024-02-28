import axios from "axios";
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

interface IHouse {
  id: number;
  number: number;
  street: string;
  city: string;
  country: string;
  postcode: string;
}

export default function Apartament({ id }: { id: number }) {
  const [oneApartment, setOneApartment] = useState<IHouse>(Object);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token =
          "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoia3Jpc3RhcHMiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJNYW5hZ2VyIiwiZXhwIjoxNzA5MjI2Mzk4fQ.uesjJgko9ETBdLmX4NgSlGQyO-NuXrRvEmHhlZQ3Z5lKdCvgsVZT0yOFkk-ghvKBB-qouAoR8qkV3mtNYW-Hpg";
        const response = await axios.get(
          `https://localhost:8080/api/house/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setOneApartment(response.data);
        console.log(oneApartment);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      // Any cleanup code if needed
    };
  }, [id, oneApartment]);

  return (
    <>
      <h1>HELLLO THIS IS APARTMENRT!!!</h1>
      <p>{id}</p>
      <h1>{oneApartment.id}</h1>
      <h1>{oneApartment.number}</h1>
      <h1>{oneApartment.street}</h1>
      <h1>{oneApartment.city}</h1>
    </>
  );
}
