import "./../styles/globals.css";
import axios from "axios";
import { useEffect, useState } from "react";
// ---- Material UI
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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

  async function handleDeleteTheThing(apartmId: string) {
    const continueDeleting = confirm(`Do You Want To Delete Aprtm ${apartmId}`);
    if (continueDeleting) {
      try {
        const locStorToken = localStorage.getItem("amazingToken");
        await axios.delete(
          `https://localhost:8080/api/apartment/del-apartment-houseapartment/${apartmId}`,
          {
            headers: {
              Authorization: `Bearer ${locStorToken}`,
            },
          }
        );
        window.location.reload();
      } catch (error) {
        console.log("Failed to delete data", error);
      }
    }
  }

  return (
    <>
      <h1>Hello these are special Apartaments with House id!!! - {id}</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Number</TableCell>
              <TableCell align="right">Floor</TableCell>
              <TableCell align="right">Number Of Rooms</TableCell>
              <TableCell align="right">Population</TableCell>
              <TableCell align="right">Full Area</TableCell>
              <TableCell align="right">Living Space</TableCell>
              <TableCell align="right">Delete?</TableCell>
              <TableCell align="right">Link</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {specialApartments.map((oneApartment) =>
              tableRow(oneApartment, handleDeleteTheThing)
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <br />
    </>
  );
}

function tableRow(oneApartment: IApartment, handleDeleteTheThing: any) {
  return (
    <TableRow
      key={oneApartment?.id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {oneApartment.id}
      </TableCell>
      <TableCell align="right">{oneApartment?.number}</TableCell>
      <TableCell align="right">{oneApartment?.floor}</TableCell>
      <TableCell align="right">{oneApartment?.numberOfRooms}</TableCell>
      <TableCell align="right">{oneApartment?.population}</TableCell>
      <TableCell align="right">{oneApartment?.fullArea}</TableCell>
      <TableCell align="right">{oneApartment?.livingSpace}</TableCell>
      <TableCell
        align="right"
        onClick={() => {
          handleDeleteTheThing(oneApartment?.id);
          console.log(`DELETED ${oneApartment?.id}`);
        }}
      >
        <h1 className="bg-red-300 hover:cursor-pointer">Delete</h1>
      </TableCell>
      <TableCell align="right">
        <a
          href={`/apartment/${oneApartment.id}`}
          className="mt-1 px-1 py-1 bg-blue-400 hover:bg-blue-700 text-white rounded-full"
        >
          View
        </a>
      </TableCell>
    </TableRow>
  );
}
