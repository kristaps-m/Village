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

export default function AllApartmentsFilteredByHouseId({
  id,
}: {
  id: number | undefined;
}) {
  const [specialApartments, setSpecialApartments] = useState<IApartment[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = "";
        const locStorToken = localStorage.getItem("amazingToken");
        const response = await axios.get(
          `https://localhost:8080/api/apartment/house/${id}`,
          {
            headers: {
              Authorization: `Bearer ${locStorToken}`,
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
                  <a
                    href={`/apartment/${oneApartment.id}`}
                    className="mt-1 px-1 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-full"
                  >
                    View
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
