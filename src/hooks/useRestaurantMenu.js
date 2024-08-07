import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";

// Abstraction
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  const fetchData = async () => {
    try {
      let url = MENU_URL(resId);
      const data = await fetch(url);
      const json = await data.json();

      // Optional Chaining
      setResInfo(json?.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  // Fetch Data
  useEffect(() => {
    fetchData();
  }, []);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     console.log("React");
  //   }, 1000);

  //   // Unmounting Phase
  //   return () => {
  //     clearInterval(timer);
  //   };
  //   // Unmounting Phase
  // }, []);

  return resInfo;
};

export default useRestaurantMenu;
