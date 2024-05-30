import React from "react";
import OurMission from "../components/Site/About/OurMission";
import Sciencebanner from "../components/Site/Subject-curriculum/Sciencebanner";

export default function About() {
  return (
    <>
      <Sciencebanner bool={true} />
      <OurMission />
    </>
  );
}
