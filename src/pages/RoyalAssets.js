import React from "react";
import styled from "styled-components";
import TableAssets from "../components/royalassets/TableAssets";
import Title from "../ui-reusable/Title";

const RoyalAssets = () => {
  return (
    <RoyalAssetsStyled>
      <Title text={`"Royal Assets"`} />
      <TableAssets />
    </RoyalAssetsStyled>
  );
};

const RoyalAssetsStyled = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default RoyalAssets;
