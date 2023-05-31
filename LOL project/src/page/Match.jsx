import { Card, Col, Image, Row } from "antd";

export const Match = ({ i }) => {
  // const players = Array.from({ length: 10 }, (_, i) => `Player ${i + 1}`);

  return (
    <Col span={12} style={{ padding: 5, display: "flex" }}>
      <div style={{ width: "40%" }}>
        <Image src={i.img} style={{ width: "100%", height: "100%" }} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "60%",
          marginLeft: "5px",
        }}
      >
        <div style={{ display: "flex", width: "100%" }}>
          <img
            src={i.item_1}
            style={{ width: "25%", height: "60%", padding: "2px" }}
          />
          <img
            src={i.item_2}
            style={{ width: "25%", height: "60%", padding: "2px" }}
          />
          <img
            src={i.item_3}
            style={{ width: "25%", height: "60%", padding: "2px" }}
          />
          <img
            src={i.item_4}
            style={{ width: "25%", height: "60%", padding: "2px" }}
          />
          <img
            src={i.item_5}
            style={{ width: "25%", height: "60%", padding: "2px" }}
          />
          <img
            src={i.item_6}
            style={{ width: "25%", height: "60%", padding: "5px" }}
          />
        </div>
      </div>
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
// <div style={{ display: "flex", width: "100%" }}>
// <img src={i.order[0][0]} style={{ width: "25%", height: "60%" }} />
// <img src={i.order[0][2][0]} style={{ width: "25%", height: "60%" }} />
// <img src={i.order[0][2][1]} style={{ width: "25%", height: "60%" }} />
// <img src={i.order[0][2][2]} style={{ width: "25%", height: "60%" }} />
// <img src={i.order[0][2][3]} style={{ width: "25%", height: "60%" }} />
// <img src={i.order[0][1]} style={{ width: "25%", height: "60%" }} />
// </div>

// <div style={{ display: "flex", width: "100%" }}>
// <img src={i.order[1][0]} style={{ width: "25%", height: "60%" }} />
// <img src={i.order[1][2][0]} style={{ width: "25%", height: "60%" }} />
// <img src={i.order[1][2][1]} style={{ width: "25%", height: "60%" }} />
// <img src={i.order[1][2][2]} style={{ width: "25%", height: "60%" }} />
// <img src={i.order[1][2][3]} style={{ width: "25%", height: "60%" }} />
// <img src={i.order[1][1]} style={{ width: "25%", height: "60%" }} />
// </div>
