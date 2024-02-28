import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface IHouse {
  id: number;
  number: number;
  street: string;
  city: string;
  country: string;
  postcode: string;
}

const OneHouseDetails = () => {
  const router = useRouter();
  const { houseId: houseId } = router.query; // Access the IHouse ID from the route parameter
  const [oneHouse, setOneHouse] = useState<IHouse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token =
          "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoia3Jpc3RhcHMiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJNYW5hZ2VyIiwiZXhwIjoxNzA5MjI2Mzk4fQ.uesjJgko9ETBdLmX4NgSlGQyO-NuXrRvEmHhlZQ3Z5lKdCvgsVZT0yOFkk-ghvKBB-qouAoR8qkV3mtNYW-Hpg";
        const response = await axios.get(
          `https://localhost:8080/api/house/${houseId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setOneHouse(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    console.log(oneHouse);

    // Cleanup function
    return () => {
      // Any cleanup code if needed
    };

    // if (houseId) {
    //   Agent.Catalog.details(Number(oneCarStatisticId))
    //     .then((data: CarStatistic) => {
    //       const idToFind = Number(oneCarStatisticId);
    //       const foundOneCarStatistic = data.id == idToFind;
    //       if (foundOneCarStatistic) {
    //         setOneCarStatistic(data);
    //       } else {
    //         console.error("No CarStatistic data found.");
    //       }
    //     })
    //     .catch((error) =>
    //       console.error("Error fetching CarStatistic data:", error)
    //     )
    //     .finally(() => {
    //       setLoading(false);
    //     });
    // }
  }, [houseId]);

  return (
    <>
      <h1>{oneHouse?.id}</h1>
      <h1>{oneHouse?.country}</h1>
      <h1>{oneHouse?.postcode}</h1>
    </>
  );
};

export default OneHouseDetails;
