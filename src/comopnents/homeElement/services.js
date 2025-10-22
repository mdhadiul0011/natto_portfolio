"use client"
import React, { useState } from 'react'
import WebDetails from '../service-element/webdtls'
import GraphixDtls from '../service-element/graphixdtls'
import Uiuxdtls from '../service-element/uiuxdesing'
import WordpressDtls from '../service-element/wordpresdtls'
import Reusebtn from '../reuseablecomponent/button'
import Fixedcontainer from '../reuseablecomponent/container'

function Service() {
    const [item, setItem] = useState("")
    const [show, setShow] = useState("webdtls")

    const handleSItemClick = (e)=>{
        setItem(e.target.id);
        
    }
  return (
    <section id='service'>
        <Fixedcontainer>
            <div className='service_elements'>
                <div className='s_head_item'>
                    <div className='s_headline'>
                        <h3>Failure is The Power that Gives <span>Success</span></h3>
                    </div>
                    <div className='s_paragraph'>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised.</p>
                        {/* <button className='btn'>Download</button> */}
                        <Reusebtn>Download</Reusebtn>
                    </div>
                </div>
                <div className='s_items'>
                    <div className='s_element_box'>
                        <div onClick={()=>setShow("webdtls")}>
                            <div onClick={handleSItemClick} id='1' className={item === "1" ? "active-box-item" : 'box-item'}>
                                <h3 id='1'>2020-Web Development</h3>
                                <p id='1'>There are many variations of passages of Lorem Ipsum available, but the.</p>
                            </div>
                        </div>
                        <div  onClick={()=>setShow("graphixdtls")}>
                            <div onClick={handleSItemClick} id='2' className={item  === "2"? "active-box-item" : 'box-item'}>
                                <h3 id='2'>2019-Graphix Design</h3>
                                <p id='2'>There are many variations of passages of Lorem Ipsum available, but the.</p>
                            </div>
                        </div>
                        <div  onClick={()=>setShow("uiuxdtls")}>
                            <div onClick={handleSItemClick} id='3' className={item === "3" ? "active-box-item" : 'box-item'}>
                                <h3 id='3'>2018-UI/UX Design</h3>
                                <p id='3'>There are many variations of passages of Lorem Ipsum available, but the.</p>
                            </div>
                        </div>
                        <div  onClick={()=>setShow("wordpressdtls")}>
                            <div onClick={handleSItemClick} id='4' className={item === "4" ? "active-box-item" : 'box-item'}>
                                <h3 id='4'>2017-Wordpress</h3>
                                <p id='4'>There are many variations of passages of Lorem Ipsum available, but the.</p>
                            </div>
                        </div>
                    </div>
                    <div className='s_elements_dtls'>
                        {
                            show === "webdtls" ?  <WebDetails/> : show === "graphixdtls" ? <GraphixDtls/> : show === "uiuxdtls" ? <Uiuxdtls/> : show === "wordpressdtls" ? <WordpressDtls/> : "webdtls"
                        }
                    </div>
                </div>
            </div>
        </Fixedcontainer>
    </section>
  )
}

export default Service
