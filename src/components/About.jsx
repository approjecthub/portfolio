import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        <p className="my-8">
          Currently I am working in Velotio as Full Stack developer. Here I work
          in react, nextjs, nodejs, nestjs, typescript, serverless, redis, AWS,
          Azure, postgres, MySQL, mongodb, twilio, mailgun, sendgrid, unit
          testing. I have worked on many both B2B & B2C applications so far,
          majorly in health care domain. In this tenure I got chance to fix many
          potential production issues which is related to security, performance
          optimisation, scaling. I developed a cron scheduler from scratch which
          is optimised for our business needs and it's performing much better
          than existing azenda based scheduler.
        </p>
        <p className="my-8">
          Previously I have worked in TCS. Here I worked Microsoft Power
          Platform where mostly my work includes developing custom components
          using PCF,SPFx (Javascript based framewroks).
        </p>
        <p className="my-8">
          Since My tech stacks are mainly based Javascript, so I also believe in
          having in depth knowledge in Vanilla Javascript. For that I develop
          many small Javscript projects like( Tic Tac Toe game, Snake game, Text
          to speech app etc.).All projects are available in my Github.
        </p>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");
