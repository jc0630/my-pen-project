import Image from "next/image";
import { ArrowUpRightIcon } from "@/components/icons";

export default function Fleet() {
  return (
    <div className="box-border w-full h-fit shrink-0 flex flex-col gap-[48px] p-[96px_64px] justify-start items-start bg-[var(--color-white)]">
      <div className="box-border w-full h-fit shrink-0 flex flex-row gap-[40px] justify-between items-end">
        <div className="box-border w-[660px] shrink-0 h-fit flex flex-col gap-[14px] justify-start items-start">
          <div className="text-[13px]/[normal] box-border text-[var(--color-pink-500)] font-main font-bold tracking-[1.6px] text-left [white-space:nowrap]">
            OUR FLEET ‧ 車輛介紹
          </div>
          <div className="text-[38px]/[55px] box-border w-full text-[var(--color-text-primary)] font-main font-bold text-left">
            28 輛低碳清運車，各司其職
          </div>
          <div className="text-[16px]/[30px] box-border w-full text-[var(--color-text-secondary)] font-main font-normal text-left">
            每一輛車皆通過定期排氣檢測與機械保養，並配備即時定位與載重感測。
          </div>
        </div>
        <div className="box-border w-fit shrink-0 h-fit flex flex-row gap-[8px] p-[14px_26px] justify-start items-center bg-[var(--color-pink-50)] rounded-[999px]">
          <div className="text-[15px]/[normal] box-border text-[var(--color-pink-600)] font-main font-bold text-left [white-space:nowrap]">
            查看完整車隊
          </div>
          <ArrowUpRightIcon className="box-border w-[17px] shrink-0 h-[17px]" fill="var(--color-pink-600)" />
        </div>
      </div>
      <div className="box-border w-full h-fit shrink-0 flex flex-row gap-[24px] justify-start items-start">
        <div className="box-border [flex:1_1_0] h-fit flex flex-col gap-0 justify-start items-start bg-[var(--color-pink-50)] rounded-[26px] overflow-hidden">
          <div className="box-border w-full h-[230px] shrink-0 flex flex-row gap-0 justify-start items-start relative overflow-hidden">
            <Image src="/images/fleet-1.png" alt="壓縮式垃圾車車輛外觀" fill className="object-cover" />
          </div>
          <div className="box-border w-full h-fit shrink-0 flex flex-col gap-[12px] p-[26px] justify-start items-start">
            <div className="box-border w-full h-fit shrink-0 flex flex-row gap-[10px] justify-between items-center">
              <div className="text-[21px]/[29px] box-border text-[var(--color-text-primary)] font-main font-bold text-left [white-space:nowrap]">
                壓縮式垃圾車
              </div>
              <div className="box-border w-fit shrink-0 h-fit flex flex-row gap-0 p-[5px_12px] justify-start items-start bg-[var(--color-white)] rounded-[999px]">
                <div className="text-[11.5px]/[normal] box-border text-[var(--color-pink-600)] font-main font-medium text-left [white-space:nowrap]">
                  8 噸 ‧ 雙人作業
                </div>
              </div>
            </div>
            <div className="text-[14px]/[26px] box-border w-full text-[var(--color-text-secondary)] font-main font-normal text-left">
              社區與街道定期清運主力，壓縮比 1:5，可有效降低往返趟次。
            </div>
            <div className="[box-sizing:content-box] w-[369.333px] h-[52.5px] shrink-0 flex flex-row gap-0 p-[14px_0px_0px_0px] justify-start items-start [border-width:1px_0px_0px_0px] [border-style:solid] [border-color:var(--color-pink-200)] [margin:-0.5px_0px_0px_0px]">
              <div className="box-border [flex:1_1_0] h-fit flex flex-col gap-[3px] justify-start items-start">
                <div className="text-[11.5px]/[16px] box-border text-[var(--color-text-secondary)] font-main font-normal text-left [white-space:nowrap]">
                  載重
                </div>
                <div className="text-[14px]/[20px] box-border text-[var(--color-text-primary)] font-main font-bold text-left [white-space:nowrap]">
                  8,000 kg
                </div>
              </div>
              <div className="box-border [flex:1_1_0] h-fit flex flex-col gap-[3px] justify-start items-start">
                <div className="text-[11.5px]/[16px] box-border text-[var(--color-text-secondary)] font-main font-normal text-left [white-space:nowrap]">
                  動力
                </div>
                <div className="text-[14px]/[20px] box-border text-[var(--color-text-primary)] font-main font-bold text-left [white-space:nowrap]">
                  柴油 Euro 6
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box-border [flex:1_1_0] h-fit flex flex-col gap-0 justify-start items-start bg-[var(--color-pink-50)] rounded-[26px] overflow-hidden">
          <div className="box-border w-full h-[230px] shrink-0 flex flex-row gap-0 justify-start items-start relative overflow-hidden">
            <Image src="/images/fleet-2.png" alt="資源回收專車車輛外觀" fill className="object-cover" />
          </div>
          <div className="box-border w-full h-fit shrink-0 flex flex-col gap-[12px] p-[26px] justify-start items-start">
            <div className="box-border w-full h-fit shrink-0 flex flex-row gap-[10px] justify-between items-center">
              <div className="text-[21px]/[29px] box-border text-[var(--color-text-primary)] font-main font-bold text-left [white-space:nowrap]">
                資源回收專車
              </div>
              <div className="box-border w-fit shrink-0 h-fit flex flex-row gap-0 p-[5px_12px] justify-start items-start bg-[var(--color-white)] rounded-[999px]">
                <div className="text-[11.5px]/[normal] box-border text-[var(--color-pink-600)] font-main font-medium text-left [white-space:nowrap]">
                  5 噸 ‧ 分隔車斗
                </div>
              </div>
            </div>
            <div className="text-[14px]/[26px] box-border w-full text-[var(--color-text-secondary)] font-main font-normal text-left">
              車斗分隔設計，紙類、塑膠、金屬一次收運不混雜。
            </div>
            <div className="[box-sizing:content-box] w-[369.333px] h-[52.5px] shrink-0 flex flex-row gap-0 p-[14px_0px_0px_0px] justify-start items-start [border-width:1px_0px_0px_0px] [border-style:solid] [border-color:var(--color-pink-200)] [margin:-0.5px_0px_0px_0px]">
              <div className="box-border [flex:1_1_0] h-fit flex flex-col gap-[3px] justify-start items-start">
                <div className="text-[11.5px]/[16px] box-border text-[var(--color-text-secondary)] font-main font-normal text-left [white-space:nowrap]">
                  分類
                </div>
                <div className="text-[14px]/[20px] box-border text-[var(--color-text-primary)] font-main font-bold text-left [white-space:nowrap]">
                  4 格車斗
                </div>
              </div>
              <div className="box-border [flex:1_1_0] h-fit flex flex-col gap-[3px] justify-start items-start">
                <div className="text-[11.5px]/[16px] box-border text-[var(--color-text-secondary)] font-main font-normal text-left [white-space:nowrap]">
                  動力
                </div>
                <div className="text-[14px]/[20px] box-border text-[var(--color-text-primary)] font-main font-bold text-left [white-space:nowrap]">
                  油電混合
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box-border [flex:1_1_0] h-fit flex flex-col gap-0 justify-start items-start bg-[var(--color-pink-50)] rounded-[26px] overflow-hidden">
          <div className="box-border w-full h-[230px] shrink-0 flex flex-row gap-0 justify-start items-start relative overflow-hidden">
            <Image src="/images/fleet-3.png" alt="廚餘桶裝車車輛外觀" fill className="object-cover" />
          </div>
          <div className="box-border w-full h-fit shrink-0 flex flex-col gap-[12px] p-[26px] justify-start items-start">
            <div className="box-border w-full h-fit shrink-0 flex flex-row gap-[10px] justify-between items-center">
              <div className="text-[21px]/[29px] box-border text-[var(--color-text-primary)] font-main font-bold text-left [white-space:nowrap]">
                廚餘桶裝車
              </div>
              <div className="box-border w-fit shrink-0 h-fit flex flex-row gap-0 p-[5px_12px] justify-start items-start bg-[var(--color-white)] rounded-[999px]">
                <div className="text-[11.5px]/[normal] box-border text-[var(--color-pink-600)] font-main font-medium text-left [white-space:nowrap]">
                  3.5 噸 ‧ 密封式
                </div>
              </div>
            </div>
            <div className="text-[14px]/[26px] box-border w-full text-[var(--color-text-secondary)] font-main font-normal text-left">
              全密封不鏽鋼桶槽，配備除臭系統，每日清洗消毒。
            </div>
            <div className="[box-sizing:content-box] w-[369.333px] h-[52.5px] shrink-0 flex flex-row gap-0 p-[14px_0px_0px_0px] justify-start items-start [border-width:1px_0px_0px_0px] [border-style:solid] [border-color:var(--color-pink-200)] [margin:-0.5px_0px_0px_0px]">
              <div className="box-border [flex:1_1_0] h-fit flex flex-col gap-[3px] justify-start items-start">
                <div className="text-[11.5px]/[16px] box-border text-[var(--color-text-secondary)] font-main font-normal text-left [white-space:nowrap]">
                  桶槽
                </div>
                <div className="text-[14px]/[20px] box-border text-[var(--color-text-primary)] font-main font-bold text-left [white-space:nowrap]">
                  不鏽鋼密封
                </div>
              </div>
              <div className="box-border [flex:1_1_0] h-fit flex flex-col gap-[3px] justify-start items-start">
                <div className="text-[11.5px]/[16px] box-border text-[var(--color-text-secondary)] font-main font-normal text-left [white-space:nowrap]">
                  動力
                </div>
                <div className="text-[14px]/[20px] box-border text-[var(--color-text-primary)] font-main font-bold text-left [white-space:nowrap]">
                  電動底盤
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
