import React from "react";
import styled from "styled-components";

const TableAssets = () => {
  return (
    <TableAssetsStyled>
      <tr>
        <th className="thNul"></th>
        <th className="king">King</th>
        <th className="princess">Princess</th>
        <th className="queen">Queen</th>
      </tr>
      <tr>
        <td class="stats">Sexe:</td>
        <td>male</td>
        <td>female</td>
        <td>female</td>
      </tr>
      <tr>
        <td class="stats">Years:</td>
        <td>63</td>
        <td>25</td>
        <td>61</td>
      </tr>
      <tr>
        <td class="stats">QI:</td>
        <td>102</td>
        <td>89</td>
        <td>108</td>
      </tr>
      <tr>
        <td class="stats">Size:</td>
        <td>1.92</td>
        <td>1.70</td>
        <td>1.64</td>
      </tr>
    </TableAssetsStyled>
  );
};

const TableAssetsStyled = styled.table`
  color: white;

  th {
    border: 2px solid white;
    padding: 5px 15px 5px 15px;
    font-size: 18px;
    &:hover {
      transform: scale(1.1);
    }
  }

  .king {
    color: yellow;
  }

  .princess {
    color: pink;
  }

  .queen {
    color: red;
  }

  .thNul {
    border: none;
  }

  .stats {
    border: 2px solid grey;
    padding: 2px 10px 2px 5px;
    text-align: start;
  }

  td {
    border: 1px solid white;
    text-align: center;
    padding: 2px 10px 2px 10px;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

export default TableAssets;
