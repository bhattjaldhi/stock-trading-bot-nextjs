'use client';
import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, SimpleGrid, useDisclosure } from '@chakra-ui/react';
import BotsTable from '@/views/user/datatables/components/BotsTable';
import React, { useEffect, useState } from 'react';
import { collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore";
import { COLLECTIONS, db } from '@/firebase/firebaseConfig';
import { useAuthContext } from '@/contexts/AuthContext';
import rest from '@/services/rest';
import { format } from 'date-fns';
import moment from 'moment';
import BotAssetHistoryChart from '@/views/user/charts/BotAssetHistoryChart';

export default function DataTables() {
  const [tableData, setTableData] = useState()
  const { user, metadata } = useAuthContext()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [lines, setLines] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Reference to the bots collection
        const botsCollectionRef = collection(db, COLLECTIONS.BOTS);

        // Query to fetch data for the specified user ID
        const q = query(botsCollectionRef, where("userId", "==", user.uid));

        const docSnap = await getDocs(q);

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

  const handleOnRunSimulation = (data) => {
    rest.simulate({
      agent_path: 'aapl_ddpg_low',
      agent_type: 'ddpg',
      data_path: 'data/trading_set.csv',
      trade_limit: 100,
      buy_upper_limit: 200,
      sell_upper_limit: 2000,
      initial_amount: data.amount,
      symbol: data.symbol,
      start_date: moment('2024-02-28').subtract(2, 'M').format('YYYY-MM-DD'), // Corrected format for moment
      end_date: moment('2024-02-28').format('YYYY-MM-DD'), // Corrected format for moment
      user: 'Generic User',
      resume_session: false,
      orientation: 'records'
    }).then(x => {
      const barset = [{ name: 'Info', data: [] }];
      JSON.parse(x.data.asset_history).forEach(x => {
        barset[0].data.push({ x: moment(x.date) , y: x[`total `] });
      })
      setLines(barset)
      onOpen()
    }).catch(e => {
      console.log(e)
    })
  }

  return (
    <Box pt={{ base: '180px', md: '80px', xl: '80px' }}>
      <SimpleGrid
        mb="20px"
        columns={{ sm: 1, md: 1 }}
        spacing={{ base: '20px', xl: '20px' }}
      >
        {tableData && <BotsTable user={metadata} tableData={tableData} onDelete={handleOnDelete} onRunSimulation={handleOnRunSimulation} />}
        <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
          <ModalOverlay />
          <ModalContent width={800}>
            <ModalHeader>Simulation</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <BotAssetHistoryChart data={lines} />
            </ModalBody>

            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </SimpleGrid>
    </Box>
  );
}
