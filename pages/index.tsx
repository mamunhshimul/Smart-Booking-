import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import SearchForm from '../components/search/searchForm';

// Meteril UI
import styles from '../styles/Home.module.css'
import Usercard from '../components/userCard'
import LayoutLanding from '../components/layouts/landing'
import MainTabs from '../components/elements/mainTabs'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';






const Home: NextPage = () => {
  return (
    <div>
      <main className={styles.main}>

        <div className='siteBanner'>
          <Container maxWidth="lg">
            <p>Available until Jan 3, 2023</p>
            <h2>Save 15% with Late Escape Deals</h2>
            <p>There’s still time to check one more destination off your wishlist</p>
            <Button variant="contained">Contained</Button> 
          </Container>
        </div>
        <Container maxWidth="lg">
          <div className='home-searchFrom'>
            <SearchForm />
          </div>
        </Container>

        <div></div>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
      <style jsx>{` 
   
   .siteBanner { 
        background-image:url('https://images.unsplash.com/photo-1632018197183-6d2d4db44b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80');
        padding:85px 0;
        background-size:cover;
        background-position:center;
        background-repeat:no-repeat;

        } 
        .siteBanner h2{ 
          color:white;
          font-size:50px;
          margin:0;
        } 
        .siteBanner p{  
          color:white;
          font-size:20px!important;
        } 
        .home-searchFrom{
          margin:50px 0;
        }
    `}</style>
    </div>
  )
}

Home.layout = LayoutLanding

export default Home
