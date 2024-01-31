import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import CustomButton from "@/components/CustomButton"

export default function Home() {
  return (
    <Box display="flex" alignItems={"center"} flexDirection={"column"}>
      <Box position={"relative"} marginTop={20} height={"500px"}>
        <Image
          src="/assets/images/home_pattern.svg"
          height={124}
          width={145}
          style={{ position: "absolute", top: 0 }}
        />
        <Image
          src="/assets/images/home_title_graph.svg"
          height={124}
          width={145}
          style={{ position: "absolute", bottom: 0, left: 50 }}
        />
        <Image
          src="/assets/images/home_title_coin.svg"
          height={124}
          width={145}
          style={{ position: "absolute", right: -80, top: -80 }}
        />
        <Image
          src="/assets/images/home_title_person.svg"
          height={124}
          width={145}
          style={{ position: "absolute", right: 100, bottom: -20 }}
        />
        <Box display="flex" justifyContent={"center"} alignItems={"center"} paddingTop={20} >
          <Box width={"70%"} display="flex" justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
            <Typography variant={"h3"} color="secondary" textAlign="center">Build Wealth Automatically <br/> With Br@in</Typography>
            <Typography color="#c5c5c5" textAlign="center" marginTop={2}>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut dolor sit</Typography>
            <CustomButton variant="text" backgroundColor="#F3F3F3" textColor="#000000" borderRadius={20} style={{ padding: "10px 20px", marginTop: 40 }}>Get Started</CustomButton>
          </Box>
        </Box>

      </Box>
      <Image src={"/assets/images/home_banner.png"} layout="responsive" height={945} width={1300} style={{ marginTop: 50 }} />
      <Image src={"/assets/images/home_counter.png"}  height={600} width={800} style={{ marginTop: 50 }} />

      <Grid container sx={{ backgroundColor: '#EAEEF1', display: 'flex', justifyContent: 'center', width: '100%', mt: 5 }}>
        <Grid item xs={6} sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column', p: 5 }}>
          <Typography sx={{ color: '#000000', fontSize: 30, fontWeight: 'bold' }}>
            Explore endless possibilities with Cryptop
          </Typography>
          <Typography sx={{ color: '#797979', fontSize: 14 }}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut dolor sit
          </Typography>
        </Grid>
        <Grid item xs={6} sx={{ p: 15 }}>
          <Image src="/assets/images/home_crypto_24_7.png" height={620} width={760} layout="responsive" />
        </Grid>
      </Grid>
    </Box>
  );
}
