"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  AlarmClockIcon,
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  MessageCircleIcon,
  PhoneIcon,
  SendIcon,
  YoutubeIcon,
} from "@/components/icons";

const SERVICE_TYPES = ["社區清運", "大型廢棄物", "事業廢棄物", "其他"] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
} as const;

const inputFocus =
  "transition-[outline-color,outline-width,outline-offset] duration-200 focus:[outline:2px_solid_var(--color-pink-500)] focus:outline-offset-[1px]";

const socialHover = "transition-all duration-200 hover:scale-110 hover:bg-[#FFFFFF4D]";

export default function Contact() {
  const [serviceType, setServiceType] = useState<(typeof SERVICE_TYPES)[number]>("社區清運");
  const reduceMotion = useReducedMotion();

  return (
    <section id="contact" className="w-full bg-[var(--color-white)] scroll-mt-[110px]">
      <div className="mx-auto max-w-[1440px] w-full box-border h-fit shrink-0 flex flex-row gap-0 p-[96px_64px] justify-start items-start">
        <motion.div
          initial={reduceMotion ? "show" : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          className="box-border [flex:1_1_0] h-[659px] flex flex-row gap-0 justify-start items-start bg-[var(--color-pink-50)] rounded-[36px] overflow-hidden"
        >
          <div className="box-border [flex:1_1_0] h-full flex flex-col gap-[24px] p-[52px] justify-start items-start bg-[var(--color-pink-500)] [background-image:linear-gradient(-135.131deg,_#FF9BBD_14.645%,_#ED5A8B_85.355%)] bg-no-repeat bg-[length:100%_100%] overflow-hidden">
            <div className="text-[13px]/[normal] box-border text-[#FFFFFFCC] font-main font-bold tracking-[1.6px] text-left [white-space:nowrap]">
              CONTACT ‧ 聯絡我們
            </div>
            <div className="text-[32px]/[48px] box-border w-full text-[var(--color-white)] font-main font-bold text-left">
              留下需求，24 小時內回覆報價
            </div>
            <div className="text-[15px]/[29px] box-border w-full text-[#FFFFFFD9] font-main font-normal text-left">
              不論是單次大型廢棄物搬運，或是整個社區的長期合約，都歡迎與我們聊聊。
            </div>
            <div className="box-border w-full h-fit shrink-0 flex flex-col gap-[16px] p-[12px_0px_0px_0px] justify-start items-start">
              <div className="box-border w-full h-fit shrink-0 flex flex-row gap-[14px] justify-start items-center">
                <div className="box-border w-[40px] shrink-0 h-[40px] flex flex-row gap-0 justify-center items-center bg-[#FFFFFF2E] rounded-[999px]">
                  <PhoneIcon className="box-border w-[19px] shrink-0 h-[19px]" fill="var(--color-white)" />
                </div>
                <div className="box-border [flex:1_1_0] h-fit flex flex-col gap-[2px] justify-start items-start">
                  <div className="text-[12px]/[17px] box-border text-[#FFFFFFB8] font-main font-normal text-left [white-space:nowrap]">
                    服務專線
                  </div>
                  <a
                    href="tel:0800123456"
                    className="text-[16px]/[24px] box-border text-[var(--color-white)] font-main font-bold text-left [white-space:nowrap] transition-transform duration-150 hover:underline active:scale-[0.97]"
                  >
                    0800-123-456
                  </a>
                </div>
              </div>
              <div className="box-border w-full h-fit shrink-0 flex flex-row gap-[14px] justify-start items-center">
                <div className="box-border w-[40px] shrink-0 h-[40px] flex flex-row gap-0 justify-center items-center bg-[#FFFFFF2E] rounded-[999px]">
                  <MailIcon className="box-border w-[19px] shrink-0 h-[19px]" fill="var(--color-white)" />
                </div>
                <div className="box-border [flex:1_1_0] h-fit flex flex-col gap-[2px] justify-start items-start">
                  <div className="text-[12px]/[17px] box-border text-[#FFFFFFB8] font-main font-normal text-left [white-space:nowrap]">
                    電子信箱
                  </div>
                  <a
                    href="mailto:service@cleanhome.tw"
                    className="text-[16px]/[24px] box-border text-[var(--color-white)] font-main font-bold text-left [white-space:nowrap] transition-transform duration-150 hover:underline active:scale-[0.97]"
                  >
                    service@cleanhome.tw
                  </a>
                </div>
              </div>
              <div className="box-border w-full h-fit shrink-0 flex flex-row gap-[14px] justify-start items-center">
                <div className="box-border w-[40px] shrink-0 h-[40px] flex flex-row gap-0 justify-center items-center bg-[#FFFFFF2E] rounded-[999px]">
                  <MapPinIcon className="box-border w-[19px] shrink-0 h-[19px]" fill="var(--color-white)" />
                </div>
                <div className="box-border [flex:1_1_0] h-fit flex flex-col gap-[2px] justify-start items-start">
                  <div className="text-[12px]/[17px] box-border text-[#FFFFFFB8] font-main font-normal text-left [white-space:nowrap]">
                    服務據點
                  </div>
                  <div className="text-[16px]/[24px] box-border text-[var(--color-white)] font-main font-bold text-left [white-space:nowrap]">
                    台北市內湖區環保路 88 號
                  </div>
                </div>
              </div>
              <div className="box-border w-full h-fit shrink-0 flex flex-row gap-[14px] justify-start items-center">
                <div className="box-border w-[40px] shrink-0 h-[40px] flex flex-row gap-0 justify-center items-center bg-[#FFFFFF2E] rounded-[999px]">
                  <AlarmClockIcon className="box-border w-[19px] shrink-0 h-[19px]" fill="var(--color-white)" />
                </div>
                <div className="box-border [flex:1_1_0] h-fit flex flex-col gap-[2px] justify-start items-start">
                  <div className="text-[12px]/[17px] box-border text-[#FFFFFFB8] font-main font-normal text-left [white-space:nowrap]">
                    服務時間
                  </div>
                  <div className="text-[16px]/[24px] box-border text-[var(--color-white)] font-main font-bold text-left [white-space:nowrap]">
                    週一至週六 07:00 - 20:00
                  </div>
                </div>
              </div>
            </div>
            <div className="box-border w-fit h-fit shrink-0 flex flex-row gap-[10px] p-[10px_0px_0px_0px] justify-start items-start">
              <a
                href="#"
                className={`box-border w-[40px] shrink-0 h-[40px] flex flex-row gap-0 justify-center items-center bg-[#FFFFFF2E] rounded-[999px] active:scale-[0.97] ${socialHover}`}
              >
                <FacebookIcon className="box-border w-[18px] shrink-0 h-[18px]" fill="var(--color-white)" />
              </a>
              <a
                href="#"
                className={`box-border w-[40px] shrink-0 h-[40px] flex flex-row gap-0 justify-center items-center bg-[#FFFFFF2E] rounded-[999px] active:scale-[0.97] ${socialHover}`}
              >
                <InstagramIcon className="box-border w-[18px] shrink-0 h-[18px]" fill="var(--color-white)" />
              </a>
              <a
                href="#"
                className={`box-border w-[40px] shrink-0 h-[40px] flex flex-row gap-0 justify-center items-center bg-[#FFFFFF2E] rounded-[999px] active:scale-[0.97] ${socialHover}`}
              >
                <YoutubeIcon className="box-border w-[18px] shrink-0 h-[18px]" fill="var(--color-white)" />
              </a>
              <a
                href="#"
                className={`box-border w-[40px] shrink-0 h-[40px] flex flex-row gap-0 justify-center items-center bg-[#FFFFFF2E] rounded-[999px] active:scale-[0.97] ${socialHover}`}
              >
                <MessageCircleIcon className="box-border w-[18px] shrink-0 h-[18px]" fill="var(--color-white)" />
              </a>
            </div>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="box-border [flex:1_1_0] h-fit flex flex-col gap-[18px] p-[52px] justify-start items-start bg-[var(--color-white)]"
          >
            <div className="text-[24px]/[36px] box-border w-full text-[var(--color-text-primary)] font-main font-bold text-left">
              免費估價申請
            </div>
            <div className="box-border w-full h-fit shrink-0 flex flex-row gap-[14px] justify-start items-start">
              <div className="box-border [flex:1_1_0] h-fit flex flex-col gap-[7px] justify-start items-start">
                <label className="text-[13px]/[18px] box-border text-[var(--color-text-secondary)] font-main font-medium text-left [white-space:nowrap]">
                  聯絡人
                </label>
                <input
                  type="text"
                  name="contactName"
                  placeholder="請輸入姓名"
                  className={`box-border w-full h-fit shrink-0 p-[14px_16px] bg-[var(--color-pink-50)] [outline:1px_solid_var(--color-pink-200)] [outline-offset:-0.5px] rounded-[14px] text-[14px]/[21px] font-main font-normal text-[var(--color-text-primary)] placeholder:text-[#B79AAA] ${inputFocus}`}
                />
              </div>
              <div className="box-border [flex:1_1_0] h-fit flex flex-col gap-[7px] justify-start items-start">
                <label className="text-[13px]/[18px] box-border text-[var(--color-text-secondary)] font-main font-medium text-left [white-space:nowrap]">
                  聯絡電話
                </label>
                <input
                  type="tel"
                  name="contactPhone"
                  placeholder="09xx-xxx-xxx"
                  className={`box-border w-full h-fit shrink-0 p-[14px_16px] bg-[var(--color-pink-50)] [outline:1px_solid_var(--color-pink-200)] [outline-offset:-0.5px] rounded-[14px] text-[14px]/[21px] font-main font-normal text-[var(--color-text-primary)] placeholder:text-[#B79AAA] ${inputFocus}`}
                />
              </div>
            </div>
            <div className="box-border w-full h-fit shrink-0 flex flex-col gap-[7px] justify-start items-start">
              <label className="text-[13px]/[18px] box-border text-[var(--color-text-secondary)] font-main font-medium text-left [white-space:nowrap]">
                服務地址
              </label>
              <input
                type="text"
                name="serviceAddress"
                placeholder="縣市 / 區 / 街道"
                className={`box-border w-full h-fit shrink-0 p-[14px_16px] bg-[var(--color-pink-50)] [outline:1px_solid_var(--color-pink-200)] [outline-offset:-0.5px] rounded-[14px] text-[14px]/[21px] font-main font-normal text-[var(--color-text-primary)] placeholder:text-[#B79AAA] ${inputFocus}`}
              />
            </div>
            <div className="box-border w-full h-fit shrink-0 flex flex-col gap-[9px] justify-start items-start">
              <div className="text-[13px]/[18px] box-border text-[var(--color-text-secondary)] font-main font-medium text-left [white-space:nowrap]">
                服務類型
              </div>
              <div className="box-border w-full h-fit shrink-0 flex flex-row gap-[10px] justify-start items-start">
                {SERVICE_TYPES.map((type) => {
                  const selected = serviceType === type;
                  return (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setServiceType(type)}
                      className={
                        selected
                          ? "box-border w-fit shrink-0 h-fit flex flex-row gap-0 p-[10px_18px] justify-start items-start bg-[var(--color-pink-500)] [outline:1px_solid_var(--color-pink-500)] [outline-offset:-0.5px] rounded-[999px] transition-colors duration-200"
                          : "box-border w-fit shrink-0 h-fit flex flex-row gap-0 p-[10px_18px] justify-start items-start bg-[var(--color-white)] [outline:1px_solid_var(--color-pink-200)] [outline-offset:-0.5px] rounded-[999px] transition-colors duration-200"
                      }
                    >
                      <div
                        className={
                          selected
                            ? "text-[13.5px]/[19px] box-border text-[var(--color-white)] font-main font-medium text-left [white-space:nowrap] transition-colors duration-200"
                            : "text-[13.5px]/[19px] box-border text-[var(--color-text-secondary)] font-main font-medium text-left [white-space:nowrap] transition-colors duration-200"
                        }
                      >
                        {type}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="box-border w-full h-fit shrink-0 flex flex-col gap-[7px] justify-start items-start">
              <label className="text-[13px]/[18px] box-border text-[var(--color-text-secondary)] font-main font-medium text-left [white-space:nowrap]">
                需求說明
              </label>
              <textarea
                name="requestDetail"
                placeholder="例如：每週二、五各一次，約 20 袋垃圾與 3 桶廚餘。"
                className={`box-border w-full h-[96px] shrink-0 p-[16px] bg-[var(--color-pink-50)] [outline:1px_solid_var(--color-pink-200)] [outline-offset:-0.5px] rounded-[14px] resize-none text-[14px]/[24px] font-main font-normal text-[var(--color-text-primary)] placeholder:text-[#B79AAA] ${inputFocus}`}
              />
            </div>
            <button
              type="submit"
              className="box-border w-full h-fit shrink-0 [box-shadow:0px_8px_20px_0px_#FF7BA659] flex flex-row gap-[9px] p-[17px_0px] justify-center items-center bg-[var(--color-pink-500)] rounded-[999px] transition-transform duration-200 hover:scale-[1.02] hover:shadow-[0px_12px_26px_0px_#FF7BA680] active:scale-[0.98]"
            >
              <div className="text-[16px]/[normal] box-border text-[var(--color-white)] font-main font-bold text-left [white-space:nowrap]">
                送出免費估價
              </div>
              <SendIcon className="box-border w-[17px] shrink-0 h-[17px]" fill="var(--color-white)" />
            </button>
            <div className="text-[12px]/[19px] box-border w-full text-[var(--color-text-secondary)] font-main font-normal text-center">
              送出即表示同意我們的隱私權政策，資料僅用於報價聯繫。
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
