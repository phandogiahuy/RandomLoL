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

  const champion1 = useCreateChampion1();

  const champion2 = useCreateChampion2();
  const data1 = useGetChampionDatabase1();
  const data2 = useGetChampionDatabase2();
  const delete_data_1 = useDeleteChampion1();
  const delete_data_2 = useDeleteChampion2();

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

  const handleClickRandom1 = (e) => {
    for (let i = 0; i < 15; i++) {
      const randomNum = Math.floor(Math.random() * a.length) + 1;
      // x.push(a[randomNum]);
      champion1.mutate(a[randomNum]);
    }
    // setChampion1(x);
  };
  const handleClickDelete1 = (e) => {
    delete_data_1.mutate();
  };

  const handleClickRandom2 = (e) => {
    for (let i = 0; i < 15; i++) {
      const randomNum = Math.floor(Math.random() * a.length) + 1;
      // x.push(a[randomNum]);
      // mutate(a[randomNum]);
      champion2.mutate(a[randomNum]);
    }
  };
  const handleClickDelete2 = (e) => {
    delete_data_2.mutate();
  };

  if (data1.isLoading) {
    return (
      <div>
        <Skeleton />
      </div>
    );
  }
  if (data2.isLoading) {
    return (
      <div>
        <Skeleton />
      </div>
    );
  }
  return (
    <Container>
      <Wrapper>
        <Row style={{ display: "flex", justifyContent: "center" }}>
          <Header>
            <Button type="primary" onClick={handleClickRandom1}>
              Random Champion
            </Button>
            <h1>Anh Thành </h1>
            <Button type="primary" onClick={handleClickDelete1}>
              Delete
            </Button>
          </Header>
          {data1.data.map((i) => (
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
            <Button type="primary" onClick={handleClickDelete2}>
              Delete
            </Button>
          </Header>
          {data2.data.map((i) => (
            <Match i={i} key={i} />
          ))}
        </Row>
      </Wrapper>
    </Container>
  );
};

export default App;
