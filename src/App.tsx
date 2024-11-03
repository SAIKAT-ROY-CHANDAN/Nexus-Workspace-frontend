import { Outlet } from "react-router-dom"
import Footer from "./components/shared/Footer"
import ScrollToTop from "./components/home/ScrollTop"
import Header from "./components/shared/Header"

function App() {
  return (
    <>
      <Header />
      <div className="min-h-[calc(100vh-150px)]">
        <Outlet />
      </div>
      <ScrollToTop />
      <Footer />
    </>
  )
}

export default App
