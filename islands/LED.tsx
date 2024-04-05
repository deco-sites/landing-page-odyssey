import { useState } from "preact/hooks";

export default function LED({ on }: { on: boolean }) {
  const [onOff, setOnOff] = useState(on);
  const onClick = () => {
    setOnOff(!onOff);
  };
  return (
    <div class="w-full  cursor-pointer" onClick={onClick}>
      {onOff
        ? (
          <div
            class={`bg-[#FCDCAD] h-20`}
            style={{
              boxShadow:
                `0 0 6px 2px rgba(234, 62, 59, 1), inset 0 0 4px 2px rgba(234, 62, 59, 1)`,
            }}
          />
        )
        : <div class={`bg-[#FCDCAD] opacity-5 h-20`} />}
    </div>
  );
}
