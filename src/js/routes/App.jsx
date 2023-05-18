import React from 'react';
import Home from '../pages/Home.jsx';
import Layout from '../component/Layout.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from '../pages/Contact.jsx';
import Todos from '../pages/Todos.jsx'
import NotFound from '../component/NotFound.jsx';
import Detail from '../component/Detail.jsx';

function App() {
    return (
        <>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path='/' element={<Home/>} />
                        <Route path='/contact' element={<Contact/>} />
                        <Route path='/todos' element={<Todos />} />
                        <Route path='/detalle/:idProduct' element={<Detail/>}/>
                        <Route path='*' element={<NotFound />}/>
                    </Routes>
                </Layout>
            </BrowserRouter>
        </>
    )
}



export default App