'use client';

// Chakra imports
import { Avatar, Box, Grid } from '@chakra-ui/react';

// Custom components
import Banner from '@/views/user/profile/components/Banner';
import Storage from '@/views/user/profile/components/Storage';
import { useAuthContext } from '@/contexts/AuthContext';
import { PRICING } from '@/utils/constants';


export default function ProfileOverview() {

    const {user, metadata} = useAuthContext()

  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      {/* Main Fields */}
      <Grid
        templateColumns={{
          base: '1fr',
          lg: '1.34fr 1fr 1.62fr',
        }}
        templateRows={{
          base: 'repeat(3, 1fr)',
          lg: '1fr',
        }}
        gap={{ base: '20px', xl: '20px' }}
      >
        <Banner
          gridArea="1 / 1 / 2 / 2"
          avatar={<Avatar />}
          name={user?.displayName}
          email={user?.email}
          posts="17"
          followers="9.7k"
          following="274"
        />
        <Storage
          gridArea={{ base: '2 / 1 / 3 / 2', lg: '1 / 2 / 2 / 3' }}
          plan={metadata?.plan}
        />
      </Grid>
     
    </Box>
  );
}
