export default function Intro() {
  return (
    <section
      class="bg-[#0D0D0D] relative text-stone-100 text-3xl md:text-4xl tracking-[-0.03em] font-[480] pt-8 "
      style={{
        boxShadow: `0 -1vw 50vw 10vw rgba(13, 13, 13, 1)`,
        perspective: "1px",
      }}
    >
      <div
        data-aos="fade-up-discrete"
        class="max-w-5xl m-auto md:text-center px-5 md:px-16"
        id="introtext"
      >
        <p>
          The epic science fiction film produced and directed by Stanley Kubrick
          in 1968 entered the ranks of the best in the genre with its
          scientifically accurate portrayal of space travel and its effects.
          Kubrick explores themes such as evolution, technology, artificial
          intelligence and extraterrestrial life in this dazzling mystifying
          journey throughout outer space and human nature.
        </p>
        <div
          data-aos="fade-up-discrete"
          data-aos-anchor="#introtext"
          data-aos-delay="150"
          class="flex items-center gap-4 justify-center mt-8"
        >
          <a
            href="https://www.youtube.com/watch?v=oR_e9y-bka0"
            target="_blank"
            class="py-[0.625rem] px-5 bg-stone-100 hover:bg-white text-stone-900 rounded-full text-base select-none tracking-[-0.01em]"
          >
            Watch trailer
          </a>
          <a
            href="https://www.imdb.com/title/tt0062622/"
            target="_blank"
            class="py-[0.625rem] px-5 text-stone-100 hover:bg-stone-0 border border-stone-100 rounded-full text-base select-none tracking-[-0.01em]"
          >
            View in IMDB
          </a>
        </div>
      </div>
      <div data-aos="fade" class="px-5 max-w-[96rem] m-auto">
        <img
          src="/still-1.jpg"
          class="mt-12 h-[100vw] max-w-full md:h-auto object-cover md:mt-36 w-full  box-border"
          alt="Still from 2001: A Space Oddity with an astronaut floating inside a space ship"
          title="Ladies and gentlemen, we're floating in space"
        />
        <div class="text-xs font-mono tracking-normal mt-2 text-neutral-600 uppercase text-right">
          Still from the 8K 70mm re-release of the film / Courtesy of Warner
          Bros ©
        </div>
      </div>
    </section>
  );
}
