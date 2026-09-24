import { RecycleIcon } from "@/components/icons";

export default function Nav() {
  return (
    <div className="box-border w-full h-fit shrink-0 flex flex-row gap-0 p-[20px_64px] justify-between items-center bg-[var(--color-white)]">
      <div className="box-border w-fit shrink-0 h-fit flex flex-row gap-[10px] justify-start items-center">
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
      </div>
      <div className="box-border w-fit shrink-0 h-fit flex flex-row gap-[34px] justify-start items-center">
        <div className="text-[15px]/[normal] box-border text-[var(--color-text-secondary)] font-main font-medium text-left [white-space:nowrap]">
          關於我們
        </div>
        <div className="text-[15px]/[normal] box-border text-[var(--color-text-secondary)] font-main font-medium text-left [white-space:nowrap]">
          服務項目
        </div>
        <div className="text-[15px]/[normal] box-border text-[var(--color-text-secondary)] font-main font-medium text-left [white-space:nowrap]">
          車輛介紹
        </div>
        <div className="text-[15px]/[normal] box-border text-[var(--color-text-secondary)] font-main font-medium text-left [white-space:nowrap]">
          專業認證
        </div>
        <div className="text-[15px]/[normal] box-border text-[var(--color-text-secondary)] font-main font-medium text-left [white-space:nowrap]">
          聯絡我們
        </div>
      </div>
      <div className="box-border w-fit shrink-0 h-fit flex flex-row gap-[8px] p-[12px_26px] justify-start items-center bg-[var(--color-pink-500)] rounded-[999px]">
        <div className="text-[15px]/[normal] box-border text-[var(--color-white)] font-main font-bold text-left [white-space:nowrap]">
          免費估價
        </div>
      </div>
    </div>
  );
}
