import Image from "next/image";
import { ArrowRightIcon, PhoneCallIcon, SparklesIcon } from "@/components/icons";

export default function Hero() {
  return (
    <div className="box-border w-full h-fit shrink-0 flex flex-row gap-[56px] p-[72px_64px_88px_64px] justify-start items-center bg-[var(--color-pink-50)] [background-image:radial-gradient(ellipse_45%_45%_at_78%_20%,_#FFD9E6_0%,_#FFF6F800_100%)] bg-no-repeat bg-[length:100%_100%] overflow-hidden relative">
      <div className="box-border w-[260px] h-[260px] absolute left-[-90px] top-[-80px] bg-[#FFE0EA] rounded-full [z-index:0]"></div>
      <div className="box-border w-[120px] h-[120px] absolute left-[120px] top-[430px] bg-[#E4F7F0] rounded-full [z-index:1]"></div>
      <div className="box-border [flex:1_1_0] h-fit flex flex-col gap-[26px] justify-start items-start relative [z-index:2]">
        <div className="box-border w-fit h-fit shrink-0 [box-shadow:0px_4px_14px_0px_#FF7BA61F] flex flex-row gap-[8px] p-[8px_16px] justify-start items-center bg-[var(--color-white)] rounded-[999px]">
          <SparklesIcon className="box-border w-[16px] shrink-0 h-[16px]" fill="var(--color-mint)" />
          <div className="text-[13px]/[normal] box-border text-[var(--color-text-secondary)] font-main font-medium text-left [white-space:nowrap]">
            環保署合格清除機構 ‧ 全台服務
          </div>
        </div>
        <div className="text-[60px]/[75px] box-border w-full text-[var(--color-text-primary)] font-main font-bold tracking-[-0.5px] text-left">
          讓城市每一天
          <br />
          都乾淨得剛剛好
        </div>
        <div className="text-[17px]/[32px] box-border w-full text-[var(--color-text-secondary)] font-main font-normal text-left">
          從社區垃圾清運到事業廢棄物處理，潔淨家園以低碳車隊、合法流向與準時服務，陪你把環境照顧好。
        </div>
        <div className="box-border w-fit h-fit shrink-0 flex flex-row gap-[14px] justify-start items-center">
          <div className="box-border w-fit shrink-0 h-fit [box-shadow:0px_8px_20px_0px_#FF7BA659] flex flex-row gap-[9px] p-[16px_32px] justify-start items-center bg-[var(--color-pink-500)] rounded-[999px]">
            <div className="text-[16px]/[normal] box-border text-[var(--color-white)] font-main font-bold text-left [white-space:nowrap]">
              立即預約清運
            </div>
            <ArrowRightIcon className="box-border w-[18px] shrink-0 h-[18px]" fill="var(--color-white)" />
          </div>
          <div className="box-border w-fit shrink-0 h-fit flex flex-row gap-[9px] p-[16px_30px] justify-start items-center bg-[var(--color-white)] [outline:1.5px_solid_var(--color-pink-200)] [outline-offset:-0.75px] rounded-[999px]">
            <PhoneCallIcon className="box-border w-[18px] shrink-0 h-[18px]" fill="var(--color-pink-600)" />
            <div className="text-[16px]/[normal] box-border text-[var(--color-pink-600)] font-main font-bold text-left [white-space:nowrap]">
              0800-123-456
            </div>
          </div>
        </div>
        <div className="box-border w-fit h-fit shrink-0 flex flex-row gap-[38px] p-[18px_0px_0px_0px] justify-start items-center">
          <div className="box-border w-fit shrink-0 h-fit flex flex-col gap-[4px] justify-start items-start">
            <div className="text-[28px]/[36px] box-border text-[var(--color-pink-600)] font-main font-bold text-left [white-space:nowrap]">
              12,000+
            </div>
            <div className="text-[13px]/[18px] box-border text-[var(--color-text-secondary)] font-main font-normal text-left [white-space:nowrap]">
              服務社區戶數
            </div>
          </div>
          <div className="box-border w-fit shrink-0 h-fit flex flex-col gap-[4px] justify-start items-start">
            <div className="text-[28px]/[36px] box-border text-[var(--color-pink-600)] font-main font-bold text-left [white-space:nowrap]">
              98%
            </div>
            <div className="text-[13px]/[18px] box-border text-[var(--color-text-secondary)] font-main font-normal text-left [white-space:nowrap]">
              準時到達率
            </div>
          </div>
          <div className="box-border w-fit shrink-0 h-fit flex flex-col gap-[4px] justify-start items-start">
            <div className="text-[28px]/[36px] box-border text-[var(--color-pink-600)] font-main font-bold text-left [white-space:nowrap]">
              15年
            </div>
            <div className="text-[13px]/[18px] box-border text-[var(--color-text-secondary)] font-main font-normal text-left [white-space:nowrap]">
              清運經驗
            </div>
          </div>
        </div>
      </div>
      <div className="box-border w-[628px] shrink-0 h-[520px] flex flex-row gap-0 justify-start items-start rounded-[180px_32px_32px_32px] overflow-hidden relative [z-index:3]">
        <Image src="/images/hero.png" alt="清潔車隊出勤畫面" fill className="object-cover" />
      </div>
    </div>
  );
}
