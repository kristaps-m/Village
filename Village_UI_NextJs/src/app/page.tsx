"use client";
import axios, { isCancel, AxiosError } from "axios";
import { useEffect, useState } from "react";
// ---- Material UI
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Skeleton from "@mui/material/Skeleton";

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
  const [loadingForAllHouses, setLFAH] = useState<boolean>(false);
  const [isLogedIn, setIsLogedIn] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = "";
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
        // console.log(allHouses);
        setLFAH(true);
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
    try {
      const registerUserName =
        document.getElementById("registerUserName")?.value;
      const regPassword = document.getElementById("regPassword")?.value;
      console.log(":)", registerUserName);
      console.log(":)", regPassword);
      const rD = {
        username: registerUserName,
        password: regPassword,
        isManager: true,
      } as IRegData;
      const response = await axios.post(
        "https://localhost:8080/api/Auth/register",
        rD
      );

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  async function loginUser() {
    try {
      const loginUserName = document.getElementById("loginUserName")?.value;
      const loginPassword = document.getElementById("loginPassword")?.value;
      console.log(":)", loginUserName);
      console.log(":)", loginPassword);
      const rD = {
        username: loginUserName,
        password: loginPassword,
        isManager: true,
      } as IRegData;

      const response = await axios.post(
        "https://localhost:8080/api/Auth/login",
        rD
      );

      console.log(response);
      localStorage.setItem("amazingToken", response.data.token);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main>
      <h1>This is next.js frontend for Village application</h1>
      <div>
        <h3>Register</h3>
        <h4>UserName</h4> <input type="text" id="registerUserName" />
        <h4>Password</h4> <input type="text" id="regPassword" />
        <button onClick={registerUser}>register</button>
      </div>
      <br />
      <div>
        <h3>Login</h3>
        <h4>UserName</h4> <input type="text" id="loginUserName" />
        <h4>Password</h4> <input type="text" id="loginPassword" />
        <button onClick={loginUser}>login</button>
        <br />
      </div>
      <button onClick={() => console.log(localStorage)}>
        console.log logalStorage
      </button>
      <br />
      <button onClick={() => localStorage.removeItem("amazingToken")}>
        remove token from localStorage
      </button>
      <br />
      <br />
      <br />
      <br />
      {!loadingForAllHouses ? (
        <Skeleton variant="text" width={600} height={400}>
          This is the place where we put amazing loading thingy!
        </Skeleton>
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="right">Number</TableCell>
                <TableCell align="right">Street</TableCell>
                <TableCell align="right">City</TableCell>
                <TableCell align="right">Country</TableCell>
                <TableCell align="right">Post Code</TableCell>
                <TableCell align="right">Link</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allHouses.map((oneHouse) => tableRow(oneHouse))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <br />
    </main>
  );
}

function tableRow(oneHouse: IHouse) {
  return (
    <TableRow
      key={oneHouse?.id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {oneHouse.id}
      </TableCell>
      <TableCell align="right">{oneHouse?.number}</TableCell>
      <TableCell align="right">{oneHouse?.street}</TableCell>
      <TableCell align="right">{oneHouse?.city}</TableCell>
      <TableCell align="right">{oneHouse?.country}</TableCell>
      <TableCell align="right">{oneHouse?.postcode}</TableCell>
      <TableCell align="right">
        {" "}
        <a
          href={`/house/${oneHouse.id}`}
          className="mt-1 px-1 py-1 bg-blue-400 hover:bg-blue-700 text-white rounded-full"
        >
          View
        </a>
      </TableCell>
    </TableRow>
  );
}
