import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-neutral-950 text-white selection:bg-purple-500/30">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout