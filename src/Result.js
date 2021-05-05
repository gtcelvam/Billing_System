import React,{useRef} from 'react'
import Invoice from './components/invoice'
import ReactToPrint from "react-to-print"
import Footer from "./components/footer"
import {UserContextProvider} from "./components/cart"
import './index.css'

function Result() {
    return (
        <UserContextProvider>
        <div>
            <Invoice/>
            <Footer/>
        </div>
        </UserContextProvider>
    )
}

export default Result
