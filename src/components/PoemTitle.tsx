import { FC } from "react";
import { Text, Box } from "@chakra-ui/react";
import { Title } from "../classes/Title";

const PoemTitle: FC<{ title: String }> = ({ title }) => {
  return (
    <Box>
      <Text isTruncated>{title}</Text>
    </Box>
  );
};
export default PoemTitle;
