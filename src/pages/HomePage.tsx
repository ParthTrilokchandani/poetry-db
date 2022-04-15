import {
  Input,
  InputGroup,
  InputRightElement,
  Flex,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import Title from "../components/PoemTitle";
import useFetchTitle from "../hooks/useFetchTitle";
import PoemTitle from "../components/PoemTitle";
function HomePage() {
  const { title, isLoading } = useFetchTitle();
  return (
    <Box>
      <Flex justify={"center"}>
        <InputGroup ml={20} mr={20} mt={8}>
          <Input placeholder="Enter amount" size={"md"} variant={"outline"} />
          <InputRightElement children={<Search2Icon color="blue.500" />} />
        </InputGroup>
      </Flex>
      <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 5, xl: 6 }} gridGap={2}>
        {title.map((t) => (
          <PoemTitle title={t} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
export default HomePage;
