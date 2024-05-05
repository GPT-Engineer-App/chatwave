import { Box, Container, VStack, Text, Input, Button, Flex, Spacer, List, ListItem, Avatar, Divider } from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0} height="100vh">
      <Flex h="100%">
        {/* Sidebar for chats */}
        <Box w="30%" bg="gray.100" p={4} borderRight="1px" borderColor="gray.200">
          <Text fontSize="2xl" mb={4}>
            Chats
          </Text>
          <List spacing={3}>
            <ListItem p={2} _hover={{ bg: "gray.200", cursor: "pointer" }}>
              <Flex align="center">
                <Avatar name="John Doe" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYWxlJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzE0OTI1MTY2fDA&ixlib=rb-4.0.3&q=80&w=1080" />
                <Box ml="3">
                  <Text fontWeight="bold">John Doe</Text>
                  <Text fontSize="sm">Hello, how are you?</Text>
                </Box>
              </Flex>
            </ListItem>
            <Divider />
            <ListItem p={2} _hover={{ bg: "gray.200", cursor: "pointer" }}>
              <Flex align="center">
                <Avatar name="Jane Smith" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTQ5MjUxNjd8MA&ixlib=rb-4.0.3&q=80&w=1080" />
                <Box ml="3">
                  <Text fontWeight="bold">Jane Smith</Text>
                  <Text fontSize="sm">Are we meeting today?</Text>
                </Box>
              </Flex>
            </ListItem>
            <Divider />
            {/* More chats can be added here */}
          </List>
        </Box>

        {/* Chat display area */}
        <Box w="70%" p={4}>
          <VStack spacing={4} align="stretch">
            <Box bg="gray.50" p={4} borderRadius="lg">
              <Text fontSize="lg" fontWeight="bold">
                John Doe
              </Text>
              <Text fontSize="sm" color="gray.500">
                Online
              </Text>
            </Box>
            <Flex direction="column" flex="1" bg="white" p={4} overflowY="scroll">
              {/* Messages will be displayed here */}
              <Box alignSelf="flex-start" bg="blue.100" p={3} borderRadius="lg" maxWidth="70%">
                <Text>Hello, how are you?</Text>
              </Box>
              <Spacer />
              <Box alignSelf="flex-end" bg="green.100" p={3} borderRadius="lg" maxWidth="70%">
                <Text>I'm good, thanks for asking!</Text>
              </Box>
              {/* More messages can be added here */}
            </Flex>
            <Flex>
              <Input placeholder="Type a message..." />
              <Button ml={2} colorScheme="blue" rightIcon={<FaPaperPlane />}>
                Send
              </Button>
            </Flex>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;
