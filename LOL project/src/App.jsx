import { Card, Row, Col, Button, Divider, Skeleton } from "antd";

import "./App.css";
import axios from "axios";
import { useGetChampion } from "./hooks/queries/useGetChampion";
import { useEffect, useState } from "react";
import {
  useCreateChampion1,
  useCreateChampion2,
} from "./hooks/mutation/useCreateChampion";
import {
  useGetChampionDatabase1,
  useGetChampionDatabase2,
} from "./hooks/queries/useGetChampionFromDatabase";
import { Match } from "./page/Match";
import styled from "styled-components";
import {
  useDeleteChampion1,
  useDeleteChampion2,
} from "./hooks/mutation/useDeleteChampion";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Wrapper = styled.div`
  flex: 200;
  display: flex;
  flex-direction: column;
`;
const Header = styled.div`
  width: 100%;
`;

const App = () => {
  // const [champions1, setChampion1] = useState([]);
  // const [champions2, setChampion2] = useState([]);

  const a = [];
  const { isLoading, data } = useGetChampion();

  // const champion1 = useCreateChampion1();
  // const [click1, setClick1] = useState(false);
  // const [click2, setClick2] = useState(false);

  const [champion1, setChampion1] = useState([]);
  const [champion2, setChampion2] = useState([]);

  // const champion2 = useCreateChampion2();
  // const data1 = useGetChampionDatabase1();
  // const data2 = useGetChampionDatabase2();
  // const delete_data_1 = useDeleteChampion1();
  // const delete_data_2 = useDeleteChampion2();

  if (isLoading)
    return (
      <div>
        <Skeleton />
      </div>
    );
  for (let i in data.data) {
    a.push({
      champion: i,
      img: `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${i}_0.jpg?fbclid=IwAR0C__ZgHbDwxEsy6JLGPTOB_gsZkPL8bapr1NoCgLM4bcciirBrRaW_zws`,
    });
  }
  const x = [];
  const handleClickRandom1 = async (e) => {
    // if (click1 === true) {
    //   await delete_data_1.mutate();
    // }

    for (let i = 0; i < 15; i++) {
      const randomNum = Math.floor(Math.random() * a.length) + 1;
      x.push(a[randomNum]);
      // await champion1.mutate(a[randomNum]);
    }
    setChampion1(x);
    // setClick1(true);
  };
  // const handleClickDelete1 = (e) => {
  //   delete_data_1.mutate();
  // };
  const y = [];
  const handleClickRandom2 = async (e) => {
    // if (click2 === true) {
    //   await delete_data_2.mutate();
    // }
    for (let i = 0; i < 15; i++) {
      const randomNum = Math.floor(Math.random() * a.length) + 1;
      y.push(a[randomNum]);
      // await champion2.mutate(a[randomNum]);
    }
    setChampion2(y);
  };

  // const handleClickDelete2 = (e) => {
  //   delete_data_2.mutate();
  // };

  // if (data1.isLoading) {
  //   return (
  //     <div>
  //       <Skeleton />
  //     </div>
  //   );
  // }
  // if (data2.isLoading) {
  //   return (
  //     <div>
  //       <Skeleton />
  //     </div>
  //   );
  // }
  return (
    <Container>
      <Wrapper>
        <Row style={{ display: "flex", justifyContent: "center" }}>
          <Header>
            <Button type="primary" onClick={handleClickRandom1}>
              Random Champion
            </Button>
            <h1>Anh Thành </h1>
          </Header>
          {champion1.map((i) => (
            <Match i={i} key={i} />
          ))}
        </Row>
      </Wrapper>
      <div style={{ flex: 1, backgroundColor: "black" }}></div>
      <Wrapper>
        <Row style={{ display: "flex", justifyContent: "center" }}>
          <Header>
            <Button type="primary" onClick={handleClickRandom2}>
              Random Champion
            </Button>
            <h1>Anh Tùng </h1>
          </Header>
          {champion2.map((i) => (
            <Match i={i} key={i} />
          ))}
        </Row>
      </Wrapper>
    </Container>
  );
};

export default App;

// <Button type="primary" onClick={handleClickDelete1}>
// Delete
// </Button>

// <Button type="primary" onClick={handleClickDelete2}>
// Delete
// </Button>
