import { useMutation, useQueryClient } from "react-query";

import { message } from "antd";
import axios from "axios";
import { GET_CHAMPION_FROM_DATABASE } from "../../constant/queryKey";
const postChampion = async ({ champion, img }) => {
  const { data } = await axios.post(`http://localhost:5000/champion/`, {
    champion,
    img,
  });
  return data;
};
const useCreateChampion = () => {
  const queryClient = useQueryClient();

  return useMutation(postChampion, {
    onSuccess: (data) => {
      queryClient.invalidateQueries([GET_CHAMPION_FROM_DATABASE]);
    },
    onError: (e) => {
      message.error(e.response.data);
    },
  });
};
export { useCreateChampion };
