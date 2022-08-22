import { Flex, Text } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex w="100%" color="#343a40" align="center" justify="center" p="1rem">
      <Text fontSize="1.25rem" fontWeight="500">
        Markdown Editor
      </Text>
    </Flex>
  );
}
