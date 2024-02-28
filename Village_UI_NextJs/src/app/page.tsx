"use client";
import Image from "next/image";
import axios, { isCancel, AxiosError } from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [allHouses, setAllHouses] = useState([]);

  // async function getUser() {
  //   try {
  //     const response = await axios.get(
  //       "https://localhost:8080/api/house/all-houses"
  //     );
  //     console.log(response);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token =
          "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoia3Jpc3RhcHMiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJNYW5hZ2VyIiwiZXhwIjoxNzA5MjI2Mzk4fQ.uesjJgko9ETBdLmX4NgSlGQyO-NuXrRvEmHhlZQ3Z5lKdCvgsVZT0yOFkk-ghvKBB-qouAoR8qkV3mtNYW-Hpg";
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

  return (
    <main>
      <h1>This is next.js frontend for Village application</h1>
    </main>
  );
}
