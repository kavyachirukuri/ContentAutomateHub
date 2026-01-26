"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none will-change-contents">
      {/* Large animated gradient orbs - reduced blur and simplified */}
      <motion.div
        className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-emerald-300/20 to-emerald-500/10 blur-3xl will-change-transform"
        animate={{
          x: [0, 100, 0],
          y: [0, 80, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ transform: "translateZ(0)" }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-teal-300/20 to-cyan-500/10 blur-3xl will-change-transform"
        animate={{
          x: [0, -100, 0],
          y: [0, -80, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ transform: "translateZ(0)" }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-cyan-300/12 to-teal-400/8 blur-3xl will-change-transform"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ transform: "translateZ(0)" }}
      />

      {/* Simplified animated mesh gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/15 via-transparent to-teal-50/15" />

      {/* Static grid pattern - no animation to reduce flicker */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(0,0,0,0.2)_70%,transparent_110%)]" />

      {/* Reduced floating particles - fewer for better performance */}
      {[...Array(12)].map((_, i) => {
        const size = Math.random() * 3 + 1.5;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const duration = 5 + Math.random() * 3;
        const delay = Math.random() * 3;

        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-emerald-400/15 will-change-transform"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: `${size}px`,
              height: `${size}px`,
              transform: "translateZ(0)",
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              delay: delay,
              ease: "easeInOut",
            }}
          />
        );
      })}

      {/* Single radial gradient wave - simplified */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.08)_0%,transparent_60%)] will-change-transform"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ transform: "translateZ(0)" }}
      />
    </div>
  );
}
