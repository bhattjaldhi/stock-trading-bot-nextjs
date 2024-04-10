'use client';
import { Box, SimpleGrid } from '@chakra-ui/react';
import TransactionsTable from '@/views/user/datatables/components/TransactionsTable';
import React, { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { COLLECTIONS, db } from '@/firebase/firebaseConfig';
import { useAuthContext } from '@/contexts/AuthContext';
import BotAssetHistoryChart from '@/views/user/charts/BotAssetHistoryChart';
import moment from 'moment';

export default function Page({ params }) {

  const [tableData, setTableData] = useState()
  const [lines, setLines] = useState([])
  const { user } = useAuthContext()


  useEffect(() => {
    const fetchData = async () => {
      try {
        // Reference to the bots collection
        const assetsCollectionRef = collection(db, COLLECTIONS.ASSETS);

        // Query to fetch data for the specified user ID
        let q = query(assetsCollectionRef, where("userId", "==", user.uid));

        // Add symbol filter if provided
        if (params.symbol) {
          q = query(q, where("symbol", "==", params.symbol));
        }

        const docSnap = await getDocs(q);

        const data = []
        const barset = [{ name: 'Info', data: [] }];

        docSnap.forEach((doc) => {
          const _data = { ...doc.data() }
          if (_data[`shares`]) {
            data.push({ id: doc.id, ..._data })
            barset[0].data.push({ x: moment(_data.date), y: _data[`price`] * _data[`shares`] });
          }
        });

        setLines(barset)

        // Sort the data array by date
        data.sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return dateB - dateA;
        });
        setTableData(data)
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
        {tableData && <TransactionsTable tableData={tableData} />}
        <BotAssetHistoryChart data={lines} />
      </SimpleGrid>
    </Box>
  );
}
