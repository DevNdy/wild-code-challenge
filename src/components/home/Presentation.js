import React from "react";
import styled from "styled-components";

const Presentation = () => {
  return (
    <PresentationStyled>
      <h4>Lorem ipsum dolor sit amet:</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores exercitationem pariatur
        veniam molestiae ratione, deleniti voluptate cupiditate consectetur aliquid architecto nulla
        enim ea necessitatibus nam non assumenda quod! Aliquid sed voluptatem odio, consequatur enim
        laborum distinctio, quasi doloribus eum mollitia facilis culpa fugit, atque eos ea quibusdam
        magni praesentium doloremque at esse dignissimos quo blanditiis fuga. Sint voluptates qui
        dolorem debitis numquam suscipit? Debitis, perferendis voluptate. Minima corporis dolorum,
        rerum minus labore sunt dignissimos nobis numquam animi? Cupiditate aperiam facilis nesciunt
        quos aliquid repudiandae necessitatibus ut sequi qui! Labore, optio et maiores vitae
        accusamus eos similique provident quae neque dolorum veniam magnam distinctio sapiente
        possimus blanditiis laborum laboriosam at? Animi fugit magnam quis voluptate sit molestias
        optio molestiae minus, dolorem, nemo, explicabo assumenda esse dolor aliquam iure vel ab
        reprehenderit. Placeat tenetur autem ab alias? Quibusdam modi harum dolorum dignissimos
        magnam ut. Sit repellat ab consequuntur perferendis. Nihil, dolor distinctio.
      </p>
    </PresentationStyled>
  );
};

const PresentationStyled = styled.article`
  width: 50%;
  h4 {
    color: black;
    opacity: 0.7;
    font-size: 20px;
    &:hover {
      opacity: 1;
    }
  }
  p {
    color: #d1d0c5;
    &:hover {
      color: white;
    }
  }
`;

export default Presentation;
