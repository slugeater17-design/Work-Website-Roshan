"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "@/components/Hero";
import Ventures from "@/components/Ventures";
import Thread from "@/components/Thread";
import SocialProof from "@/components/SocialProof";
import About from "@/components/About";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Ventures />
      <Thread />
      <SocialProof />
      <About />
      <ContactCTA />
    </main>
  );
}
