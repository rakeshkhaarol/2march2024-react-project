import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BiLocationPlus, BiPhone } from 'react-icons/bi'
import { FaBeer, FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { FaAddressBook, FaLocationDot } from 'react-icons/fa6'
import { GiMailbox } from 'react-icons/gi'
import { PiPhoneCall, PiPhoneCallLight } from 'react-icons/pi'
import { SiGmail } from 'react-icons/si'

export default function Footer() {

    //hooks area


    //function definetion area

    

      //return statments
    return (
        <div className='container-fluid footer-1'>
            <FontAwesomeIcon icon="fa-solid fa-location-dot" />
            <div className='row'>
                <div className='col'>
                    <div className='row'>
                        <div className='col-1 position-relative'>
                            <div className='footer_icon' data-bs-toggle="tooltip" data-bs-placement="top" title="Location">
                                <FaLocationDot className="fs-4 position-absolute top-50 start-50 translate-middle" />
                            </div>
                        </div>
                        <div className='col-3'>
                            Shop No- 33
                            <div>Neemuch MP</div>
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <div className='col-1 position-relative'>
                            <div className='footer_icon' data-bs-toggle="tooltip" data-bs-placement="top" title="Colling Number">
                                <PiPhoneCallLight className="fs-4 position-absolute top-50 start-50 translate-middle" />
                            </div>
                        </div>
                        <div className='col-3 fs-4'>+916263936466</div>
                    </div>
                    <div className='row mt-3'>
                        <div className='col-1 position-relative'>
                            <div className='footer_icon' data-bs-toggle="tooltip" data-bs-placement="top" title="Gmail">
                                <AiOutlineMail className="fs-4 position-absolute top-50 start-50 translate-middle" />
                            </div>
                        </div>
                        <div className='col-3 fs-4 ' style={{ color: 'blueviolet' }}>ApnaSafaHouse@gmail.com</div>
                    </div>
                </div>
                <div className='col'>
                    <div className='fs-5'>About The Company</div>
                    <p className='text-secondary'>Established in the year 2022, Apna Safa House in Village-Surajna, Jodhpur is a top player in the category Turban Retailers in the Jodhpur. This well-known establishment acts as a one-stop destination servicing customers both local and from other parts of Neemuch</p>
                    <div className='row' style={{ marginTop: "60px" }}>
                        <div className='col-1 position-relative '>
                            <a href='https://www.facebook.com/'>
                                <div className='footer_link' data-bs-toggle="tooltip" data-bs-placement="top" title="Facebook">
                                    <FaFacebook className="fs-4 position-absolute top-50 end-0 ps-1 translate-middle text-white" />
                                </div>
                            </a>
                        </div>
                        <div className='col-1 position-relative '>
                            <a href='https://www.instagram.com/'>
                                <div className='footer_link' data-bs-toggle="tooltip" data-bs-placement="top" title="Instagram">
                                    <FaInstagram className="fs-4 position-absolute top-50 end-0 ps-1 translate-middle text-white" />
                                </div>
                            </a>
                        </div>
                        <div className='col-1 position-relative '>
                            <a href='https://www.whatsapp.com/'>
                                <div className='footer_link' data-bs-toggle="tooltip" data-bs-placement="top" title="Whatsapp">
                                    <FaWhatsapp className="fs-4 position-absolute top-50 end-0 ps-1 translate-middle text-white" />
                                </div>
                            </a>
                        </div>
                        <div className='col-1 position-relative '>
                            <a href='https://twitter.com/'>
                                <div className='footer_link' data-bs-toggle="tooltip" data-bs-placement="top" title="Twitter">
                                    <FaTwitter className="fs-4 position-absolute top-50 end-0 ps-1 translate-middle text-white" />
                                </div>
                            </a>
                        </div>
                    

                    </div>
                </div>
            </div>
        </div>
    )
}
