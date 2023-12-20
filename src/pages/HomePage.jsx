// import { NavLink } from "react-router-dom";
// import styles from "./Homepage.module.css";

import { NavLink } from "react-router-dom";
import AppNav from "../components/AppNav";
import PageNav from "../components/PageNav";

export default function Homepage() {
  return (
    // <main className={styles.homepage}>
    //   <section>
    //     <h1>
    //       You travel the world.
    //       <br />
    //       WorldWise keeps track of your adventures.
    //     </h1>
    //     <h2>
    //       A world map that tracks your footsteps into every city you can think
    //       of. Never forget your wonderful experiences, and show your friends how
    //       you have wandered the world.
    //     </h2>

    //     <Link to="/app" className="cta">
    //       Start Tracking Now
    //     </Link>
    //   </section>
    // </main>
    <div className="">
      <PageNav />
      <AppNav />
      <NavLink to="/app">Go to the App</NavLink>
    </div>
  );
}
