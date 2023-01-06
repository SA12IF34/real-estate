import React from 'react'
import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import Nav from './Nav';
import Footer from './Footer';

const Layout = ({children}) => {
  return (
    <>
    <Head>
        <title>Real Estate</title>
    </Head>
    
    <Box maxWidth={"1280px"} margin="auto">
        <header>
            <Nav />
        </header>
        <main>
            {children}
        </main>
        <footer>
            <Footer />
        </footer>
    </Box>  
    </> 
  )
}

export default Layout;