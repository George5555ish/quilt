import { Link, useNavigate } from "react-router-dom";
import Messages from '../../assets/messages.svg';
import Group from '../../assets/group.svg';
import Settings from '../../assets/settings.svg';
import React, { useCallback, useEffect, useState } from "react";
// import { AnimationOnScroll } from 'react-animation-on-scroll';

import Cube from "../../assets/Cube.svg"
import Cube2 from "../../assets/Cube2.svg"
import MetamaskIcon from "../../assets/metamask-icon.svg"
import { useUserData } from "../../stores/useUserData";
import { useWallet } from "../../hooks/useWallet";
import { useGunAccount } from "../../stores/useGunAccount"; 
import { IsLoggedCheck } from "./IsLoggedCheck";
import { Mainpage } from "../pages/Mainpage";
import NavMenu from "./NavMenu";
import { NavBar } from "../NavBar";
import SideBar from "../Sidebar"
import { IsAuthLoggedCheck } from "./IsAuthLoggedCheck";


interface AuthProps {}

export const Auth: React.FC<AuthProps> = () => {
    const isLogged = useUserData((state) => state.isLogged);
    const isGunLogged = useGunAccount((state) => state.isLogged);
    const navigate = useNavigate();
    // if (isGunLogged) {
    //     navigate('/')
    // }
    return ( 
        <div>
     

          <div className="auth w-full dapp-content dapp-bg auth_hc_container">
         <div className="auth_sidebar_hc_container">
         <SideBar />
         </div>
          <img src={Cube} className="cube cube-1 cube_hc_img" />
                    {/* <AnimationOnScroll animateIn="animate__zoomIn" >
                        <img src={Cube} className="cube cube-1" />
                    </AnimationOnScroll> */}
                            <div className="walletConnect">
                                <div className="walletConnect-card">
                                <h1>Connect your wallet</h1>
                                <div className="walletConnect-btn">
                                    <img src={MetamaskIcon} alt="metamask-icon" />
                                    
                                    <IsAuthLoggedCheck />
                                </div>
                            </div>
                            </div>
                            <img src={Cube2} className="cube cube-2 cube_hc_img" />
                    {/* <AnimationOnScroll animateIn="animate__zoomIn" >
                        <img src={Cube2} className="cube cube-2" />
                    </AnimationOnScroll> */}

                        </div>

                      
        </div>
                    )

                    }
    

export default Auth