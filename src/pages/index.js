import { useQuery } from "@apollo/client";
import { GET_HOME_PAGE_DATA } from "@/GraphQL/queries/HomePage";
import { useState } from "react";
import Carousel from "@/components/Carousel";
import ComingSoon from "@/components/ComingSoon";
export default function Home() {
  const [homeData, setHomeData] = useState();
  const { loading, error, data } = useQuery(GET_HOME_PAGE_DATA, {
    fetchPolicy: "network-only",
    onCompleted: (homeData) => {
      const {
        home: {
          data: { attributes },
        },
      } = homeData;
      setHomeData(attributes);
    },
  });
  return (
    <>
      <ComingSoon />
    </>
  );
}
