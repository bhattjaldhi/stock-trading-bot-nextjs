'use client';
import { Box, SimpleGrid } from '@chakra-ui/react';
import StocksTable from '@/views/user/datatables/components/StocksTable';
import React, { useEffect } from 'react';
import alpacaMarket from '@/api/alpaca/alpacaMarket';

export default function Page() {

  const [tableDataColumns, setTableDataColumns] = React.useState(undefined)
console.log(tableDataColumns)
  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await alpacaMarket.getAssets()
        setTableDataColumns(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
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
