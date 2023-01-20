import { Fragment } from "react";
import Navbar from './navbar';
import ImageHome from './imageHome';
import Footer from './footer';

function Layout(props){
  return(
    <Fragment>
      <Navbar />
      <ImageHome />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  )
}

export default Layout;