import { Button, Box, Avatar, Typography, Divider, Toolbar } from '@mui/material'
import React from 'react'

const Navbar = () => {
    return (
        <Box>
            <Toolbar sx={{ background: '#Fff', borderRadius: '25px', width: '100%' }} >
                <Box alignItems={'center'} justifyContent={'center'} display={'flex'} marginLeft={30} letterSpacing={4}>
                    <Button>Z</Button>
                    <Button marginLeft={'400px'}> ZORIN os</Button>
                    <Button>zorin grid</Button>
                    <Button>computers</Button>
                    <Button>Help</Button>
                </Box>
            </Toolbar>
            <br />
            <Box position={'fixed'} paddingRight={'80px'} marginLeft={'80px'}
                sx={{background:'#fff', borderRadius: '25px', boxShadow: 2, height: 60 }} display='flex'>
                <Toolbar  >
                    <Box
                        display={'flex'}
                        paddingLeft={5}
                        component="img"
                        sx={{
                            height: 10,
                            width: 200,
                            maxHeight: { xs: 100, md: 167 },
                            maxWidth: { xs: 200, md: 150 }, flexGrow: 1,
                        }}
                        src="https://assets.zorincdn.com/zorin.com/images/home/zorin-os.svg" />
                    <Box marginLeft={18} sx={{ flexGrow: 0 }}>
                        <Button height='30'>Overview</Button>
                        <Button height='30'>For Schools</Button>
                        <Button height='30'>Pro</Button>
                        <Button height='30' variant='contained' sx={{ borderRadius: '25px' }}>Download</Button>
                    </Box>
                </Toolbar>
            </Box>
            <br />
        </Box>

    )
}

export default Navbar