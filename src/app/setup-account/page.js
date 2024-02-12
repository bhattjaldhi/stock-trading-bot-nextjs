'use client'
import RootLayout from "@/layouts/RootLayout";
import { Box, Stack, Step, StepDescription, StepIcon, StepIndicator, StepNumber, StepSeparator, StepStatus, StepTitle, Stepper, Text, useSteps } from "@chakra-ui/react";
import React from "react";
import PersonalInfo from "./components/PersonalInfo";
import ChoosePlan from "./components/ChoosePlan";
import Payment from "./components/Payment";

const steps = [
    { title: 'Personal Information' },
    { title: 'Choose Plan' },
    { title: 'Payment' },
]

export default function Page() {

    const { activeStep, goToNext } = useSteps({
        index: 1,
        count: steps.length,
    })


    return <RootLayout>
        <Box height={"100vh"} pt={[10, 10, 10, 20]} px={[10, 10, 10, 40]} >
            <Stack>
                <Stepper size={['xs', 'sm', 'md', 'lg']} index={activeStep} >
                    {steps.map((step, index) => (
                        <Step key={index}>
                            <StepIndicator>
                                <StepStatus
                                    complete={<StepIcon />}
                                    incomplete={<StepNumber />}
                                    active={<StepNumber />}
                                />
                            </StepIndicator>

                            <Box flexShrink='0'>
                                <StepTitle>{step.title}</StepTitle>
                                <StepDescription>{step.description}</StepDescription>
                            </Box>

                            <StepSeparator />
                        </Step>
                    ))}
                </Stepper>
                {activeStep === 1 && <PersonalInfo onNext={goToNext} />}
                {activeStep === 2 && <ChoosePlan onSubmit={goToNext} />}
                {activeStep === 3 && <Payment />}
                
            </Stack>
        </Box>
    </RootLayout>

}