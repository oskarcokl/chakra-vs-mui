import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  Flex,
  Select,
  Text,
} from '@chakra-ui/react';
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
import { useState, useMemo } from 'react';

interface DataItem {
  id: number;
  name: string;
  age: number;
  email: string;
}

interface SortConfig {
  key: keyof DataItem | null;
  direction: 'asc' | 'desc';
}

const SortableTable = ({ data }: { data: DataItem[] }) => {
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: null,
    direction: 'asc',
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  // Sorting logic
  const sortedData = useMemo(() => {
    if (!sortConfig.key) return data;

    return [...data].sort((a, b) => {
      if (a[sortConfig.key!] < b[sortConfig.key!]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key!] > b[sortConfig.key!]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }, [data, sortConfig]);

  // Pagination logic
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = sortedData.slice(startIndex, startIndex + itemsPerPage);

  const requestSort = (key: keyof DataItem) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const getSortIcon = (columnKey: keyof DataItem) => {
    if (sortConfig.key !== columnKey) return null;
    return sortConfig.direction === 'asc' ? <TriangleUpIcon /> : <TriangleDownIcon />;
  };

  return (
    <>
      <Flex flexDirection="column" gap={4}>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th onClick={() => requestSort('name')} cursor="pointer">
                <Flex alignItems="center">
                  Name {getSortIcon('name')}
                </Flex>
              </Th>
              <Th onClick={() => requestSort('age')} cursor="pointer">
                <Flex alignItems="center">
                  Age {getSortIcon('age')}
                </Flex>
              </Th>
              <Th onClick={() => requestSort('email')} cursor="pointer">
                <Flex alignItems="center">
                  Email {getSortIcon('email')}
                </Flex>
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {paginatedData.map((item) => (
              <Tr key={item.id}>
                <Td>{item.name}</Td>
                <Td>{item.age}</Td>
                <Td>{item.email}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      <Flex justify="space-between" mt={4} align="center">
        <Flex align="center" gap={2}>
          <Text>Rows per page:</Text>
          <Select
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
            width="70px"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </Select>
        </Flex>

        <Flex gap={2}>
          <Button
            onClick={() => setCurrentPage(currentPage - 1)}
            isDisabled={currentPage === 1}
          >
            Previous
          </Button>
          <Text>
            Page {currentPage} of {totalPages}
          </Text>
          <Button
            onClick={() => setCurrentPage(currentPage + 1)}
            isDisabled={currentPage === totalPages}
          >
            Next
          </Button>
        </Flex>
      </Flex>
      </Flex>
    </>
  );
};

export default SortableTable;