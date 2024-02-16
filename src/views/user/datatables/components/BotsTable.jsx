import { Flex, Box, Table, Tbody, Td, Text, Th, Thead, Tr, useColorModeValue, Button, Menu, MenuButton, MenuList, MenuItem, IconButton, Tooltip } from '@chakra-ui/react';
import * as React from 'react';

import {
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	getSortedRowModel,
	useReactTable
} from '@tanstack/react-table';

// Custom components
import Card from '@/components/card/Card';
import Link from 'next/link';
import moment from 'moment';
import { HamburgerIcon } from '@chakra-ui/icons';
import { PRICING } from '@/utils/constants';

const columnHelper = createColumnHelper();

// const columns = columnsDataCheck;
export default function BotsTable(props) {
	const { user, tableData, onDelete } = props;
	const [sorting, setSorting] = React.useState([]);
	const textColor = useColorModeValue('secondaryGray.900', 'white');
	const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100');
	const defaultData = tableData

	const columns = [
		columnHelper.accessor('symbol', {
			id: 'symbol',
			header: () => (
				<Text
					justifyContent='space-between'
					align='center'
					fontSize={{ sm: '10px', lg: '12px' }}
					color='gray.400'>
					Stock
				</Text>
			),
			cell: (info) => (
				<Flex align='center'>
					<Text color={textColor} fontSize='sm' fontWeight='700'>
						{info.getValue()}
					</Text>
				</Flex>
			)
		}),
		columnHelper.accessor('amount', {
			id: 'amount',
			header: () => (
				<Text
					justifyContent='space-between'
					align='center'
					fontSize={{ sm: '10px', lg: '12px' }}
					color='gray.400'>
					Invested amount
				</Text>
			),
			cell: (info) => (
				<Text color={textColor} fontSize='sm' fontWeight='700'>
					{info.getValue()}
				</Text>
			)
		}),
		columnHelper.accessor('current_value', {
			id: 'current_value',
			header: () => (
				<Text
					justifyContent='space-between'
					align='center'
					fontSize={{ sm: '10px', lg: '12px' }}
					color='gray.400'>
					Current value
				</Text>
			),
			cell: (info) => (
				<Text color={textColor} fontSize='sm' fontWeight='700'>
					{info.getValue() || 0}
				</Text>
			)
		}),
		columnHelper.accessor('date', {
			id: 'date',
			header: () => (
				<Text
					justifyContent='space-between'
					align='center'
					fontSize={{ sm: '10px', lg: '12px' }}
					color='gray.400'>
					EXPIRES ON
				</Text>
			),
			cell: (info) => (
				<Text color={textColor} fontSize='sm' fontWeight='700'>
					{moment(info.getValue()?.seconds * 1000).format('DD MMM, yyyy')}
				</Text>
			)
		}),

		columnHelper.accessor('id', {
			id: 'id',
			header: () => (
				<Text
					justifyContent='space-between'
					align='center'
					fontSize={{ sm: '10px', lg: '12px' }}
					color='gray.400'>
					Action
				</Text>
			),
			cell: (info) => (
				<Menu>
					<MenuButton
						as={IconButton}
						aria-label='Options'
						icon={<HamburgerIcon />}
						variant='outline'
					/>
					<MenuList>
						<MenuItem>Edit</MenuItem>
						<MenuItem onClick={() => {
							info.table.options.meta.removeRow(info.row.index);
						}}>Delete</MenuItem>
					</MenuList>
				</Menu>
			)
		})
	];
	const [data, setData] = React.useState(() => [...defaultData]);
	const table = useReactTable({
		data,
		columns,
		state: {
			sorting
		},
		onSortingChange: setSorting,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		meta: {
			removeRow: (rowIndex) => {
				const setFilterFunc = (old) =>
					old.filter((_row, index) => index !== rowIndex);
				setData(setFilterFunc);
				onDelete(rowIndex)
			}
		}
	});

	const rows = table.getRowModel().rows.length

	const isCreateButtonDisabled = React.useMemo(() => {
		switch (user?.plan) {
			case PRICING.pro.key:
				return rows < 3 ? false : true
			case PRICING.max.key:
				return rows < 5 ? false : true
			case PRICING.ultra.key:
				return false
			default:
				return rows < 1 ? false : true
		}
	}, [user, tableData])


	return (
		<Card flexDirection='column' w='100%' px='0px' overflowX={{ sm: 'scroll', lg: 'hidden' }}>
			<Flex px='25px' mb="8px" justifyContent='space-between' align='center'>
				<Text color={textColor} fontSize='22px' mb="4px" fontWeight='700' lineHeight='100%'>
					AI Bots
				</Text>
				<Link href="/user/bots/create">
					<Tooltip hasArrow label='Maximum number of bots reached' bg='brand.600' placement='top' borderRadius={5} isDisabled={!isCreateButtonDisabled}>
						<Button colorScheme={'brand'} size={'sm'} isDisabled={isCreateButtonDisabled}>+ Create Bot</Button>
					</Tooltip>
				</Link>
			</Flex>
			<Box>
				<Table variant='simple' color='gray.500' mb='24px' mt="12px">
					<Thead>
						{table.getHeaderGroups().map((headerGroup) => (
							<Tr key={headerGroup.id}>
								{headerGroup.headers.map((header) => {
									return (
										<Th
											key={header.id}
											colSpan={header.colSpan}
											pe='10px'
											borderColor={borderColor}
											cursor='pointer'
											onClick={header.column.getToggleSortingHandler()}>
											<Flex
												justifyContent='space-between'
												align='center'
												fontSize={{ sm: '10px', lg: '12px' }}
												color='gray.400'>
												{flexRender(header.column.columnDef.header, header.getContext())}{{
													asc: '',
													desc: '',
												}[header.column.getIsSorted()] ?? null}
											</Flex>
										</Th>
									);
								})}
							</Tr>
						))}
					</Thead>
					<Tbody>
						{table.getRowModel().rows.slice(0, 11).map((row) => {
							return (
								<Tr key={row.id}>
									{row.getVisibleCells().map((cell) => {
										return (
											<Td
												key={cell.id}
												fontSize={{ sm: '14px' }}
												minW={{ sm: '150px', md: '200px', lg: 'auto' }}
												borderColor='transparent'>
												{flexRender(cell.column.columnDef.cell, cell.getContext())}
											</Td>
										);
									})}
								</Tr>
							);
						})}
					</Tbody>
				</Table>
			</Box>
		</Card>
	);
} 