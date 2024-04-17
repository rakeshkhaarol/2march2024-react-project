
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { PiPhoneCallLight } from 'react-icons/pi'

export default function Footer() {
    return (
        <div className='container-fluid footer-1'>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='row'>
                        <div className='col-1 position-relative'>
                            <div className='footer_icon' data-bs-toggle="tooltip" data-bs-placement="top" title="Location">
                                <FaLocationDot className="fs-4 position-absolute top-50 start-50 translate-middle" />
                            </div>
                        </div>
                        <div className='col-11 col-md-9'>
                            <div>Shop No- 33</div>
                            <div>Neemuch MP</div>
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <div className='col-1 position-relative'>
                            <div className='footer_icon' data-bs-toggle="tooltip" data-bs-placement="top" title="Colling Number">
                                <PiPhoneCallLight className="fs-4 position-absolute top-50 start-50 translate-middle" />
                            </div>
                        </div>
                        <div className='col-11 col-md-9 fs-4'>+916263936466</div>
                    </div>
                    <div className='row mt-3'>
                        <div className='col-1 position-relative'>
                            <div className='footer_icon' data-bs-toggle="tooltip" data-bs-placement="top" title="Gmail">
                                <AiOutlineMail className="fs-4 position-absolute top-50 start-50 translate-middle" />
                            </div>
                        </div>
                        <div className='col-11 col-md-9 fs-4 ' style={{ color: 'blueviolet' }}>ApnaSafaHouse@gmail.com</div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='fs-5'>About The Company</div>
                    <p className='text-secondary'>Established in the year 2022, Apna Safa House in Village-Surajna, Jodhpur is a top player in the category Turban Retailers in the Jodhpur. This well-known establishment acts as a one-stop destination servicing customers both local and from other parts of Neemuch</p>
                    <div className='d-flex justify-content-start justify-content-md-start'> {/* Utilizing Bootstrap flex utilities */}
                        <a href='https://www.facebook.com/' className='me-2'>
                            <FaFacebook className="fs-4 text-white" />
                        </a>
                        <a href='https://www.instagram.com/' className='me-2'>
                            <FaInstagram className="fs-4 text-white" />
                        </a>
                        <a href='https://www.whatsapp.com/' className='me-2'>
                            <FaWhatsapp className="fs-4 text-white" />
                        </a>
                        <a href='https://twitter.com/'>
                            <FaTwitter className="fs-4 text-white" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
