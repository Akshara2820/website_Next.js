import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Header from "./Components/Header";
import Home1 from "./Components/Home1";
import About from "./Components/About";
import Service from "./Components/Service";
import Project from "./Components/Project";
import Peopletalk from "./Components/Peopletalk";
import Collaboration from "./Components/Collaboration";
import Footer from "./Components/Footer";


export default function Home() {
  return (
    <>

<Header/>
<Home1/>
<About/>
<Service/>
<Project/>
<Peopletalk/>
<Collaboration/>
<Footer/> 





    </>
  );
}
