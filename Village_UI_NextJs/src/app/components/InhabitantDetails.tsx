import "./../styles/globals.css";
import axios from "axios";
import { useRouter } from "next/router";
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

const OneInhabitantDetails = () => {
  const router = useRouter();
  const { inhabitantId: inhabitantId } = router.query; // Access the IHouse ID from the route parameter
  const [oneInhabitant, setOneInhabitant] = useState<IInhabitant | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const locStorToken = localStorage.getItem("amazingToken");
        const response = await axios.get(
          `https://localhost:8080/api/inhabitant/${inhabitantId}`,
          {
            headers: {
              Authorization: `Bearer ${locStorToken}`,
            },
          }
        );

        setOneInhabitant(response?.data);
      } catch (error) {
        console.error("Error fetching Inhabitant", error);
      }
    };

    fetchData();
  }, [inhabitantId]);

  return (
    <>
      <h2>Id: {oneInhabitant?.id}</h2>
      <h2>Name: {oneInhabitant?.name}</h2>
      <h2>Lastname: {oneInhabitant?.lastname}</h2>
      <h2>Personal code: {oneInhabitant?.personalCode}</h2>
      <h2>Date of Birth: {oneInhabitant?.dateOfBirth}</h2>
      <h2>Phone: {oneInhabitant?.phone}</h2>
      <h2>Email: {oneInhabitant?.email}</h2>
      <h2>Id of Aparment: {oneInhabitant?.idOfApartment}</h2>
      <h2>Is Owner: {`${oneInhabitant?.isOwner}`}</h2>
    </>
  );
};

export default OneInhabitantDetails;
