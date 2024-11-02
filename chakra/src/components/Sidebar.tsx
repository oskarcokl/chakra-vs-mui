import React, { useState } from 'react';
import {
    Box,
    Flex,
    Button,
    Text,
    VStack,
    useDisclosure,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    useMediaQuery,
} from '@chakra-ui/react';

const MenuItem = ({ label }: {label: string}) => (
    <Flex
        p={2}
        cursor="pointer"
        borderRadius="md"
        align="center"
        _hover={{ bg: 'blue.50' }}
        color="gray.600"
        transition="all 0.2s"
    >
        <Text fontSize="sm" isTruncated>
            {label}
        </Text>
    </Flex>
);

interface SidebarContentProps {
    isCollapsed: boolean
    onToggle: () => void
}

const SidebarContent = ({ isCollapsed, onToggle }: SidebarContentProps) => {
    const menuItems = [
        { label: 'Dashboard', section: 'main' },
        { label: 'Overview', section: 'main' },
        { label: 'Magic build', section: 'editor' },
        { label: 'Filters', section: 'editor' },
        { label: 'Filter', section: 'editor' },
        { label: 'Upload new', section: 'editor' },
        { label: 'Features', section: 'setting' },
        { label: 'Setting', section: 'setting' },
    ];

    const sections = {
        main: 'Dashboard',
        editor: 'Editor',
        setting: 'Setting',
    };

    return (
        <Box 
            position="fixed"
            left="0" 
            top="10"
            h="100vh"
            display="flex"
        >
        <Box
            w={isCollapsed ? '0px' : '240px'}
            h="100vh"
            bg="white"
            py={4}
            transition="width 0.2s"
            borderRightWidth={isCollapsed ? "0px" : "1px"}
        >
            <Flex px={4} align="center" mb={8}>
                {!isCollapsed && (
                    <Text fontSize="xl" fontWeight="bold" color="blue.500">
                        Plutus
                    </Text>
                )}
                <Button
                    size="sm"
                    variant="ghost"
                    onClick={onToggle}
                    ml={isCollapsed ? '0' : 'auto'}
                    transition="all 0.2s"
                    aria-label="Toggle sidebar"
                >
                    {isCollapsed ? '→' : '←'}
                </Button>
            </Flex>

            <VStack spacing={4} align="stretch">
                {Object.entries(sections).map(([sectionKey, sectionLabel]) => (
                    <Box key={sectionKey} px={4}>
                        <Text fontSize="sm" color="gray.500" mb={2} isTruncated>
                            {sectionLabel}
                        </Text>
                        <VStack align="stretch" spacing={1}>
                            {menuItems
                                .filter((item) => item.section === sectionKey)
                                .map((item) => (
                                    <MenuItem
                                        key={item.label}
                                        label={item.label}
                                    />
                                ))}
                        </VStack>
                    </Box>
                ))}
            </VStack>
        </Box>
        </Box>
    );
};

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isMobile] = useMediaQuery('(max-width: 768px)');

    return (
        <>
            {isMobile ? (
                <>
                    <Button
                        position="fixed"
                        top={4}
                        left={4}
                        size="sm"
                        onClick={onOpen}
                        aria-label="Open menu"
                    >
                        Menu
                    </Button>
                    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                        <DrawerOverlay backgroundColor="blackAlpha.400" />
                        <DrawerContent maxW="240px">
                            <SidebarContent isCollapsed={false} onToggle={onClose} />
                        </DrawerContent>
                    </Drawer>
                </>
            ) : (
                    <SidebarContent
                        isCollapsed={isCollapsed}
                        onToggle={() => setIsCollapsed(!isCollapsed)}
                    />
                )}
        </>
    );
};

export default Sidebar;
