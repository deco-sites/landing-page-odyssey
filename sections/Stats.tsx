import { ComponentType } from "preact";

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
  return <div class={`bg-[#FCDCAD] opacity-5 ${rectStyle}`} />;
}

// Split array into chunks
const chunkArray = (array: ComponentType[], size: number) => {
  return array.reduce((chunks: ComponentType[][], item, index) => {
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
    ...Array(numberOfLedsOn).fill(On),
    ...Array(100 - numberOfLedsOn).fill(Off),
  ];
  const chunksOfLeds = chunkArray(leds, 20);
  return (
    <section class="bg-[#0D0D0D] relative text-stone-100 text-3xl tracking-[-0.03em] font-[480] px-5 md:px-16">
      <div class="max-w-6xl m-auto grid md:grid-cols-12 gap-y-12 md:gap-16 pt-12 md:pt-24">
        <figure class="col-span-12  md:col-span-7 md:min-h-full flex flex-col justify-center">
          <blockquote
            data-aos="fade-right"
            class="indent-16"
            id="quote"
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
            data-aos-anchor="#quote"
            data-aos-delay="150"
            class="mt-4 md:mt-8 text-neutral-700"
          >
            — Stanley Kubrick, in a 1968{" "}
            <a
              href="http://dpk.io/kubrick#:~:text=2001%20is%20a%20nonverbal%20experience,an%20emotional%20and%20philosophic%20content."
              target="_blank"
              class="underline underline-offset-4 decoration-2 hover:text-neutral-500 transition-colors duration-500"
            >
              interview with Eric Nordern for Playboy magazine
            </a>
          </figcaption>
        </figure>
        <figure
          data-aos="fade"
          class="col-span-12 md:col-span-5 flex flex-col gap-2"
        >
          {chunksOfLeds.map((chunk: ComponentType[]) => {
            return (
              <div class="flex gap-2">
                {chunk.map((Element) => <Element />)}
              </div>
            );
          })}
          <figcaption class="text-sm font-mono uppercase text-right leading-none">
            00:40 / 02:19 ≈ {numberOfLedsOn}% of the film
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
