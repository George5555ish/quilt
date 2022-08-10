import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Laptop from "../../assets/laptop-1.svg"
import { useUserData } from "../../stores/useUserData";
import { useWallet } from "../../hooks/useWallet";
import { Mainpage } from "./Mainpage";
import NavMenu from "../base/NavMenu";
import SideBar from "../Sidebar"
interface HomepageProps {}

export const Homepage: React.FC<HomepageProps> = () => {
  const isLogged = useUserData((state) => state.isLogged);
  const address = useUserData((state) => state.address);
  const [isConnecting, connectWallet, disconnectWallet] = useWallet();

  useEffect(() => {
    connectWallet();
  }, [connectWallet]);

  return (
    
    

    <div className="flex">

      {isLogged === true ? (
        <>

          {/* <SideBar /> */}
          <Mainpage />
        </>
      
       ) : ( 
         <>

          <div className="w-full dapp-content dapp-bg">

          <div className="initial-land md:h-screen w--full justify-items-end items-center lg:grid-cols-2 px-1 py-8 relative m-0 homepage_hc_container">
           
              <img src={Laptop} className="w-5/6" alt="" />
           

            <div className="text-left justify-self-start homepage_hc_txt_container">
              <h1 className="text-white main-heading xs:text-xs">encrypted<div className='main-highlighted-text'>social protocol</div></h1>
              <p className="font-medium text-white mb-10 mr-5 text-[25px] lg:w-[40ch] w-4/6">We provide a human element to the blockchain by allowing users to socialise and transact, securely and anonymously across the crypto space.</p>

              <div className='flex justify-center lg:block'>
              <Link to="/auth"
                  className="mt-30 w-1/3 h6 secondary-button btn btn-default btn-pills main-cta homepage_hc_btn"
                >
                  Connect Wallet
                </Link>
              </div>
              
            </div>

          </div>

        </div>
        
        </> 
              )
    }
    </div>
  );
};