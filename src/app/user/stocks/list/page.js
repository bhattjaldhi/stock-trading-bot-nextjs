'use client';
import { Box, SimpleGrid } from '@chakra-ui/react';
import StocksTable from '@/views/user/datatables/components/StocksTable';
import React, { useEffect } from 'react';
import alpaca from '@/services/alpaca';

export default function Page() {

  const [tableDataColumns, setTableDataColumns] = React.useState(undefined)
  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await alpaca.getAssets()
        res.sort((a, b) => a.symbol.localeCompare(b.symbol));
        setTableDataColumns(res)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  return (
    <Box pt={{ base: '180px', md: '80px', xl: '80px' }}>
      <SimpleGrid
        mb="20px"
        columns={{ sm: 1, md: 1 }}
        spacing={{ base: '20px', xl: '20px' }}
      >
        {tableDataColumns && <StocksTable tableData={tableDataColumns} />}
      </SimpleGrid>
    </Box>
  );
}
