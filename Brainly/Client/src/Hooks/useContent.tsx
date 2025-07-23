import { useEffect, useState } from "react";
import { axiosInstance } from "../utils/AxiosInstance";

const useContent = () => {
  const [contents, setContents] = useState([]);

  const fetchData = async () => {
    const { data } = await axiosInstance.get("/content/bulk");
    setContents(data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return contents;
};

export default useContent;
