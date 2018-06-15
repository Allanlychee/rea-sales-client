import React, {Fragment } from 'react'
import './userReg.css'

const userReg = () => (

    <Fragment>
        <div>
            <div className="userProfilePhoto container clearfix">
                <div className="avatar">
                    <input id="fileUpload" type="file" />
                    {/* <svg version="1.1" id="camera" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            viewBox="0 0 25 15" enable-background="new 0 0 25 15" xml:space="preserve"> */}
                    {/* <path id="cameraFrame" fill="none" stroke="white" stroke-miterlimit="10" d="M23.1,14.1H1.9c-0.6,0-1-0.4-1-1V1.9c0-0.6,0.4-1,1-1h21.2c0.6,0,1,0.4,1,1v11.3C24.1,13.7,23.7,14.1,23.1,14.1z" />
                    <path id="circle" fill="none" stroke="#ffffff" stroke-width="1.4" stroke-miterlimit="12" d="M17.7,7.5c0-2.8-2.3-5.2-5.2-5.2S7.3,4.7,7.3,7.5s2.3,5.2,5.2,5.2S17.7,10.3,17.7,7.5z" />
                    <g id="plus">
                        <path fill="none" id="plusLine" className="line" stroke="#ffffff" stroke-linecap="round" stroke-miterlimit="10" d="M20.9,2.3v4.4" />
                        <path fill="none" className="line" stroke="#ffffff" stroke-linecap="round" stroke-miterlimit="10" d="M18.7,4.6h4.4" />
                    </g> */}
                     {/* </svg> */}
                    <div id="openModal">
                        <span>Drop here or</span>
                    </div>
                </div>
            </div>
            
            <form action="userreg.js">
                <div className="regContainer">
                    {/* <!-- username --> */}
                    <div className="row">
                        <div className="input-field col s12">

                            <label htmlFor="username">Username
                        <i className="material-icons">person</i>
                            </label>
                            <input id="username" type="text" className="validate" />
                        </div>
                    </div>
                    {/* <!-- email --> */}
                    <div className="row">
                        <div className="input-field col s12">

                            <label htmlFor="email">E-Mail
                        <i className="material-icons">email</i>
                            </label>
                            <input id="email" type="text" className="validate" />
                        </div>
                    </div>

                    {/* <!-- password --> */}
                    <div className="row">
                        <div className="input-field col s12">

                            <label htmlFor="password">Password
                        <i className="material-icons">lock</i>
                            </label>
                            <input id="password" type="password" className="validate" />
                        </div>
                    </div>

                    {/* <!-- repeat --> */}
                    <div className="row">
                        <div className="input-field col s12">

                            <label htmlFor="password">Re-Enter Password
                        <i className="material-icons">lock</i>
                            </label>
                            <input id="passwordVerify" type="password" className="validate" />
                        </div>
                    </div>


                    {/* <!-- phone number --> */}
                    <div className="row">
                        <div className="input-field col s12">

                            <label htmlFor="phone">Phone Number
                        <i className="material-icons">local_phone</i>
                            </label>
                            <input id="phone" type="number" className="validate" />
                        </div>
                        {/* <!-- end registration container --> */}
                    </div>


                    {/* <!-- submit button --> */}
                    <div className="submitbtn center-align valign">

                        <a className="btn-flat">Submit</a>
                        <i className="material-icons">arrow_forward</i>
                    </div>
                </div>

            </form>
        </div >
    </Fragment >
)

export default userReg