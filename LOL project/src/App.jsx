import { Card, Row, Col, Button, Divider } from "antd";

import "./App.css";
import axios from "axios";
import { useGetChampion } from "./hooks/queries/useGetChampion";
import { useEffect, useState } from "react";
import { useCreateChampion } from "./hooks/mutation/useCreateChampion";
import { useGetChampionDatabase } from "./hooks/queries/useGetChampionFromDatabase";
import { Match } from "./page/Match";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const Header = styled.div`
  width: 100%;
`;
const Line = styled.div`
  height: 45px;
  width: 0px;
  height: 100%;
  float: left;
  border: 1px inset;
`;
const App = () => {
  const [champions1, setChampion1] = useState([]);
  const [champions2, setChampion2] = useState([]);

  const a = [];
  const { isLoading, data } = useGetChampion();
  if (isLoading) return <div>...loading</div>;
  for (let i in data.data) {
    a.push({
      champion: i,
      img: `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${i}_0.jpg?fbclid=IwAR0C__ZgHbDwxEsy6JLGPTOB_gsZkPL8bapr1NoCgLM4bcciirBrRaW_zws`,
    });
  }

  let x = [];

  // const { mutate } = useCreateChampion();

  const handleClickRandom1 = (e) => {
    for (let i = 0; i < 15; i++) {
      const randomNum = Math.floor(Math.random() * a.length) + 1;
      x.push(a[randomNum]);
      // mutate(a[randomNum]);
    }
    setChampion1(x);
  };
  const handleClickRandom2 = (e) => {
    for (let i = 0; i < 15; i++) {
      const randomNum = Math.floor(Math.random() * a.length) + 1;
      x.push(a[randomNum]);
      // mutate(a[randomNum]);
    }
    setChampion2(x);
  };

  // const res = useGetChampionDatabase();
  // if (res.isLoading) {
  //   return <div>..loading</div>;
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
          {champions1.map((i) => (
            <Match i={i} key={i} />
          ))}
        </Row>
      </Wrapper>
      <Wrapper>
        <Row style={{ display: "flex", justifyContent: "center" }}>
          <Header>
            <Button type="primary" onClick={handleClickRandom2}>
              Random Champion
            </Button>
            <h1>Anh Tùng </h1>
          </Header>
          {champions2.map((i) => (
            <Match i={i} key={i} />
          ))}
        </Row>
      </Wrapper>
    </Container>
  );
};

export default App;
