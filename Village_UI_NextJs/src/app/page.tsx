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

interface IRegData {
  username: string;
  password: string;
  isManager: boolean;
}

export default function Home() {
  const [allHouses, setAllHouses] = useState<IHouse[]>([]);
  const [regData, setRegData] = useState<IRegData>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token =
          "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic3RyaW5nIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiTWFuYWdlciIsImV4cCI6MTcyMDAyNzI0NH0.E5bZGgTDDr57kg5Rjmv6GPcK3-KEj1T85unohz_WGshzpiNELL1nv9xaPGhxhhuwBOmunripcBR0Exx1_hckWw";
        const locStorToken = localStorage.getItem("amazingToken");
        const response = await axios.get(
          "https://localhost:8080/api/house/all-houses",
          {
            headers: {
              Authorization: `Bearer ${locStorToken}`,
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

  async function registerUser() {
    // localStorage.removeItem();
    const registerUserName = document.getElementById("registerUserName")?.value;
    const regPassword = document.getElementById("regPassword")?.value;
    console.log(":)", registerUserName);
    console.log(":)", regPassword);
    const rD = {
      username: registerUserName,
      password: regPassword,
      isManager: true,
    } as IRegData;
    setRegData(rD);
    console.log(regData);
    const response = await axios.post(
      "https://localhost:8080/api/Auth/register",
      regData
      // {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      // }
    );

    console.log(response);
  }

  async function loginUser() {
    const loginUserName = document.getElementById("loginUserName")?.value;
    const loginPassword = document.getElementById("loginPassword")?.value;
    console.log(":)", loginUserName);
    console.log(":)", loginPassword);
    const rD = {
      username: loginUserName,
      password: loginPassword,
      isManager: true,
    } as IRegData;
    // setRegData(rD);
    console.log(regData);
    const response = await axios.post(
      "https://localhost:8080/api/Auth/login",
      rD
      // {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      // }
    );

    console.log(response);
    localStorage.setItem("amazingToken", response.data.token);
  }

  return (
    <main>
      <h1>This is next.js frontend for Village application</h1>
      <h3>Register</h3>
      <h4>UserName</h4> <input type="text" id="registerUserName" />
      <h4>Password</h4> <input type="text" id="regPassword" />
      <button onClick={registerUser}>register</button>
      <br />
      <h3>Login</h3>
      <h4>UserName</h4> <input type="text" id="loginUserName" />
      <h4>Password</h4> <input type="text" id="loginPassword" />
      <button onClick={loginUser}>login</button>
      <br />
      <button onClick={() => console.log(localStorage)}>
        clg logalStorage
      </button>
      <br />
      <br />
      <br />
      <br />
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

function tableRow(oneHouse: IHouse) {
  return (
    <>
      <td style={{ textAlign: "center" }}>{oneHouse?.id}</td>
      <td style={{ textAlign: "center" }}>{oneHouse?.number}</td>
      <td style={{ textAlign: "center" }}>{oneHouse?.street}</td>
      <td style={{ textAlign: "center" }}>{oneHouse?.city}</td>
      <td style={{ textAlign: "center" }}>{oneHouse?.country}</td>
      <td style={{ textAlign: "center" }}>{oneHouse?.postcode}</td>
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
