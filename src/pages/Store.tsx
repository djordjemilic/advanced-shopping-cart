import StoreItem from "../components/StoreItem";
import storeItems from "../data/items.json";
import { Row, Col } from "react-bootstrap";

const Store = () => {
  return (
    <>
      <div>Store</div>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item, i) => (
          <Col key={i}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;
