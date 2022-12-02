import React from 'react'
import Header from "../components/Header"
import { useRouter } from 'next/router';
import Footer from './Footer';

const Layout = ({ children }) => {
    const router = useRouter();
    return (
        <>
            {router.pathname === "/signin" || router.pathname === "/signup" ?
                children
                :
                <>
                    <Header />
                    {children}
                    <Footer />
                </>
            }
        </>
    )
}

export default Layout