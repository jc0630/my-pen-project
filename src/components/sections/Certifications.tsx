import { AwardIcon, BadgeCheckIcon, FileCheckIcon, ShieldCheckIcon } from "@/components/icons";

export default function Certifications() {
  return (
    <div className="box-border w-full h-fit shrink-0 flex flex-col gap-[44px] p-[96px_64px] justify-start items-start bg-[var(--color-pink-100)] [background-image:linear-gradient(143.333deg,_#FFFFFFE6_21.054%,_#FFE7EE00_64.473%)] bg-no-repeat bg-[length:100%_100%] overflow-hidden relative">
      <div className="box-border w-[320px] h-[320px] absolute left-[1180px] top-[-120px] bg-[#FFFFFF66] rounded-full [z-index:0]"></div>
      <div className="box-border w-[820px] h-fit shrink-0 flex flex-col gap-[14px] justify-start items-start relative [z-index:1]">
        <div className="text-[13px]/[normal] box-border text-[var(--color-pink-600)] font-main font-bold tracking-[1.6px] text-left [white-space:nowrap]">
          CERTIFICATIONS ‧ 專業認證
        </div>
        <div className="text-[38px]/[55px] box-border w-full text-[var(--color-text-primary)] font-main font-bold text-left">
          每一趟清運，都有合法文件與紀錄可查
        </div>
      </div>
      <div className="box-border w-full h-fit shrink-0 flex flex-row gap-[20px] justify-start items-start relative [z-index:2]">
        <div className="box-border [flex:1_1_0] h-[270px] [box-shadow:0px_10px_28px_0px_#D98FAB26] flex flex-col gap-[14px] p-[26px] justify-start items-start bg-[var(--color-white)] rounded-[24px]">
          <div className="box-border w-[50px] h-[50px] shrink-0 flex flex-row gap-0 justify-center items-center bg-[var(--color-pink-50)] rounded-[999px]">
            <AwardIcon className="box-border w-[24px] shrink-0 h-[24px]" fill="var(--color-pink-500)" />
          </div>
          <div className="text-[17px]/[26px] box-border w-full text-[var(--color-text-primary)] font-main font-bold text-left">
            甲級廢棄物清除許可
          </div>
          <div className="text-[13.5px]/[24px] box-border w-full text-[var(--color-text-secondary)] font-main font-normal text-left">
            環保署核發，可清除一般及事業廢棄物。
          </div>
          <div className="box-border w-full [flex:1_1_0] flex flex-row gap-0 justify-start items-end">
            <div className="text-[11.5px]/[17px] box-border [flex:1_1_0] text-[var(--color-pink-600)] font-main font-medium text-left">
              字號 環署廢字第 09876 號
            </div>
          </div>
        </div>
        <div className="box-border [flex:1_1_0] h-[270px] [box-shadow:0px_10px_28px_0px_#D98FAB26] flex flex-col gap-[14px] p-[26px] justify-start items-start bg-[var(--color-white)] rounded-[24px]">
          <div className="box-border w-[50px] h-[50px] shrink-0 flex flex-row gap-0 justify-center items-center bg-[var(--color-pink-50)] rounded-[999px]">
            <BadgeCheckIcon className="box-border w-[24px] shrink-0 h-[24px]" fill="var(--color-pink-500)" />
          </div>
          <div className="text-[17px]/[26px] box-border w-full text-[var(--color-text-primary)] font-main font-bold text-left">
            ISO 14001 環境管理
          </div>
          <div className="text-[13.5px]/[24px] box-border w-full text-[var(--color-text-secondary)] font-main font-normal text-left">
            通過國際環境管理系統驗證與年度追查。
          </div>
          <div className="box-border w-full [flex:1_1_0] flex flex-row gap-0 justify-start items-end">
            <div className="text-[11.5px]/[17px] box-border [flex:1_1_0] text-[var(--color-pink-600)] font-main font-medium text-left">
              有效期至 2027.06
            </div>
          </div>
        </div>
        <div className="box-border [flex:1_1_0] h-[270px] [box-shadow:0px_10px_28px_0px_#D98FAB26] flex flex-col gap-[14px] p-[26px] justify-start items-start bg-[var(--color-white)] rounded-[24px]">
          <div className="box-border w-[50px] h-[50px] shrink-0 flex flex-row gap-0 justify-center items-center bg-[var(--color-pink-50)] rounded-[999px]">
            <ShieldCheckIcon className="box-border w-[24px] shrink-0 h-[24px]" fill="var(--color-pink-500)" />
          </div>
          <div className="text-[17px]/[26px] box-border w-full text-[var(--color-text-primary)] font-main font-bold text-left">
            ISO 45001 職安衛
          </div>
          <div className="text-[13.5px]/[24px] box-border w-full text-[var(--color-text-secondary)] font-main font-normal text-left">
            作業人員定期教育訓練與安全稽核。
          </div>
          <div className="box-border w-full [flex:1_1_0] flex flex-row gap-0 justify-start items-end">
            <div className="text-[11.5px]/[17px] box-border [flex:1_1_0] text-[var(--color-pink-600)] font-main font-medium text-left">
              有效期至 2027.03
            </div>
          </div>
        </div>
        <div className="box-border [flex:1_1_0] h-[270px] [box-shadow:0px_10px_28px_0px_#D98FAB26] flex flex-col gap-[14px] p-[26px] justify-start items-start bg-[var(--color-white)] rounded-[24px]">
          <div className="box-border w-[50px] h-[50px] shrink-0 flex flex-row gap-0 justify-center items-center bg-[var(--color-pink-50)] rounded-[999px]">
            <FileCheckIcon className="box-border w-[24px] shrink-0 h-[24px]" fill="var(--color-pink-500)" />
          </div>
          <div className="text-[17px]/[26px] box-border w-full text-[var(--color-text-primary)] font-main font-bold text-left">
            GPS 流向聯單系統
          </div>
          <div className="text-[13.5px]/[24px] box-border w-full text-[var(--color-text-secondary)] font-main font-normal text-left">
            全程電子聯單申報，流向可即時查詢。
          </div>
          <div className="box-border w-full [flex:1_1_0] flex flex-row gap-0 justify-start items-end">
            <div className="text-[11.5px]/[17px] box-border [flex:1_1_0] text-[var(--color-pink-600)] font-main font-medium text-left">
              串接環保署申報平台
            </div>
          </div>
        </div>
      </div>
      <div className="box-border w-full h-fit shrink-0 flex flex-row gap-[24px] p-[22px_32px] justify-between items-center bg-[#FFFFFFB3] rounded-[20px] relative [z-index:3]">
        <div className="text-[13px]/[normal] box-border text-[var(--color-text-secondary)] font-main font-bold text-left [white-space:nowrap]">
          長期合作單位
        </div>
        <div className="box-border w-fit shrink-0 h-fit flex flex-row gap-[44px] justify-start items-center">
          <div className="text-[15px]/[normal] box-border text-[#B79AAA] font-main font-bold text-left [white-space:nowrap]">
            台北市政府環保局
          </div>
          <div className="text-[15px]/[normal] box-border text-[#B79AAA] font-main font-bold text-left [white-space:nowrap]">
            新北清潔隊聯盟
          </div>
          <div className="text-[15px]/[normal] box-border text-[#B79AAA] font-main font-bold text-left [white-space:nowrap]">
            綠循環資源科技
          </div>
          <div className="text-[15px]/[normal] box-border text-[#B79AAA] font-main font-bold text-left [white-space:nowrap]">
            安心社區管理協會
          </div>
          <div className="text-[15px]/[normal] box-border text-[#B79AAA] font-main font-bold text-left [white-space:nowrap]">
            永續 ESG 聯盟
          </div>
        </div>
      </div>
    </div>
  );
}
