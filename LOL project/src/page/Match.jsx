import { Card, Col, Image, Row } from "antd";

export const Match = ({ i }) => {
  // const players = Array.from({ length: 10 }, (_, i) => `Player ${i + 1}`);

  return (
    <Col span={5} style={{ padding: 5 }}>
      <Card title={i.champion} style={{ padding: 5, backgroundColor: "beige" }}>
        <Image src={i.img} />
      </Card>
    </Col>
  );
};

// <h1>League of Legends</h1>
// <Row gutter={[16, 16]}>
//   <Col span={6} key={index}>
//     <Card title={player}>
//       <Image src={i.img} />
//       <div>infor</div>
//     </Card>
//   </Col>
// </Row>
