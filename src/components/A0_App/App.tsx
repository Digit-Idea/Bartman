import React from 'react';
import style from "./App.module.scss"
import {Header} from "../A1_Header/Header";
import {BurgerMenu} from "../A2_BurgerMenu/BurgerMenu";
import {Route, Routes} from 'react-router-dom';
import {PlayPage} from "../A5_PlayPage/PlayPage";
import {Footer} from "../A3_Footer/Footer";
import {Preloader} from "../A6_Preloader/Preloader";
import clsx from "clsx";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/useStore";

const HomePage = React.lazy(() => import('../A4_HomePage/HomePage'));

export const App = observer(() => {
    const {loading} = useStore();

    return (
        <div className={clsx({
            [style.app]: true,
            [style.app_noScroll]: loading,
        })}>

            {/*<p className={style.test}>*/}
            {/*    Temporarily unavailable*/}
            {/*</p>*/}

            <Header/>
            <BurgerMenu/>

            <React.Suspense fallback={<Preloader/>}>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/play' element={<PlayPage/>}/>
                </Routes>
            </React.Suspense>

            <Footer/>

            <p className={style.right}>© 2022 BartMAN. All rights reserves</p>

        </div>
    );
})

