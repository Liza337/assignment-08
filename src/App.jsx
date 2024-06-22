import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import AnswerBlog from './components/AnswerBlog/AnswerBlog'



function App() {
  const [count, setCount] = useState(0)


  
  return (
    <div className="App">
      <Header></Header>
      <Blogs></Blogs>
      <AnswerBlog></AnswerBlog>
    </div>
  )
}

export default App
