import axios from "axios";

export const axiosSec = axios.create({
  baseURL: "http://localhost:5000",
});
const useAxiosSec = () => {
  return axiosSec;
};

export default useAxiosSec;
