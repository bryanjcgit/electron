import { Navigate, NavLink, Route, Routes } from "react-router-dom"
import { LazyOne, LazyThree, LazyTwo } from "../01-lazyload/pages"
import { ShoppingPage } from "../pages/ShoppingPage/ShoppingPage"

export const LazyLayout = () => {
  return (
    <div>
        <h1>LazyLayout Page</h1>

        <ul>
            <li>
                <NavLink to="lazyone"> Lazy Uno </NavLink>
            </li>
            <li>
                <NavLink to="lazytwo"> Lazy Dos </NavLink>
            </li>
            <li>
                <NavLink to="lazythree"> Lazy Tres </NavLink>
            </li>
        </ul>

        <Routes>
            <Route path="lazyone" element={ <LazyOne/> }/>
            <Route path="lazytwo" element={ <LazyTwo/> }/>
            <Route path="lazythree" element={ <LazyThree/> }/>
            <Route path="shopping" element={ <ShoppingPage/> }/>

            {/* <Route path="*" element={ <span> No found </span>}/> */}
            <Route path="*" element={ <Navigate replace to={"lazyone"} />}/>

        </Routes>

    </div>
  )
}
export default LazyLayout