import axios from "axios";
import { useEffect, useState } from "react";

interface IInhabitant {
  id: string;
  name: string;
  lastname: string;
  personalCode: string;
  dateOfBirth: string;
  phone: string;
  email: string;
  idOfApartment: number;
  isOwner: boolean;
}

export default function InhabitantsFilteredByApartmentId({
  id,
}: {
  id: number | undefined;
}) {
  const [filteredInhabitants, setFilteredInhabitants] = useState<IInhabitant[]>(
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tokenFromLocalStorage = localStorage.getItem("amazingToken");
        const response = await axios.get(
          `https://localhost:8080/api/inhabitant/apartment/${id}`,
          {
            headers: {
              Authorization: `Bearer ${tokenFromLocalStorage}`,
            },
          }
        );

        setFilteredInhabitants(response?.data);
      } catch (error) {
        console.error("Problems with fetching filtered Inhabitants", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      <h1>
        Hello these are special (filtered) Inhabitants with Apartment id!!! -{" "}
        {id}
      </h1>

      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Lastname</th>
            <th>Personal Code</th>
            <th>Date of Birth</th>
            <th>Phone</th>
            <th>E-mail</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {filteredInhabitants.map((oneInhabitant) => {
            return (
              <tr key={oneInhabitant.id} style={{ textAlign: "center" }}>
                <td>{oneInhabitant.id}</td>
                <td>{oneInhabitant.name}</td>
                <td>{oneInhabitant.lastname}</td>
                <td>{oneInhabitant.personalCode}</td>
                <td>{oneInhabitant.dateOfBirth}</td>
                <td>{oneInhabitant.phone}</td>
                <td>{oneInhabitant.email}</td>
                <td style={{ textAlign: "center" }}>
                  <a
                    href={`/inhabitant/${oneInhabitant.id}`}
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
