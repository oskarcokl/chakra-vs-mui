import React from "react";
import Sidebar from "./Sidebar";
import { Box, Card, Flex, Heading } from "@chakra-ui/react";

export default function SidebarExample() {
    return (
        <Box w="full">
            <Sidebar/>
            <Box flex="1" p="4" ml="240" transition="margin 0.2s">
                <Card p="6">
                    <Heading>
                        This is some example content
                    </Heading>

                    <Box mt="4">
                        {Array.from({ length: 20 }).map((_, i) => (
                            <Card key={i} my="4" p="4">
                                <Heading size="md">Section {i + 1}</Heading>
                                <Box mt="2">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, molestiae obcaecati a placeat maxime non mollitia eaque facilis consectetur ducimus animi recusandae esse qui nostrum inventore amet soluta sed consequuntur?
                                </Box>
                            </Card>
                        ))}

                    </Box>
                </Card>
            </Box>
        </Box>
    )
}

// export default function SidebarExample() {
//     return (
//         <Flex w="full" h="100vh">
//             <Sidebar/>
//         </Flex>
//     )
// }
