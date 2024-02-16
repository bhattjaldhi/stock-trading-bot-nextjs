'use client';
import { Box, SimpleGrid } from '@chakra-ui/react';
import BotsTable from '@/views/user/datatables/components/BotsTable';
import React, { useEffect, useState } from 'react';
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { COLLECTIONS, db } from '@/firebase/firebaseConfig';
import { useAuthContext } from '@/contexts/AuthContext';

export default function DataTables() {
  const [tableData, setTableData] = useState()
  const { metadata } = useAuthContext()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = collection(db, COLLECTIONS.BOTS);
        const docSnap = await getDocs(docRef);

        const data = []
        docSnap.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() })
        });

        setTableData(data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  const handleOnDelete = async (index) => {
    let id = tableData[index].id
    await deleteDoc(doc(db, COLLECTIONS.BOTS, id));
  }
  return (
    <Box pt={{ base: '180px', md: '80px', xl: '80px' }}>
      <SimpleGrid
        mb="20px"
        columns={{ sm: 1, md: 1 }}
        spacing={{ base: '20px', xl: '20px' }}
      >
        {tableData && <BotsTable user={metadata}  tableData={tableData} onDelete={handleOnDelete} />}
      </SimpleGrid>
    </Box>
  );
}
