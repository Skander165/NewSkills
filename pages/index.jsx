import * as React from 'react';
import Container from '@mui/material/Container';

import HeaderOptions from '../components/HeaderOptions';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import Plans from '../components/Plans';
import Services from '../components/Services';
import GuestMain from '../components/GuestMain';
import Latest from '../components/Latest';
import LatestCard from '../components/LatestCard';
import GuestWhoAreWe from '../components/GuestWhoAreWe';
import Main from '../components/Main';
import AboutYouModal from '../components/AboutYouModal';
import Interests from '../components/Interests';
import WelcomeModal from '../components/WelcomeModal';

export default function Index() {
  const auth = false
  return (

    <>
      {auth ? <>
        <Container>
          <HeaderOptions />
          <Main />
        </Container>
      </> : <>
        <GuestMain />
        <Container>
          <Latest />
          <GuestWhoAreWe />
          <Services />
        </Container>
        <Plans />
        <NewsLetter />
      </>}

      {/* <Interests /> */}
      {/* <Container fixed>
        <Latest />
        <GuestWhoAreWe />
        <Services />


      </Container>
      <Plans />
      <Container fixed>
        <NewsLetter />
      </Container> */}
    </>
  );
}
