'use client'
import alpaca from "@/services/alpaca";
import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import moment from "moment";
import StockDailyLineChart from "@/views/user/charts/StockDailyLineChart";


export default function Page({ params }) {

    const [lines, setLines] = useState([])

    useEffect(() => {
        const fetchBars = async () => {
            //Get daily price data for AAPL over the last 7 days.
            let bars = alpaca.getBarsV2(
                params.symbol,
                {
                    start: moment().subtract(365, "days").format(),
                    end: moment().subtract(20, "minutes").format(),
                    timeframe: "1Day",
                },
                alpaca.configuration
            );
            const barset = [{ name: 'Close price', data: [] }];
            for await (let b of bars) {
                barset[0].data.push({ x: b.Timestamp, y: b.ClosePrice });
            }
            setLines(barset)
        }

        fetchBars()
    }, [params.slug])

    return <Box pt={{ base: '180px', md: '80px', xl: '80px' }}>
        <StockDailyLineChart data={lines} />
    </Box>
}