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
  // const [randomItem1, setRandomItem1] = useState([]);
  const champion2 = useCreateChampion2();
  const data1 = useGetChampionDatabase1();
  const data2 = useGetChampionDatabase2();
  const delete_data_1 = useDeleteChampion1();
  const delete_data_2 = useDeleteChampion2();
  const h = [];
  const item_depth_4 = [];
  const item_depth_3 = [];
  const boots = ["3009", "3020", "3158", "3111", "3006", "3047"];

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
    return (
      <div>
        <Skeleton />
      </div>
    );
  }
  if (res.isSuccess) {
    h.push(res.data);
  }
  for (let i in h[0]) {
    if (
      i != 7007 &&
      h[0][i].depth == 4 &&
      h[0][i].maps[12] &&
      i != 7008 &&
      h[0][i].depth == 4 &&
      h[0][i].maps[12]
    ) {
      item_depth_4.push({
        img: `https://ddragon.leagueoflegends.com/cdn/13.10.1/img/item/${i}.png`,
        depth: `${h[0][i].depth}`,
      });
    } else if (
      i != 3031 &&
      i != 7031 &&
      h[0][i].depth == 3 &&
      h[0][i].maps[12] &&
      !h[0][i]["into"]
    ) {
      item_depth_3.push({
        img: `https://ddragon.leagueoflegends.com/cdn/13.10.1/img/item/${i}.png`,
        depth: `${h[0][i].depth}`,
      });
    }
  }
  console.log(item_depth_3);
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
    const randomChampion_1 = [];

    while (randomChampion_1.length < 14) {
      const randomChampion = Math.floor(Math.random() * a.length);
      if (!randomChampion_1.includes(randomChampion)) {
        randomChampion_1.push(randomChampion);
        const finalItem = [];

        for (let i = 0; i < 3; i++) {
          const randomBoost = Math.floor(Math.random() * boots.length);
          const randomItem = Math.floor(Math.random() * item_depth_4.length);
          let numbers = [];
          const itemDepth3_1 = [];
          while (numbers.length < 4) {
            const randomNumber = Math.floor(
              Math.random() * item_depth_3.length
            );
            if (!numbers.includes(randomNumber)) {
              // console.log(randomNumber);
              numbers.push(randomNumber);
              itemDepth3_1.push(item_depth_3[randomNumber]);
            }
          }
          finalItem.push({
            item1: item_depth_4[randomItem],
            item2: itemDepth3_1,
            item3: boots[randomBoost],
          });
        }

        const lol_1 = {
          champion: a[randomChampion].champion,
          img: a[randomChampion].img,
          item_1: finalItem[0].item1.img,
          item_2: finalItem[0].item2[0].img,
          item_3: finalItem[0].item2[1].img,
          item_4: finalItem[0].item2[2].img,
          item_5: finalItem[0].item2[3].img,
          item_6: `https://ddragon.leagueoflegends.com/cdn/13.10.1/img/item/${finalItem[0].item3}.png`,
          item_7: finalItem[1].item1.img,
          item_8: finalItem[1].item2[0].img,
          item_9: finalItem[1].item2[1].img,
          item_10: finalItem[1].item2[2].img,
          item_11: finalItem[1].item2[3].img,
          item_12: `https://ddragon.leagueoflegends.com/cdn/13.10.1/img/item/${finalItem[1].item3}.png`,
          item_13: finalItem[2].item1.img,
          item_14: finalItem[2].item2[0].img,
          item_15: finalItem[2].item2[1].img,
          item_16: finalItem[2].item2[2].img,
          item_17: finalItem[2].item2[3].img,
          item_18: `https://ddragon.leagueoflegends.com/cdn/13.10.1/img/item/${finalItem[2].item3}.png`,
        };
        await champion1.mutate(lol_1);
      }
    }
    // setRandomItem1(itemRandom1);
    setClick1(true);
  };
  const handleClickDelete1 = (e) => {
    delete_data_1.mutate();
  };

  const handleClickRandom2 = async (e) => {
    if (click2 === true) {
      await delete_data_2.mutate();
    }
    const randomChampion_2 = [];
    while (randomChampion_2.length < 14) {
      const random_2 = Math.floor(Math.random() * a.length);
      if (!randomChampion_2.includes(random_2)) {
        randomChampion_2.push(random_2);
        const randomChampion = Math.floor(Math.random() * a.length);
        const finalItem = [];
        // console.log(randomBoost);
        for (let i = 0; i < 3; i++) {
          const randomBoost = Math.floor(Math.random() * boots.length);
          const randomItem = Math.floor(Math.random() * item_depth_4.length);
          let numbers = [];
          const itemDepth3_1 = [];
          while (numbers.length < 4) {
            const randomNumber = Math.floor(
              Math.random() * item_depth_3.length
            );
            if (!numbers.includes(randomNumber)) {
              // console.log(randomNumber);
              numbers.push(randomNumber);
              itemDepth3_1.push(item_depth_3[randomNumber]);
            }
          }
          finalItem.push({
            item1: item_depth_4[randomItem],
            item2: itemDepth3_1,
            item3: boots[randomBoost],
          });
        }
        const lol_2 = {
          champion: a[random_2].champion,
          img: a[random_2].img,
          item_1: finalItem[0].item1.img,
          item_2: finalItem[0].item2[0].img,
          item_3: finalItem[0].item2[1].img,
          item_4: finalItem[0].item2[2].img,
          item_5: finalItem[0].item2[3].img,
          item_6: `https://ddragon.leagueoflegends.com/cdn/13.10.1/img/item/${finalItem[0].item3}.png`,
          item_7: finalItem[1].item1.img,
          item_8: finalItem[1].item2[0].img,
          item_9: finalItem[1].item2[1].img,
          item_10: finalItem[1].item2[2].img,
          item_11: finalItem[1].item2[3].img,
          item_12: `https://ddragon.leagueoflegends.com/cdn/13.10.1/img/item/${finalItem[1].item3}.png`,
          item_13: finalItem[2].item1.img,
          item_14: finalItem[2].item2[0].img,
          item_15: finalItem[2].item2[1].img,
          item_16: finalItem[2].item2[2].img,
          item_17: finalItem[2].item2[3].img,
          item_18: `https://ddragon.leagueoflegends.com/cdn/13.10.1/img/item/${finalItem[2].item3}.png`,
        };
        await champion2.mutate(lol_2);
      }
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
  // if (data1.isSuccess) {
  // }
  // console.log(data1.data);
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
  // if (data1.data.length == 14) {
  //   let h = [];
  //   for (let i = 0; i < randomItem1.length; i++) {
  //     h.push(randomItem1[i]);
  //     console.log(h);
  //     if (h.length == 2) {
  //       data1.data = data1.data.map((i) => ({ ...i, order: h }));
  //       h = [];
  //     }
  //   }
  //   console.log(data1.data);
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
            <Button type="primary" onClick={handleClickDelete1}>
              Delete
            </Button>
          </Header>

          {data1.data.length > 0 &&
            data1.data.map((i) => <Match i={i} key={i.id} />)}
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
          {data2.data.length > 0 &&
            data2.data.map((i) => <Match i={i} key={i.id} />)}
        </Row>
      </Wrapper>
    </Container>
  );
};

export default App;
