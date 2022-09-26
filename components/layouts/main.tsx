
import Header from '../top/header'
import Leftbar from '../sidebars/leftbar'
const MainLayout: LayoutProps = ({ children }) => {
  return (
    <div>
      <div className="MainHeader">
        <Header />
      </div>

      <div className='sitePadding'>
        <Leftbar />
        {children}

      </div>

      <style jsx>{` 
   
   .MainHeader {
          background: #ddd;
        }
        .sitePadding{
          padding:50px;
        } 
    `}</style>
    </div>
  )
}
export default MainLayout