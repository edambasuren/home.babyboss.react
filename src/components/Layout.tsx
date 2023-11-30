import { FC, PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import LeftMenu from "./LeftMenu";

const Layout: FC<PropsWithChildren> = () => {
  return (
    <>
      <Header />

      <div id='body_bg'>
        <div id='body'>

          <LeftMenu />

          <Outlet />

        </div>

        <div style={{clear: "both"}}></div>
      </div>

      <div id="body_bottom"></div>

      <Footer />
    </>
  );
}

export default Layout;
