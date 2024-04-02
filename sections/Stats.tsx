import { VNode } from "preact";

const rectStyle = "h-20 w-full";

function On() {
  return (
    <div
      class={`bg-[#FCDCAD] ${rectStyle}`}
      style={{
        boxShadow:
          `0 0 6px 2px rgba(234, 62, 59, 1), inset 0 0 4px 2px rgba(234, 62, 59, 1)`,
      }}
    />
  );
}

function Off() {
  return <div class={`bg-stone-900 ${rectStyle}`} />;
}

// Split the array into chunks
const chunkArray = (array: Array<VNode>, size: number) => {
  return array.reduce((chunks: VNode[][], item, index) => {
    if (index % size === 0) {
      chunks.push([item]);
    } else {
      chunks[chunks.length - 1].push(item);
    }
    return chunks;
  }, []);
};

export default function Stats() {
  const numberOfLedsOn = 29;
  const leds = [
    ...Array(numberOfLedsOn).fill(On()),
    ...Array(100 - numberOfLedsOn).fill(Off()),
  ];
  const chunksOfLeds = chunkArray(leds, 20);
  return (
    <div class="bg-[#0D0D0D] relative text-stone-100 text-3xl px-5">
      <div class="max-w-5xl m-auto py-24 grid grid-cols-12 gap-8 md:gap-16">
        <figure class="col-span-12 md:col-span-7 min-h-full flex flex-col justify-center">
          <blockquote
            data-aos="fade-right"
            data-aos-duration="1000"
            class="indent-16"
          >
            <i>2001</i>{" "}
            is a nonverbal experience; out of two hours and nineteen minutes of
            film, there are only a little less than forty minutes of dialog. I
            tried to create a visual experience, one that bypasses verbalized
            pigeonholing and directly penetrates the subconscious with an
            emotional and philosophic content.
          </blockquote>
          <figcaption
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="300"
            class="mt-8 text-stone-700"
          >
            — Stanley Kubrick, in a 1968{" "}
            <a
              href="http://dpk.io/kubrick#:~:text=2001%20is%20a%20nonverbal%20experience,an%20emotional%20and%20philosophic%20content."
              target="_blank"
              class="underline underline-offset-4 decoration-2 hover:text-stone-500 transition-colors duration-500"
            >
              interview with Eric Nordern for Playboy magazine
            </a>
          </figcaption>
        </figure>
        <figure class="col-span-12 md:col-span-5 flex flex-col gap-2">
          {chunksOfLeds.map((chunk: VNode[]) => {
            return (
              <div class="flex gap-2">
                {chunk}
              </div>
            );
          })}
          <figcaption class="text-sm font-mono uppercase text-right">
            00<span class="animate-blink">:</span>40 /
            02<span class="animate-blink">:</span>19 ~ {numberOfLedsOn}%
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
