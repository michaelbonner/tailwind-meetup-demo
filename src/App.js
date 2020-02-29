import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PricingTall from "./components/PricingTall";
import PricingWide from "./components/PricingWide";

import "./tailwind.css";

const links = [
  {
    title: "Tailwind CSS Meetup Demo",
    path: "/"
  },
  {
    title: "Pricing Wide",
    path: "/pricing-wide"
  },
  {
    title: "Pricing Tall",
    path: "/pricing-tall"
  }
];

export default function App() {
  return (
    <Router>
      <div className="antialiased font-sans">
        <nav className="bg-indigo-400 text-white text-xl font-semibold">
          <ul className="flex py-4">
            {links.map(link => (
              <li className="px-4" key={link.path}>
                <Link to={link.path}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <Switch>
          <Route path="/pricing-tall">
            <PricingTall />
          </Route>
          <Route path="/pricing-wide">
            <PricingWide />
          </Route>
          <Route path="/">
            <div className="w-full py-24 flex flex-col justify-center items-center">
              <div className="text-5xl">Hello Meetup</div>
              <a className="w-64 mt-14" href="https://tailwindcss.com/">
                <img
                  alt="Tailwind CSS"
                  className="w-64"
                  src={require("./images/tailwind-logo.svg")}
                />
              </a>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
