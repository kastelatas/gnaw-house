import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Basket from "../modals/Basket";
import Head from 'next/head';

const MainLayout = ({children, title}) => {
    return (
        <>
          <Head>
            <title>{title}</title>
          </Head>
            <Header/>
            {children}
            <Footer/>
          <Basket/>
        </>
    );
};

export default MainLayout;