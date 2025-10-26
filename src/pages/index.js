import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import Heading from "@theme/Heading";
import styles from "./index.module.css";
import "./index.css";

import Accordion from "../components/faq";
import WelcomeBlock from "../components/intro_content";
import FeatureCard from '../components/featurescard';


import Hero from '../components/Hero';
import Features from '../components/Features';



export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={` Gruhanaksha`}
      description="Gruhanaksha is a QGIS plugin developed specifically to support the deliverables of the SVAMITVA (Survey of Villages and Mapping with Improvised Technology in Village Areas) scheme. It is designed to assist SVAMITVA team and GIS professionals in efficiently handling cadastral mapping tasks and generating standardized outputs required under the program. <head />"
    >
      {/* <HomepageHeader /> */}
      <div className="scroll"></div>

      <Hero />
      <Features />

    </Layout>
  );
}
