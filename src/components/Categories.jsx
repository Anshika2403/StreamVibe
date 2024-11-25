import React from "react";
import Heading from "./Heading";
import { Container } from "postcss";

function Categories() {
  return (
    <div>
      <Container>
        <Heading
          hcont={"Explore our wide variety of categories"}
          pcont={
            "Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
          }
        ></Heading>
      </Container>
    </div>
  );
}

export default Categories;
