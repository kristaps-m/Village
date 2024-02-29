"use client";
import Image from "next/image";
import axios, { isCancel, AxiosError } from "axios";
import { useEffect, useState } from "react";

interface IHouse {
  id: number;
  number: number;
  street: string;
  city: string;
  country: string;
  postcode: string;
}

export default function Home() {
  const [allHouses, setAllHouses] = useState<IHouse[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token =
          "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic3RyaW5nIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiTWFuYWdlciIsImV4cCI6MTcwOTMxOTU0M30.Yripqo8VhGs8K159TqBmS7BwyLFrEN46Np0GuFbYtRVFu1WomEsR19--iickizd0tkC7ditE_pQ1JW14xrSmAA";
        const response = await axios.get(
          "https://localhost:8080/api/house/all-houses",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setAllHouses(response.data);
        console.log(allHouses);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      // Any cleanup code if needed
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount
  // useEffect(() => {
  //   const params = {
  //     header:
  //       "Authorization: bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoia3Jpc3RhcHMiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJNYW5hZ2VyIiwiZXhwIjoxNzA5MjI2Mzk4fQ.uesjJgko9ETBdLmX4NgSlGQyO-NuXrRvEmHhlZQ3Z5lKdCvgsVZT0yOFkk-ghvKBB-qouAoR8qkV3mtNYW-Hpg",
  //   };
  //   try {
  //     const response = axios.get(
  //       "https://localhost:8080/api/house/all-houses",
  //       { params }
  //     );
  //     console.log(response);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // });
  function tableRow(oneHouse: IHouse) {
    return (
      <>
        <td style={{ textAlign: "center" }}>{oneHouse.id}</td>
        <td style={{ textAlign: "center" }}>{oneHouse.number}</td>
        <td style={{ textAlign: "center" }}>{oneHouse.street}</td>
        <td style={{ textAlign: "center" }}>{oneHouse.city}</td>
        <td style={{ textAlign: "center" }}>{oneHouse.country}</td>
        <td style={{ textAlign: "center" }}>{oneHouse.postcode}</td>
        <td style={{ textAlign: "center" }}>
          <a href={`/house/${oneHouse.id}`}>
            <button className="mt-1 px-1 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-full">
              View
            </button>
          </a>
        </td>
      </>
    );
  }

  return (
    <main>
      <h1>This is next.js frontend for Village application</h1>
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Number</th>
            <th>Street</th>
            <th>City</th>
            <th>Country</th>
            <th>Postcode</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {allHouses.map((oneHouse) => {
            return (
              // <tr key={oneHouse.id}>
              //   <td>{oneHouse.id}</td>
              //   <td>{oneHouse.number}</td>
              //   <td>{oneHouse.street}</td>
              //   <td>{oneHouse.city}</td>
              //   <td>{oneHouse.country}</td>
              //   <td>{oneHouse.postcode}</td>
              // </tr>
              <tr
                key={oneHouse.id}
                style={{ border: "solid black 4px", margin: 10 }}
              >
                {tableRow(oneHouse)}
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
    </main>
  );
}
