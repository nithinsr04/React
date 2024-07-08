
import './App.css'
import Layout from './Layout'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import About from './components/About/About'
import Contacts from './components/Contacts/Contacts'
import Github,{githubInfoLoader} from './components/Github/Github'
import Home from './components/Home/Home'
import Blog from './components/Blog/Blog'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} >
      <Route path=''element={<Home />} />
      <Route path='About' element={<About/>}/>
      <Route path='contacts' element={<Contacts/>}/>
      <Route loader={githubInfoLoader} path='github' element={<Github/>}/>
      <Route path='blog/' element={<Blog/>}>
        <Route path=':userid' element={<Blog/>}/>
      </Route>
      <Route path='*' element={<div className='bg-red-200 text-black font-medium text-lg w-screen h-20 inline-flex items-center justify-center'>Not Found</div>}/>
    </Route>
  )
)
function App() {


  return (
    <RouterProvider router={router}/>
  )
}

export default App
