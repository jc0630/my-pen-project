"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  AlarmClockIcon,
  HeartHandshakeIcon,
  LeafIcon,
  RecycleIcon,
  ShieldCheckIcon,
} from "@/components/icons";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
} as const;

const gridContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.25 },
  },
};

const gridItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
} as const;

export default function About() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="w-full bg-[var(--color-white)] scroll-mt-[110px]">
      <div className="relative mx-auto max-w-[1440px] w-full box-border h-fit shrink-0 flex flex-row gap-[64px] p-[96px_64px] justify-start items-center">
        <motion.div
          initial={reduceMotion ? "show" : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="box-border w-[560px] shrink-0 h-[520px] relative"
        >
          <div className="box-border w-[307px] h-[327px] absolute left-0 top-0 flex flex-row gap-0 justify-start items-start rounded-[32px] overflow-hidden [z-index:0]">
            <Image src="/images/about-1.png" alt="清潔隊員整理資源回收物" fill className="object-cover" />
          </div>
          <div className="box-border w-[349px] h-[248px] absolute left-[211px] top-[272px] flex flex-row gap-0 justify-start items-start [outline:8px_solid_var(--color-white)] [outline-offset:-4px] rounded-[28px] overflow-hidden [z-index:1]">
            <Image src="/images/about-2.png" alt="清潔車隊停靠作業畫面" fill className="object-cover" />
          </div>
          <div className="animate-float-slow box-border w-[220px] h-fit [box-shadow:0px_12px_32px_0px_#E5B7C71F] absolute left-[326px] top-[84px] flex flex-col gap-[6px] p-[18px_20px] justify-start items-start bg-[var(--color-white)] rounded-[20px] [z-index:2]">
            <div className="box-border w-fit h-fit shrink-0 flex flex-row gap-[10px] justify-start items-center">
              <div className="box-border w-[36px] shrink-0 h-[36px] flex flex-row gap-0 justify-center items-center bg-[var(--color-mint-light)] rounded-[12px] transition-transform duration-300 hover:scale-110">
                <LeafIcon className="box-border w-[19px] shrink-0 h-[19px]" fill="#3FA98A" />
              </div>
              <div className="text-[18px]/[normal] box-border text-[var(--color-text-primary)] font-main font-bold text-left [white-space:nowrap]">
                減碳 32%
              </div>
            </div>
            <div className="text-[12px]/[20px] box-border w-full text-[var(--color-text-secondary)] font-main font-normal text-left">
              全車隊改用低汙染動力，年減碳排放超過 180 公噸。
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={reduceMotion ? "show" : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="box-border [flex:1_1_0] h-fit flex flex-col gap-[20px] justify-start items-start"
        >
          <div className="text-[13px]/[normal] box-border text-[var(--color-pink-500)] font-main font-bold tracking-[1.6px] text-left [white-space:nowrap]">
            ABOUT US ‧ 關於我們
          </div>
          <div className="text-[38px]/[55px] box-border w-full text-[var(--color-text-primary)] font-main font-bold text-left">
            一支把環境當自己家在照顧的清潔車隊
          </div>
          <div className="text-[16px]/[31px] box-border w-full text-[var(--color-text-secondary)] font-main font-normal text-left">
            潔淨家園成立於 2010 年，從一台壓縮式垃圾車起步，如今擁有 28
            輛合法登記的環保清運車輛。我們相信乾淨的街道不只是服務，而是一座城市的呼吸方式。
          </div>
          <motion.div
            initial={reduceMotion ? "show" : "hidden"}
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={gridContainer}
            className="box-border w-full h-fit shrink-0 flex flex-col gap-[14px] p-[10px_0px_0px_0px] justify-start items-start"
          >
            <div className="box-border w-full h-fit shrink-0 flex flex-row gap-[14px] justify-start items-start">
              <motion.div
                variants={gridItem}
                className="box-border [flex:1_1_0] h-fit flex flex-row gap-[12px] p-[16px] justify-start items-start bg-[var(--color-pink-50)] rounded-[18px]"
              >
                <div className="box-border w-[38px] shrink-0 h-[38px] flex flex-row gap-0 justify-center items-center bg-[var(--color-white)] rounded-[12px] transition-transform duration-300 hover:scale-110">
                  <ShieldCheckIcon className="box-border w-[19px] shrink-0 h-[19px]" fill="var(--color-pink-500)" />
                </div>
                <div className="box-border [flex:1_1_0] h-fit flex flex-col gap-[4px] justify-start items-start">
                  <div className="text-[15px]/[21px] box-border text-[var(--color-text-primary)] font-main font-bold text-left [white-space:nowrap]">
                    合法許可
                  </div>
                  <div className="text-[12.5px]/[20px] box-border w-full text-[var(--color-text-secondary)] font-main font-normal text-left">
                    甲級廢棄物清除許可證
                  </div>
                </div>
              </motion.div>
              <motion.div
                variants={gridItem}
                className="box-border [flex:1_1_0] h-fit flex flex-row gap-[12px] p-[16px] justify-start items-start bg-[var(--color-pink-50)] rounded-[18px]"
              >
                <div className="box-border w-[38px] shrink-0 h-[38px] flex flex-row gap-0 justify-center items-center bg-[var(--color-white)] rounded-[12px] transition-transform duration-300 hover:scale-110">
                  <AlarmClockIcon className="box-border w-[19px] shrink-0 h-[19px]" fill="var(--color-pink-500)" />
                </div>
                <div className="box-border [flex:1_1_0] h-fit flex flex-col gap-[4px] justify-start items-start">
                  <div className="text-[15px]/[21px] box-border text-[var(--color-text-primary)] font-main font-bold text-left [white-space:nowrap]">
                    準時抵達
                  </div>
                  <div className="text-[12.5px]/[20px] box-border w-full text-[var(--color-text-secondary)] font-main font-normal text-left">
                    GPS 即時追蹤派車系統
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="box-border w-full h-fit shrink-0 flex flex-row gap-[14px] justify-start items-start">
              <motion.div
                variants={gridItem}
                className="box-border [flex:1_1_0] h-fit flex flex-row gap-[12px] p-[16px] justify-start items-start bg-[var(--color-pink-50)] rounded-[18px]"
              >
                <div className="box-border w-[38px] shrink-0 h-[38px] flex flex-row gap-0 justify-center items-center bg-[var(--color-white)] rounded-[12px] transition-transform duration-300 hover:scale-110">
                  <RecycleIcon className="box-border w-[19px] shrink-0 h-[19px]" fill="var(--color-pink-500)" />
                </div>
                <div className="box-border [flex:1_1_0] h-fit flex flex-col gap-[4px] justify-start items-start">
                  <div className="text-[15px]/[21px] box-border text-[var(--color-text-primary)] font-main font-bold text-left [white-space:nowrap]">
                    確實分類
                  </div>
                  <div className="text-[12.5px]/[20px] box-border w-full text-[var(--color-text-secondary)] font-main font-normal text-left">
                    源頭分類與資源回收流程
                  </div>
                </div>
              </motion.div>
              <motion.div
                variants={gridItem}
                className="box-border [flex:1_1_0] h-fit flex flex-row gap-[12px] p-[16px] justify-start items-start bg-[var(--color-pink-50)] rounded-[18px]"
              >
                <div className="box-border w-[38px] shrink-0 h-[38px] flex flex-row gap-0 justify-center items-center bg-[var(--color-white)] rounded-[12px] transition-transform duration-300 hover:scale-110">
                  <HeartHandshakeIcon className="box-border w-[19px] shrink-0 h-[19px]" fill="var(--color-pink-500)" />
                </div>
                <div className="box-border [flex:1_1_0] h-fit flex flex-col gap-[4px] justify-start items-start">
                  <div className="text-[15px]/[21px] box-border text-[var(--color-text-primary)] font-main font-bold text-left [white-space:nowrap]">
                    貼心服務
                  </div>
                  <div className="text-[12.5px]/[20px] box-border w-full text-[var(--color-text-secondary)] font-main font-normal text-left">
                    專人窗口 24 小時回覆
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
