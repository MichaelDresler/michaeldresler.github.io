

export default function Home() {
 

  return (
    <div>
      <main className=" w-full h-[calc(100vh-192px)] flex items-end mb-24 ">
        <div className="">
        <h1 className="md:font-medium text-pretty  font-semibold text-[2.5rem] md:text-[4rem] xl:text-[7rem]  text-text-primary tracking-tighter leading-[120%] md:leading-[100%] ">Michael Dresler — <br /> Designer & Developer</h1>
        <h2 className=" mt-8 font-medium text-2xl text-text-secondary tracking-[-0.05em] max-w-[44rem] ">My passion for design, coupled with a background in development, has pushed me to expand my approach beyond just aesthetics.</h2>
      
        </div>

      </main>
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="aspect-[9/6] rounded-xl bg-white/10"></div>
          <div className="aspect-[9/6] rounded-xl bg-white/10"></div>
          <div className="aspect-[9/6] rounded-xl bg-white/10"></div>
          <div className="aspect-[9/6] rounded-xl bg-white/10"></div>

        </section>

    </div>
  );
}
