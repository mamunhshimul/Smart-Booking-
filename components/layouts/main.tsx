
import Header from '../top/header'
import Leftbar from '../sidebars/leftbar'
const MainLayout: LayoutProps = ({ children }) => {
  return (
    <div>
      <div className="MainHeader">
        <Header />
        <Leftbar />
      </div> 
      {children} 

      <style jsx>{` 
   
   .MainHeader {
          background: #ddd;
        } 
    `}</style>
    </div>
  )
}
export default MainLayout