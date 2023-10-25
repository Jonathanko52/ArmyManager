import NavBar from './navBar'


export default function Layout({ children }) {
    return (
    <div className="App grid grid-cols-8 h-screen	bg-slate-500 text-gray-300">
        <NavBar/>
        {children}
    </div>
    )
  }