import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import ScrollToTop from "./components/ScrollTop"

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
