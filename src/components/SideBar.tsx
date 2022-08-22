import { Flex, Text, ListItem, UnorderedList } from "@chakra-ui/react";

export function SideBar() {
  return (
    <Flex
      bg="#212529"
      color="white"
      h="100%"
      w="100%"
      maxW="200px"
      minW="150px"
      py="1rem"
      display={["none", "none", "none", "flex"]}
    >
      <UnorderedList
        listStyleType="none"
        h="20px"
        w="100%"
        display={["flex", "flex", "grid"]}
        gap="1rem"
      >
        <ListItem>
          <Text fontWeight="600">Editor</Text>
        </ListItem>
        <ListItem>Markdowns</ListItem>
        <ListItem>Settings</ListItem>
        <ListItem>Log out</ListItem>
      </UnorderedList>
    </Flex>
  );
}
