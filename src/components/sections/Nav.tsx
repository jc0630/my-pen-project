"use client";

import { useEffect, useState } from "react";
import { RecycleIcon } from "@/components/icons";

const NAV_LINKS = [
  { label: "關於我們", href: "#about" },
  { label: "服務項目", href: "#services" },
  { label: "車輛介紹", href: "#fleet" },
  { label: "專業認證", href: "#certifications" },
  { label: "聯絡我們", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[var(--color-white)] shadow-[0px_4px_20px_0px_#00000014]"
          : "bg-[var(--color-white)]/0 shadow-[0px_0px_0px_0px_#00000000]"
      }`}
    >
      <div className="box-border w-full h-fit shrink-0 flex flex-row gap-0 p-[20px_64px] justify-between items-center">
        <a
          href="#"
          className="box-border w-fit shrink-0 h-fit flex flex-row gap-[10px] justify-start items-center transition-transform duration-150 active:scale-[0.97]"
        >
          <div className="box-border w-[40px] shrink-0 h-[40px] flex flex-row gap-0 justify-center items-center bg-[var(--color-pink-500)] rounded-[14px]">
            <RecycleIcon className="box-border w-[22px] shrink-0 h-[22px]" fill="var(--color-white)" />
          </div>
          <div className="box-border w-fit shrink-0 h-fit flex flex-col gap-0 justify-start items-start">
            <div className="text-[19px]/[25px] box-border text-[var(--color-text-primary)] font-main font-bold text-left [white-space:nowrap]">
              潔淨家園
            </div>
            <div className="text-[9px]/[12px] box-border text-[var(--color-pink-500)] font-main font-medium tracking-[1.6px] text-left [white-space:nowrap]">
              CLEAN HOME ECO
            </div>
          </div>
        </a>
        <div className="box-border w-fit shrink-0 h-fit flex flex-row gap-[34px] justify-start items-center">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative box-border text-[15px]/[normal] text-[var(--color-text-secondary)] font-main font-medium text-left [white-space:nowrap] transition-colors duration-200 hover:text-[var(--color-pink-500)]"
            >
              {link.label}
              <span className="absolute left-0 -bottom-[3px] h-[1.5px] w-full origin-left scale-x-0 bg-[var(--color-pink-500)] transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="box-border w-fit shrink-0 h-fit flex flex-row gap-[8px] p-[12px_26px] justify-start items-center bg-[var(--color-pink-500)] rounded-[999px] transition-all duration-300 hover:scale-105 hover:shadow-[0px_8px_20px_0px_#FF7BA659] active:scale-[0.97]"
        >
          <div className="text-[15px]/[normal] box-border text-[var(--color-white)] font-main font-bold text-left [white-space:nowrap]">
            免費估價
          </div>
        </a>
      </div>
    </header>
  );
}
