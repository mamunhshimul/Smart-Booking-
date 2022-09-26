import type { LayoutProps } from 'types/pageWithLayout' 
import HeaderTop from '../header/headerTop' 
import Grid from '@mui/material/Grid'; 
import Container from '@mui/material/Container';



const LandingLayout: LayoutProps = ({ children }) => {
  return (
    <div>

      <div style={{ backgroundColor: '#137d8a' }}>
        <Container maxWidth="lg">
          <div className="MainHeader"> 
            <HeaderTop />
          </div>
        </Container>
      </div>



      <div className=''>

          {children}



      </div>

      <style jsx>{` 
   
   .MainHeader { 
          padding:15px 0;
        }
        .sitePadding{
          padding:50px;
        } 
    `}</style>
    </div>
  )
}
export default LandingLayout