import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Post from './pages/Post'
import Header from './components/Header'

function App() {
  console.log("App.jsx");

  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/blog" element={ <Blog/> } />
        <Route path="/post/:id" element={ <Post/> } />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
