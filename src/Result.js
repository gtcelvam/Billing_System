import React,{useRef} from 'react'
import Invoice from './components/invoice'
import Footer from "./components/footer"
import {UserContextProvider} from "./components/cart"
import './index.css'

function Result() {
    var handlePrint = ()=>{
        window.print()
    }
    return (
        <UserContextProvider>
        <div>
            <Invoice/>
            <button onClick={handlePrint} className="print">Print</button>
            <Footer/>
        </div>
        </UserContextProvider>
    )
}

export default Result
