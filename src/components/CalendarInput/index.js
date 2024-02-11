import { Box, Input, Popover, PopoverBody, PopoverContent, PopoverTrigger, useDisclosure, useOutsideClick } from "@chakra-ui/react"
import { Calendar, CalendarControls, CalendarDays, CalendarMonth, CalendarMonthName, CalendarMonths, CalendarNextButton, CalendarPrevButton, CalendarWeek } from "@uselessdev/datepicker"
import { format, isValid } from "date-fns"
import React from "react"

export default function CalendarInput({ onDateChange, ...rest }) {
    const [date, setDate] = React.useState()
    const [value, setValue] = React.useState('')

    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const calendarRef = React.useRef(null)

    const handleSelectDate = (date) => {
        setDate(date)
        onDateChange(new Date(date))
        setValue(() => (isValid(date) ? format(date, 'MM/dd/yyyy') : ''))
        onClose()
    }

    const match = (value) => value.match(/(\d{2})\/(\d{2})\/(\d{4})/)

    const handleInputChange = ({
        target,
    }) => {
        setValue(target.value)

        if (match(target.value)) {
            onClose()
        }
    }

    useOutsideClick({
        ref: calendarRef,
        handler: onClose,
        enabled: isOpen,
    })

    React.useEffect(() => {
        if (match(value)) {
            const date = new Date(value)

            return setDate(date)
        }
    }, [value])

    return (
        <Box >
            <Popover
                placement="auto-start"
                isOpen={isOpen}
                onClose={onClose}
                initialFocusRef={initialRef}
                isLazy
            >
                <PopoverTrigger>
                    <Box onClick={onOpen} ref={initialRef}>
                        <Input
                            placeholder="MM/dd/yyyy"
                            value={value}
                            onChange={handleInputChange}
                        />
                    </Box>
                </PopoverTrigger>

                <PopoverContent
                    p={0}
                    w="min-content"
                    border="none"
                    outline="none"
                    _focus={{ boxShadow: 'none' }}
                    ref={calendarRef}
                >
                    <Calendar
                        value={{ start: date }}
                        onSelectDate={handleSelectDate}
                        singleDateSelection
                    >
                        <PopoverBody p={0}>
                            <CalendarControls>
                                <CalendarPrevButton />
                                <CalendarNextButton />
                            </CalendarControls>

                            <CalendarMonths>
                                <CalendarMonth>
                                    <CalendarMonthName />
                                    <CalendarWeek />
                                    <CalendarDays />
                                </CalendarMonth>
                            </CalendarMonths>
                        </PopoverBody>
                    </Calendar>
                </PopoverContent>
            </Popover>
        </Box>
    )
}