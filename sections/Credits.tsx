const people: Person[] = [
  {
    title: "Produced and directed by",
    names: ["Stanley Kubrick"],
    cursor: "cursor-clapperboard",
  },
  {
    title: "Starring",
    names: ["Keir Dullea", "Gary Lockwood"],
    cursor: "cursor-stars",
  },
  {
    title: "Screenplay by",
    names: ["Stanley Kubrick", "Arthur C. Clarke"],
    cursor: "cursor-writing",
  },
  {
    title: "In",
    names: ["Super Panvision®", "Metrocolor"],
    cursor: "cursor-camera",
  },
  {
    title: "Designed and programmed by",
    names: ["João Pesce"],
    cursor: "cursor-technologist",
  },
  {
    title: "Powered by",
    names: ["deco.cx", "fresh", "deno", "preact"],
    cursor: "cursor-tubes",
  },
  {
    title: "Typography",
    names: [
      "Inter",
      "Sofia Sans Extra Condensed",
      "Space Mono",
      "Press Start 2P",
    ],
    cursor: "cursor-abc",
  },
];

type Person = {
  title: string;
  names: string[];
  cursor?: string;
};

function joinNames(names: string[]) {
  const andTag = <span class="text-[1.25rem] leading-none">{" "}and{" "}</span>;
  return names.map((name: string, index: number) => (
    <>
      <span>{name}</span>
      {index < names.length - 2 && "/"}
      {index == names.length - 2 && andTag}
    </>
  ));
}

function Person({ title, names, cursor }: Person) {
  return (
    <span class={`${cursor} flex md:inline flex-col mt-4 md:mt-0`}>
      <span class="text-[1.25rem] leading-none mr-1">{title}</span>
      <span class="text-[2.75rem] leading-none">{joinNames(names)}</span>
    </span>
  );
}

export default function Credits() {
  return (
    <section
      class="bg-[#0D0D0D] relative text-stone-100 px-5 md:px-16 font-condensed font-extralight tracking-tight uppercase text-center "
      style={{
        fontVariationSettings: '"wdth" 62.5',
      }}
    >
      <div class="max-w-5xl m-auto pt-16 pb-48 flex gap-x-2 justify-center flex-wrap">
        {people.map((person) => <Person {...person} />)}
      </div>
    </section>
  );
}
