"use client";;
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";

export const TextRevealByWord = ({
  text,
  className,
}) => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const words = text.split(" ");

  return (
    (<div ref={targetRef} className={cn("relative z-0 h-[200vh]", className)}>
        
      <div
        className={
          "sticky top-0 mx-auto flex h-[60%] max-w-8xl items-center bg-transparent px-[1rem] py-[5rem]"
        }>
        <p
          ref={targetRef}
          className={
            "flex flex-wrap p-5 text-base font-bold text-black/20 dark:text-white/20 md:p-8 md:text-base lg:p-10 lg:text-base xl:text-base "
          }>
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              (<Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>)
            );
          })}
        </p>
      </div>
    </div>)
  );
};

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 2]);
  return (
    (<span className="xl:lg-3 relative mx-1 lg:mx-2.5">
      <span className={"absolute opacity-30 "}>{children}</span>
      <motion.span style={{ opacity: opacity }} className={"text-white dark:text-dark"}>
        {children}
      </motion.span>
    </span>)
  );
};

export default TextRevealByWord;
