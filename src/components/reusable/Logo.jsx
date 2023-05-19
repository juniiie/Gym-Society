import React from "react";
import { GiGymBag } from "react-icons/gi";
import styled from "styled-components";
import GymLogo from "../../assets/gymsociety.png";

export default function Logo() {
  return (
    <Box>
      {/* <img src={GymLogo} alt="gymlogo" /> */}
      <GymSociety src={GymLogo} />

      {/* <Title>GYM SOCIETY</Title> */}
    </Box>
  );
}

const Box = styled.div`
  align-items: center;
`;

const Title = styled.p`
  font-size: 36px;
  color: white;
`;

const GymSociety = styled.img`
  width: auto;
  height: calc(2rem + 3vh);
  margin: 5px;
`;
