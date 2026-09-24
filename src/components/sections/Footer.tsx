"use client";

import { motion, useReducedMotion } from "framer-motion";
import { RecycleIcon } from "@/components/icons";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
} as const;

const footerLink =
  "text-[13.5px]/[20px] box-border text-[#FFFFFF8A] font-main font-normal text-left [white-space:nowrap] transition-colors duration-200 hover:text-white";

export default function Footer() {
  const reduceMotion = useReducedMotion();

  return (
    <footer className="w-full bg-[var(--color-text-primary)]">
      <motion.div
        initial={reduceMotion ? "show" : "hidden"}
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="mx-auto max-w-[1440px] w-full box-border h-fit shrink-0 flex flex-col gap-[36px] p-[56px_64px_36px_64px] justify-start items-start"
      >
        <div className="box-border w-full h-fit shrink-0 flex flex-row gap-[80px] justify-between items-start">
          <div className="box-border w-[360px] shrink-0 h-fit flex flex-col gap-[16px] justify-start items-start">
            <div className="box-border w-fit h-fit shrink-0 flex flex-row gap-[10px] justify-start items-center">
              <div className="box-border w-[38px] shrink-0 h-[38px] flex flex-row gap-0 justify-center items-center bg-[var(--color-pink-500)] rounded-[13px]">
                <RecycleIcon className="box-border w-[21px] shrink-0 h-[21px]" fill="var(--color-white)" />
              </div>
              <div className="text-[19px]/[normal] box-border text-[var(--color-white)] font-main font-bold text-left [white-space:nowrap]">
                潔淨家園
              </div>
            </div>
            <div className="text-[13.5px]/[26px] box-border w-full text-[#FFFFFF8A] font-main font-normal text-left">
              合法立案的環保清除機構，以低碳車隊與透明流向紀錄，陪伴社區與企業一起把環境照顧好。
            </div>
          </div>
          <div className="box-border w-fit shrink-0 h-fit flex flex-row gap-[72px] justify-start items-start">
            <div className="box-border w-fit shrink-0 h-fit flex flex-col gap-[14px] justify-start items-start">
              <div className="text-[14px]/[20px] box-border text-[var(--color-white)] font-main font-bold text-left [white-space:nowrap]">
                服務項目
              </div>
              <a href="#" className={footerLink}>
                社區定期清運
              </a>
              <a href="#" className={footerLink}>
                商辦大樓清潔
              </a>
              <a href="#" className={footerLink}>
                大型廢棄物
              </a>
              <a href="#" className={footerLink}>
                事業廢棄物
              </a>
            </div>
            <div className="box-border w-fit shrink-0 h-fit flex flex-col gap-[14px] justify-start items-start">
              <div className="text-[14px]/[20px] box-border text-[var(--color-white)] font-main font-bold text-left [white-space:nowrap]">
                關於我們
              </div>
              <a href="#" className={footerLink}>
                公司簡介
              </a>
              <a href="#" className={footerLink}>
                車輛設備
              </a>
              <a href="#" className={footerLink}>
                專業認證
              </a>
              <a href="#" className={footerLink}>
                永續報告
              </a>
            </div>
            <div className="box-border w-fit shrink-0 h-fit flex flex-col gap-[14px] justify-start items-start">
              <div className="text-[14px]/[20px] box-border text-[var(--color-white)] font-main font-bold text-left [white-space:nowrap]">
                支援
              </div>
              <a href="#" className={footerLink}>
                常見問題
              </a>
              <a href="#" className={footerLink}>
                收費方式
              </a>
              <a href="#" className={footerLink}>
                隱私權政策
              </a>
              <a href="#" className={footerLink}>
                服務條款
              </a>
            </div>
          </div>
        </div>
        <div className="[box-sizing:content-box] w-[1312px] h-[41.5px] shrink-0 flex flex-row gap-[24px] p-[24px_0px_0px_0px] justify-between items-center [border-width:1px_0px_0px_0px] [border-style:solid] [border-color:#FFFFFF1F] [margin:-0.5px_0px_0px_0px]">
          <div className="text-[12.5px]/[normal] box-border text-[#FFFFFF70] font-main font-normal text-left [white-space:nowrap]">
            © 2026 潔淨家園環保清潔有限公司 ‧ 統編 12345678
          </div>
          <div className="text-[12.5px]/[normal] box-border text-[var(--color-pink-300)] font-main font-normal text-left [white-space:nowrap]">
            乾淨，是一起做出來的
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
