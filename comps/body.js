import React from 'react'
import { Box, Typography, Button, Grid } from '@mui/material'
const Body = () => {
  return (
    <Box>
      <Box paddingRight={'80px'} marginLeft={'80px'}
        top={'60px'} >
        <Box

          sx={{ color: '#4578', borderRadius: '25px' }}>
          <Typography variant='h2' textAlign={'center'}><b>Make your computer</b></Typography>
        </Box>

        <Box>  <Typography textAlign={'center'} variant='h3' color={"#114f"}>more faster</Typography></Box><br /><br />
        <Box justifyContent={'center'}><Typography variant='h5' textAlign={'center'}>
          Zorin OS is the alternative to Windows and macOS designed to make your computer faster, more powerful, secure, and privacy-respecting.</Typography>

        </Box>
        <Button variant='contained'>Download ZORIN OS</Button>

      </Box>
      <Box paddingTop={20}>
        <Grid container spacing={2}>
          <Grid item xs={3} md={3}>
            <Box height={60}>
              <Box component='img' height='80px'
                src='https://assets.zorincdn.com/zorin.com/images/home/press/forbes.png' />
              <Typography variant='body1'>
                “[Zorin OS] is just so clean and polished. I don’t really anticipate a learning curve for new users.”
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3} md={3}>
            <Box >
              <Box component='img' height='80px'
                src='https://assets.zorincdn.com/zorin.com/images/home/press/techrepublic.png' />
              <Typography variant='body1'>
                “Who is Zorin OS 16 for? Anyone. Period. That's how good Zorin OS 16 is.”
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3} md={3}>
            <Box >
              <Box component='img' height='80px'
                src='https://assets.zorincdn.com/zorin.com/images/home/press/techradar.png' />
              <Typography variant='body1'>
                “It has everything in terms of offering a friendly and usable experience to those coming from… Windows or macOS”
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3} md={3}>
            <Box >
              <Box component='img' height='80px'
                src='https://assets.zorincdn.com/zorin.com/images/home/press/pcworld.png' />
              <Typography variant='body1'>
                “When speed is of the essence, Zorin OS really shines”
              </Typography>
            </Box>
          </Grid>

        </Grid>
      </Box>
      <Box>
        <Box

          sx={{ color: '#4578', borderRadius: '25px' }}>
          <Typography variant='h1' textAlign={'center'}><b>A familiar desktop </b></Typography>
        </Box>

        <Box>  <Typography textAlign={'center'} variant='h2' color={"#114f"}>you already know how to use.</Typography></Box><br /><br />

      </Box>
    </Box>
  )
}

export default Body