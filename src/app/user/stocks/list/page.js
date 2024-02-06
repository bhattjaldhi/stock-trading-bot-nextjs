'use client';
import { Box, SimpleGrid } from '@chakra-ui/react';
import StocksTable from '@/views/user/datatables/components/StocksTable';
import React from 'react';
import tableDataColumns from '@/views/user/datatables/variables/stocksDataColumns';

export default function Page() {
  
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <SimpleGrid
        mb="20px"
        columns={{ sm: 1, md: 1 }}
        spacing={{ base: '20px', xl: '20px' }}
      >
        <StocksTable tableData={tableDataColumns} />
      </SimpleGrid>
    </Box>
  );
}
