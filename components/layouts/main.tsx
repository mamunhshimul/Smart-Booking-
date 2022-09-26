
import HeaderTop from '../header/headerTop'
import Leftbar from '../sidebars/leftbar'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';




const MainLayout: LayoutProps = ({ children }) => {
  return (
    <div>

      <div style={{ backgroundColor: '#137d8a' }}>
        <Container maxWidth="lg">
          <div className="MainHeader">
            <HeaderTop />
          </div>
        </Container>
      </div>



      <div className='sitePadding'>

        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Leftbar />
          </Grid>
          <Grid item xs={8}>
            {children}
          </Grid>
        </Grid>



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
export default MainLayout