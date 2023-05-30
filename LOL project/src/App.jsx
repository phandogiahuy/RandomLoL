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
import { useGetItemFromApi } from "./hooks/queries/useGetItemFromApi";

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
  const res = useGetItemFromApi();
  const champion1 = useCreateChampion1();
  const [click1, setClick1] = useState(false);
  const [click2, setClick2] = useState(false);

  const champion2 = useCreateChampion2();
  const data1 = useGetChampionDatabase1();
  const data2 = useGetChampionDatabase2();
  const delete_data_1 = useDeleteChampion1();
  const delete_data_2 = useDeleteChampion2();
  const h = [];
  const item_depth_4 = [];
  const item_depth_3 = [];
  const boots = ["3009", "3020", "3117", "3158", "3111", "3006", "3047"];
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
  if (res.isLoading) {
    return <div>...loading</div>;
  }
  if (res.isSuccess) {
    h.push(res.data);
  }
  for (let i in h[0]) {
    if (h[0][i].depth == 4 && h[0][i].maps[12]) {
      item_depth_4.push({
        img: `https://ddragon.leagueoflegends.com/cdn/13.10.1/img/item/${i}.png`,
        depth: `${h[0][i].depth}`,
      });
      // console.log(h[0][i]);
    } else if (h[0][i].depth == 3 && h[0][i].maps[12]) {
      item_depth_3.push({
        img: `https://ddragon.leagueoflegends.com/cdn/13.10.1/img/item/${i}.png`,
        depth: `${h[0][i].depth}`,
      });
    }
  }
  // const h = [];
  // if (res.isLoading) {
  //   return <div>...loading</div>;
  // } else if (res.isSuccess) {
  //   for (let i = 1001; i < 3067; i++) {
  //     h.push({ img: res.data.data[i] });
  //   }
  // }
  // console.log(h);
  // if (res.isSuccess) {
  //   for (let i = 0; i < res.data.data.length; i++) {
  //   }
  // }

  const handleClickRandom1 = async (e) => {
    if (click1 === true) {
      await delete_data_1.mutate();
    }
    // const random_item_2 = [];
    // const random_boost = [];
    for (let i = 0; i < 15; i++) {
      const numbers = [];
      const itemChamp = [];
      const itemChamp_2 = [];

      const randomChampion = Math.floor(Math.random() * a.length) + 1;
      const randomItem = Math.floor(Math.random() * item_depth_4.length) + 1;
      const randomBoost = Math.floor(Math.random() * boots.length) + 1;

      while (numbers.length < 4) {
        const randomNumber =
          Math.floor(Math.random() * item_depth_3.length) + 1;

        if (!numbers.includes(randomNumber)) {
          numbers.push(randomNumber);
          itemChamp_2.push(item_depth_3[randomNumber]);
        }
      }
      itemChamp.push({
        item1: item_depth_4[randomItem],
        item2: itemChamp_2,
        item3: boots[randomBoost],
      });
      // console.log(itemChamp);
      await champion1.mutate(a[randomChampion]);
    }
    setClick1(true);
  };
  const handleClickDelete1 = (e) => {
    delete_data_1.mutate();
  };

  const handleClickRandom2 = async (e) => {
    if (click2 === true) {
      await delete_data_2.mutate();
    }
    for (let i = 0; i < 15; i++) {
      const randomNum = Math.floor(Math.random() * a.length) + 1;
      await champion2.mutate(a[randomNum]);
    }
    setClick2(true);
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
