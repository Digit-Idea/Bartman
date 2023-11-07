import * as React from "react";
import style from "./Header.module.scss";
import {HashLink} from "react-router-hash-link";
import burger from "../../assets/png/buttons/burger/default.png";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/useStore";
import arrow from "../../assets/png/A1_Header/arrow.png";
import {ButtonCustom} from "../X_Custom/ButtonCustom/ButtonCustom";

import imgMobileDefault from "../../assets/png/buttons/wallet/mobile/default.png";
import imgMobileClick from "../../assets/png/buttons/wallet/mobile/click.png";
import imgDesktopDefault from "../../assets/png/buttons/wallet/desktop/default.png";
import imgDesktopHover from "../../assets/png/buttons/wallet/desktop/hover.png";
import imgDesktopClick from "../../assets/png/buttons/wallet/desktop/click.png";
import {useNavigate} from "react-router-dom";

import playMobileDefault from "../../assets/png/buttons/home/mobile/default.png";
import playMobileClick from "../../assets/png/buttons/home/mobile/click.png";
import playDesktopDefault from "../../assets/png/buttons/home/desktop/default.png";
import playDesktopHover from "../../assets/png/buttons/home/desktop/hover.png";
import playDesktopClick from "../../assets/png/buttons/home/desktop/click.png";
import {useEffect, useState} from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import {ethers} from "ethers";

export const links = [
    {to: '/#Home', label: 'Home'},
    {to: '/#AboutUs', label: 'About Us'},
    {to: '/#Partners', label: 'Partners'},
    {to: '/#RoadMap', label: 'Road Map'},
    {to: '/#Goal', label: 'Goal'},
    {to: '/#Team', label: 'Team'},
    {to: 'https://bartman.io/upload/bartman.pdf', label: 'Whitepaper'}
]

export const Header = observer(() => {
    const {setBurgerMenu} = useStore();

    const navigate = useNavigate();

    const [provider, setProvider] = useState<any>(null);
    const [currentAccountAddress, setCurrentAccountAddress] = useState<string | null>(null);
    const [balance, setBalance] = useState<string | null>(null);
    const [connecting, setConnecting] = useState(false);
    const [detectingProvider, setDetectingProvider] = useState(false);

    // 1 - определяем наличие провайдера
    useEffect(() => {
        const getProvider = async () => {
            setDetectingProvider(true);
            console.log("start detecting provider", new Date());
            const provider = await detectEthereumProvider();
            return provider
        }
        getProvider()
            .then(result => {
                console.log("end detecting provider", new Date());
                setProvider(result)
            })
            .finally(() => setDetectingProvider(false))
    }, []);

    // 2 - при наличие провайдера устанавливаем обработчики событий "accountsChanged", "chainChanged"
    useEffect(() => {
        if (provider) {
            provider.on('accountsChanged', (accounts: any) => accountChangeHandler(accounts[0]));
            provider.on("chainChanged", chainChangedHandler);
            return () => {
                provider.removeListener('accountsChanged', (accounts: any) => accountChangeHandler(accounts[0]));
                provider.removeListener("chainChanged", chainChangedHandler);
            }
        }
    }, [provider]);

    const accountChangeHandler = async (newAccount: string) => {
        setCurrentAccountAddress(newAccount);
        await getBalance(newAccount);
    }

    const chainChangedHandler = () => {
        window.location.reload();
    }

    const onConnectHandler = async () => {
        if (provider) {
            if (Boolean(currentAccountAddress)) {
                setCurrentAccountAddress("")
            } else {
                try {
                    setConnecting(true);
                    const accounts = await provider.request({method: 'eth_requestAccounts'});
                    await accountChangeHandler(accounts[0]);
                } catch (e: any) {
                    console.log(e)
                    alert(e.message)
                } finally {
                    setConnecting(false);
                }
            }
        } else {
            alert("Please install MetaMask")
        }
    }

    const getBalance = async (newAccount: string) => {
        try {
            const balance = await provider.request({
                method: 'eth_getBalance',
                params: [newAccount, 'latest']
            });
            setBalance(ethers.utils.formatEther(balance))
        } catch (e: any) {
            alert(e.message)
        }
    }


    return (
        <header className={style.header}>
            <div className={style.inner}>

                <div className={style.left}>
                    <button className={style.burgerBtn}
                            onClick={() => setBurgerMenu(true)}
                    >
                        <img src={burger} alt=""/>
                    </button>


                    <nav className={style.links}>
                        {
                            links.map(({to, label}, key) => (
                                <>
                                    {
                                        key === links.length - 1 ? (
                                            <a key={key}
                                               href={to}
                                               target="_blank"
                                               className={style.link}
                                            >
                                                {label}
                                            </a>
                                        ) : (
                                            <HashLink key={key}
                                                      smooth
                                                      to={to}
                                                      className={style.link}
                                            >
                                                {label}
                                            </HashLink>
                                        )
                                    }
                                </>
                            ))
                        }
                    </nav>
                </div>

                <div className={style.right}>


                    {
                        currentAccountAddress && balance && (
                            <>
                                <img src={arrow} alt="" className={style.arrow}/>
                                <div className={style.accountBlock}>
                                    <p className={style.balance}>
                                        {`${Number(balance).toFixed(6)} ETH`}
                                    </p>
                                    <div className={style.account}>
                                        {currentAccountAddress}
                                    </div>
                                </div>
                            </>
                        )
                    }

                    {
                        !currentAccountAddress &&
                        <ButtonCustom widthMobile={68}
                                      heightMobile={42}
                                      widthDesktop={96}
                                      heightDesktop={60}
                                      imgMobileDefault={imgMobileDefault}
                                      imgMobileClick={imgMobileClick}
                                      imgDesktopDefault={imgDesktopDefault}
                                      imgDesktopHover={imgDesktopHover}
                                      imgDesktopClick={imgDesktopClick}
                                      className={style.wallet}
                                      onClick={() => onConnectHandler()}
                        >
                        </ButtonCustom>
                    }

                    <ButtonCustom widthMobile={112}
                                  heightMobile={88}
                                  widthDesktop={250}
                                  heightDesktop={60}
                                  imgMobileDefault={playMobileDefault}
                                  imgMobileClick={playMobileClick}
                                  imgDesktopDefault={playDesktopDefault}
                                  imgDesktopHover={playDesktopHover}
                                  imgDesktopClick={playDesktopClick}
                                  className={style.btn}
                                  onClick={() => navigate('/play')}
                    >
                        <p>How to play</p>
                    </ButtonCustom>

                </div>

            </div>
        </header>
    )
})
