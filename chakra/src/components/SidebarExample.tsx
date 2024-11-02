import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Box, Card, Heading, useMediaQuery } from "@chakra-ui/react";

export default function SidebarExample() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isMobile] = useMediaQuery('(max-width: 768px)');

    const boxMargin = isMobile ? "0" : (isCollapsed ? "10" : "240");

    return (
        <Box w="full">
            <Sidebar
                isCollapsed={isCollapsed}
                onCollapsedChange={setIsCollapsed}
            />
            <Box flex="1" p="4" ml={boxMargin} transition="margin 0.2s">
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
