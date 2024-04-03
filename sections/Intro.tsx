export default function Intro() {
  return (
    <section
      class="bg-[#0D0D0D] relative text-stone-100 text-3xl pt-8 px-5"
      style={{
        boxShadow: `0 -1vw 50vw 10vw rgba(13, 13, 13, 1)`,
        perspective: "1px",
      }}
    >
      <div
        data-aos="fade-up-discrete"
        class="max-w-5xl m-auto md:text-center"
      >
        <p>
          The epic science fiction film produced and directed by Stanley Kubrick
          in 1968 entered the ranks of the best in the genre with its
          scientifically accurate portrayal of space travel and its effects.
          Kubrick explores themes such as evolution, technology, artificial
          intelligence and extraterrestrial life in this dazzling mystifying
          journey throughout outer space and human nature.
        </p>
      </div>
      <img
        data-aos="fade"
        src="/still-1.jpg"
        class="mt-12 h-[100vw] md:h-auto object-cover md:mt-36 w-full max-w-[96rem] m-auto box-border"
        alt="Still from 2001: A Space Oddity with an astronaut floating inside a space ship"
        title="Ladies and gentlemen, we're floating in space"
      />
    </section>
  );
}
