import axios from "axios";
import { useQuery } from "react-query";

import {
  GET_CHAMPION,
  GET_CHAMPION_FROM_DATABASE,
} from "../../constant/queryKey";

const getChampDatabase = async () => {
  const { data } = await axios.get(`http://localhost:5000/champion/`);
  return data;
};
const useGetChampionDatabase = () =>
  useQuery([GET_CHAMPION_FROM_DATABASE], getChampDatabase);
export { useGetChampionDatabase };
