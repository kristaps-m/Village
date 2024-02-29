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

export default function AllApartments({ id }: { id: number | undefined }) {
  const [specialApartments, setSpecialApartments] = useState<IApartment[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token =
          "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic3RyaW5nIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiTWFuYWdlciIsImV4cCI6MTcwOTMxOTU0M30.Yripqo8VhGs8K159TqBmS7BwyLFrEN46Np0GuFbYtRVFu1WomEsR19--iickizd0tkC7ditE_pQ1JW14xrSmAA";
        const response = await axios.get(
          `https://localhost:8080/api/apartment/house/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setSpecialApartments(response.data);
        console.log(specialApartments);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      // Any cleanup code if needed
    };
  }, [id]);

  return (
    <>
      <h1>Hello these are special Apartaments with House id!!! - {id}</h1>
      {/* <h1>{specialApartments.id}</h1>
      <h1>{specialApartments.number}</h1>
      <h1>{specialApartments.street}</h1>
      <h1>{specialApartments.city}</h1> */}
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Number</th>
            <th>Floor</th>
            <th>Number Of Rooms</th>
            <th>Population</th>
            <th>Full Area</th>
            <th>Living Space</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {specialApartments.map((oneApartment) => {
            return (
              <tr key={oneApartment.id} style={{ textAlign: "center" }}>
                <td>{oneApartment.id}</td>
                <td>{oneApartment.number}</td>
                <td>{oneApartment.floor}</td>
                <td>{oneApartment.numberOfRooms}</td>
                <td>{oneApartment.population}</td>
                <td>{oneApartment.fullArea}</td>
                <td>{oneApartment.livingSpace}</td>
                <td style={{ textAlign: "center" }}>
                  <a href={`/apartment/${oneApartment.id}`}>
                    <button className="mt-1 px-1 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-full">
                      View
                    </button>
                  </a>
                </td>
              </tr>
              // <tr
              //   key={oneHouse.id}
              //   style={{ border: "solid black 4px", margin: 10 }}
              // >
              //   {tableRow(oneHouse)}
              // </tr>
            );
          })}
        </tbody>
      </table>
      <br />
    </>
  );
}
