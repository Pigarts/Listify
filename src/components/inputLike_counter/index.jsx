import React, { useState } from "react";
import { Container, Content } from "./styles.js"
import { Counter } from "../counter/index.jsx";

  export function InputLike_counter({title, icon: Icon}) {
    const [foodsValue, setFoodsValue] = useState(0);
    function handleFoodsValueChange(newValue) {
      setFoodsValue(newValue);
    }
    return (
    <Content>
      <span>{title}</span>
      <Container>
      <Counter foods={foodsValue} onFoodsChange={handleFoodsValueChange}/>  
      {Icon && <Icon size={20} />}
      </Container>
    </Content>
  );
}
