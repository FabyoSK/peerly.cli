import React from "react";
import { Box, Text } from "ink";

interface Props {
  title: string;
}

const Header: React.FC<Props> = ({ title }) => {
  return (
    <Box>
      <Text>
        <Text bold color="blue">
          {title}
        </Text>
      </Text>
      {/* <Gradient name="pastel"> */}
        {/* <BigText text={title} /> */}
      {/* </Gradient> */}
    </Box>
  );
};

export default Header;
