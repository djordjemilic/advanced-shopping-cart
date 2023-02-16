import React from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { Stack, Button } from "react-bootstrap";
import { formatCurrency } from "../utils/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <Stack gap={2} direction="horizontal" className="d-flex align-items-center">
      <img
        src={item.imgUrl}
        style={{ width: "125px", height: "72px", objectFit: "contain" }}
        alt="book"
      />
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span style={{ fontSize: ".65rem" }} className="text-muted">
              {quantity}x
            </span>
          )}
        </div>
        <div className="text-muted mt-2" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div>{formatCurrency(item.price * quantity)}</div>
      <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item.id)}>
        &times;
      </Button>
    </Stack>
  );
};

export default CartItem;
