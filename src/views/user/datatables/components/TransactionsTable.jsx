import { Flex, Box, Table, Tbody, Td, Text, Th, Thead, Tr, useColorModeValue, Button, Tfoot } from '@chakra-ui/react';
import * as React from 'react';

import {
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from '@tanstack/react-table';

// Custom components
import Card from '@/components/card/Card';
import Link from 'next/link';

const columnHelper = createColumnHelper();

// const columns = columnsDataCheck;
export default function TransactionsTable(props) {
	const { tableData } = props;
	const [sorting, setSorting] = React.useState([]);
	const textColor = useColorModeValue('secondaryGray.900', 'white');
	const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100');
	let defaultData = tableData;
	const columns = [
		columnHelper.accessor('symbol', {
			id: 'symbol',
			header: () => (
				<Text
					justifyContent='space-between'
					align='center'
					fontSize={{ sm: '10px', lg: '12px' }}
					color='gray.400'>
					Symbol
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
		columnHelper.accessor('price', {
			id: 'price',
			header: () => (
				<Text
					justifyContent='space-between'
					align='center'
					fontSize={{ sm: '10px', lg: '12px' }}
					color='gray.400'>
					Price
				</Text>
			),
			cell: (info) => (
				<Text color={textColor} fontSize='sm' fontWeight='700'>
					{info.getValue()?.toFixed(2)}
				</Text>
			)
		}),
		columnHelper.accessor('shares', {
			id: 'shares',
			header: () => (
				<Text
					justifyContent='space-between'
					align='center'
					fontSize={{ sm: '10px', lg: '12px' }}
					color='gray.400'>
					Shares
				</Text>
			),
			cell: (info) => (
				<Text color={textColor} fontSize='sm' fontWeight='700'>
					{info.getValue()}
				</Text>
			)
		}),
		columnHelper.accessor('price', {
			id: 'total',
			header: () => (
				<Text
					justifyContent='space-between'
					align='center'
					fontSize={{ sm: '10px', lg: '12px' }}
					color='gray.400'>
					TOtal
				</Text>
			),
			cell: (info) => (
				<Text color={textColor} fontSize='sm' fontWeight='700'>
					{(info.row.original.price * info.row.original.shares).toFixed(2)}
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
					Date
				</Text>
			),
			cell: (info) => (
				<Text color={textColor} fontSize='sm' fontWeight='700'>
					{info.getValue()}
				</Text>
			)
		}),
	];
	const [data, setData] = React.useState(() => [...defaultData]);
	const table = useReactTable({
		data,
		columns,
		state: {
			state: {
				sorting,
				pageIndex: 0,
				pageSize: 10,
			},
		},
		onSortingChange: setSorting,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
	});

	return (
		<Card flexDirection='column' w='100%' px='0px' overflowX={{ sm: 'scroll', lg: 'hidden' }}>
			<Flex px='25px' mb="8px" justifyContent='space-between' align='center'>
				<Text color={textColor} fontSize='22px' mb="4px" fontWeight='700' lineHeight='100%'>
					Transactions
				</Text>
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
						{table.getRowModel().rows.map((row) => {
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
					<Tfoot>
						<Tr>
							<Td >
								<Button onClick={() => table.previousPage()} disabled={!table.canPreviousPage}>
									Previous
								</Button>{' '}
								<Button onClick={() => table.nextPage()} disabled={!table.canNextPage}>
									Next
								</Button>{' '}
								<Text as="span">
									Page{' '}
									<strong>
										{table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
									</strong>{' '}
								</Text>
							</Td>
							<Td textAlign="center">
								<Text as="span">
									| Go to page:{' '}
									<input
										type="number"
										defaultValue={table.getState().pagination.pageIndex + 1}
										onChange={(e) => {
											const page = e.target.value ? Number(e.target.value) - 1 : 0;
											table.setPageIndex(page);
										}}
										style={{ width: '50px' }}
									/>
								</Text>{' '}
							</Td>
							<Td textAlign={'end'}>
								<Text as="span">
									Show{' '}
									<select
										value={table.pageSize}
										onChange={(e) => {
											table.setPageSize(Number(e.target.value));
										}}
									>
										{[10, 20, 30, 40, 50].map((pageSize) => (
											<option key={pageSize} value={pageSize}>
												{pageSize}
											</option>
										))}
									</select>{' '}
									entries
								</Text>
							</Td>
						</Tr>
					</Tfoot>
				</Table>
			</Box>
		</Card>
	);
} 