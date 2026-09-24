"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRightIcon,
  Building2Icon,
  FlaskConicalIcon,
  LeafIcon,
  PackageOpenIcon,
  SparklesIcon,
  Trash2Icon,
} from "@/components/icons";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
} as const;

const cardGrid = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
} as const;

const cardHover =
  "transition-all duration-300 hover:-translate-y-1 hover:shadow-[0px_16px_32px_0px_#D98FAB33]";

export default function Services() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="services" className="w-full bg-[var(--color-pink-50)] scroll-mt-[110px]">
      <div className="mx-auto max-w-[1440px] w-full box-border h-fit shrink-0 flex flex-col gap-[48px] p-[96px_64px] justify-start items-center">
        <motion.div
          initial={reduceMotion ? "show" : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="box-border w-[760px] h-fit shrink-0 flex flex-col gap-[14px] justify-start items-center"
        >
          <div className="text-[13px]/[normal] box-border text-[var(--color-pink-500)] font-main font-bold tracking-[1.6px] text-left [white-space:nowrap]">
            SERVICES ‧ 服務項目
          </div>
          <div className="text-[38px]/[55px] box-border w-full text-[var(--color-text-primary)] font-main font-bold text-center">
            從一袋垃圾到一整棟大樓，我們都接得住
          </div>
          <div className="text-[16px]/[30px] box-border w-full text-[var(--color-text-secondary)] font-main font-normal text-center">
            依照廢棄物種類與清運頻率彈性配車，提供合法聯單與處理紀錄。
          </div>
        </motion.div>
        <motion.div
          initial={reduceMotion ? "show" : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={cardGrid}
          className="box-border w-full h-fit shrink-0 flex flex-row gap-[24px] justify-start items-start"
        >
          <motion.div
            variants={cardItem}
            className={`box-border [flex:1_1_0] h-[258px] flex flex-col gap-[14px] p-[28px] justify-start items-start bg-[var(--color-pink-500)] rounded-[26px] ${cardHover}`}
          >
            <div className="box-border w-[52px] h-[52px] shrink-0 flex flex-row gap-0 justify-center items-center bg-[#FFFFFF33] rounded-[16px]">
              <Trash2Icon className="box-border w-[25px] shrink-0 h-[25px]" fill="var(--color-white)" />
            </div>
            <div className="text-[20px]/[28px] box-border text-[var(--color-white)] font-main font-bold text-left [white-space:nowrap]">
              社區定期清運
            </div>
            <div className="text-[14.5px]/[27px] box-border w-full text-[#FFFFFFD9] font-main font-normal text-left">
              固定班表到府收運，含一般垃圾、廚餘與資源回收分流。
            </div>
            <a
              href="#services"
              className="group box-border w-fit h-fit shrink-0 flex flex-row gap-[6px] p-[6px_0px_0px_0px] justify-start items-center transition-transform duration-150 active:scale-[0.97]"
            >
              <div className="text-[14px]/[normal] box-border text-[var(--color-white)] font-main font-bold text-left [white-space:nowrap]">
                了解更多
              </div>
              <ArrowRightIcon
                className="box-border w-[15px] shrink-0 h-[15px] transition-transform duration-300 group-hover:translate-x-1"
                fill="var(--color-white)"
              />
            </a>
          </motion.div>
          <motion.div
            variants={cardItem}
            className={`box-border [flex:1_1_0] h-[258px] flex flex-col gap-[14px] p-[28px] justify-start items-start bg-[var(--color-white)] rounded-[26px] ${cardHover}`}
          >
            <div className="box-border w-[52px] h-[52px] shrink-0 flex flex-row gap-0 justify-center items-center bg-[var(--color-mint-light)] rounded-[16px]">
              <Building2Icon className="box-border w-[25px] shrink-0 h-[25px]" fill="#3FA98A" />
            </div>
            <div className="text-[20px]/[28px] box-border text-[var(--color-text-primary)] font-main font-bold text-left [white-space:nowrap]">
              商辦大樓清潔
            </div>
            <div className="text-[14.5px]/[27px] box-border w-full text-[var(--color-text-secondary)] font-main font-normal text-left">
              為餐飲、辦公與賣場規劃專屬車次，離峰時段不打擾營運。
            </div>
            <a
              href="#services"
              className="group box-border w-fit h-fit shrink-0 flex flex-row gap-[6px] p-[6px_0px_0px_0px] justify-start items-center transition-transform duration-150 active:scale-[0.97]"
            >
              <div className="text-[14px]/[normal] box-border text-[var(--color-pink-600)] font-main font-bold text-left [white-space:nowrap]">
                了解更多
              </div>
              <ArrowRightIcon
                className="box-border w-[15px] shrink-0 h-[15px] transition-transform duration-300 group-hover:translate-x-1"
                fill="var(--color-pink-600)"
              />
            </a>
          </motion.div>
          <motion.div
            variants={cardItem}
            className={`box-border [flex:1_1_0] h-[258px] flex flex-col gap-[14px] p-[28px] justify-start items-start bg-[var(--color-white)] rounded-[26px] ${cardHover}`}
          >
            <div className="box-border w-[52px] h-[52px] shrink-0 flex flex-row gap-0 justify-center items-center bg-[#FFF1CF] rounded-[16px]">
              <PackageOpenIcon className="box-border w-[25px] shrink-0 h-[25px]" fill="#E0A020" />
            </div>
            <div className="text-[20px]/[28px] box-border text-[var(--color-text-primary)] font-main font-bold text-left [white-space:nowrap]">
              大型廢棄物
            </div>
            <div className="text-[14.5px]/[27px] box-border w-full text-[var(--color-text-secondary)] font-main font-normal text-left">
              家具、家電與裝潢廢料到府搬運，一通電話就搞定。
            </div>
            <a
              href="#services"
              className="group box-border w-fit h-fit shrink-0 flex flex-row gap-[6px] p-[6px_0px_0px_0px] justify-start items-center transition-transform duration-150 active:scale-[0.97]"
            >
              <div className="text-[14px]/[normal] box-border text-[var(--color-pink-600)] font-main font-bold text-left [white-space:nowrap]">
                了解更多
              </div>
              <ArrowRightIcon
                className="box-border w-[15px] shrink-0 h-[15px] transition-transform duration-300 group-hover:translate-x-1"
                fill="var(--color-pink-600)"
              />
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          initial={reduceMotion ? "show" : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={cardGrid}
          className="box-border w-full h-fit shrink-0 flex flex-row gap-[24px] justify-start items-start"
        >
          <motion.div
            variants={cardItem}
            className={`box-border [flex:1_1_0] h-[258px] flex flex-col gap-[14px] p-[28px] justify-start items-start bg-[var(--color-white)] rounded-[26px] ${cardHover}`}
          >
            <div className="box-border w-[52px] h-[52px] shrink-0 flex flex-row gap-0 justify-center items-center bg-[var(--color-pink-100)] rounded-[16px]">
              <FlaskConicalIcon className="box-border w-[25px] shrink-0 h-[25px]" fill="var(--color-pink-600)" />
            </div>
            <div className="text-[20px]/[28px] box-border text-[var(--color-text-primary)] font-main font-bold text-left [white-space:nowrap]">
              事業廢棄物
            </div>
            <div className="text-[14.5px]/[27px] box-border w-full text-[var(--color-text-secondary)] font-main font-normal text-left">
              甲級清除許可，全程 GPS 追蹤並提供合法流向聯單。
            </div>
            <a
              href="#services"
              className="group box-border w-fit h-fit shrink-0 flex flex-row gap-[6px] p-[6px_0px_0px_0px] justify-start items-center transition-transform duration-150 active:scale-[0.97]"
            >
              <div className="text-[14px]/[normal] box-border text-[var(--color-pink-600)] font-main font-bold text-left [white-space:nowrap]">
                了解更多
              </div>
              <ArrowRightIcon
                className="box-border w-[15px] shrink-0 h-[15px] transition-transform duration-300 group-hover:translate-x-1"
                fill="var(--color-pink-600)"
              />
            </a>
          </motion.div>
          <motion.div
            variants={cardItem}
            className={`box-border [flex:1_1_0] h-[258px] flex flex-col gap-[14px] p-[28px] justify-start items-start bg-[var(--color-white)] rounded-[26px] ${cardHover}`}
          >
            <div className="box-border w-[52px] h-[52px] shrink-0 flex flex-row gap-0 justify-center items-center bg-[#EEEAFB] rounded-[16px]">
              <SparklesIcon className="box-border w-[25px] shrink-0 h-[25px]" fill="#7C6BD6" />
            </div>
            <div className="text-[20px]/[28px] box-border text-[var(--color-text-primary)] font-main font-bold text-left [white-space:nowrap]">
              社區消毒服務
            </div>
            <div className="text-[14.5px]/[27px] box-border w-full text-[var(--color-text-secondary)] font-main font-normal text-left">
              垃圾集中區除臭消毒，搭配定期病媒防治。
            </div>
            <a
              href="#services"
              className="group box-border w-fit h-fit shrink-0 flex flex-row gap-[6px] p-[6px_0px_0px_0px] justify-start items-center transition-transform duration-150 active:scale-[0.97]"
            >
              <div className="text-[14px]/[normal] box-border text-[var(--color-pink-600)] font-main font-bold text-left [white-space:nowrap]">
                了解更多
              </div>
              <ArrowRightIcon
                className="box-border w-[15px] shrink-0 h-[15px] transition-transform duration-300 group-hover:translate-x-1"
                fill="var(--color-pink-600)"
              />
            </a>
          </motion.div>
          <motion.div
            variants={cardItem}
            className={`box-border [flex:1_1_0] h-[258px] flex flex-col gap-[14px] p-[28px] justify-start items-start bg-[var(--color-white)] rounded-[26px] ${cardHover}`}
          >
            <div className="box-border w-[52px] h-[52px] shrink-0 flex flex-row gap-0 justify-center items-center bg-[var(--color-mint-light)] rounded-[16px]">
              <LeafIcon className="box-border w-[25px] shrink-0 h-[25px]" fill="#3FA98A" />
            </div>
            <div className="text-[20px]/[28px] box-border text-[var(--color-text-primary)] font-main font-bold text-left [white-space:nowrap]">
              回收再利用諮詢
            </div>
            <div className="text-[14.5px]/[27px] box-border w-full text-[var(--color-text-secondary)] font-main font-normal text-left">
              協助企業建立減量方案與 ESG 廢棄物數據報告。
            </div>
            <a
              href="#services"
              className="group box-border w-fit h-fit shrink-0 flex flex-row gap-[6px] p-[6px_0px_0px_0px] justify-start items-center transition-transform duration-150 active:scale-[0.97]"
            >
              <div className="text-[14px]/[normal] box-border text-[var(--color-pink-600)] font-main font-bold text-left [white-space:nowrap]">
                了解更多
              </div>
              <ArrowRightIcon
                className="box-border w-[15px] shrink-0 h-[15px] transition-transform duration-300 group-hover:translate-x-1"
                fill="var(--color-pink-600)"
              />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
