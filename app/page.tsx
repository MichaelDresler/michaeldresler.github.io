import Link from "next/link";

type NavLink = {
  name: string;
  url: string;
};

const contacts: NavLink[] = [
  { name: "Email", url: "mailto:michaeldresler@hotmail.com" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/michael-dresler/" },
  { name: "Github", url: "https://github.com/MichaelDresler" },
];

export default function Home() {
  return (
    <div>
      <main className=" w-full flex flex-col gap-16 md:gap-36 justify-center ">
        <section>
          <div className="flex flex-col items-center text-center gap-6">
            {/* <div className="rounded-full overflow-hidden w-48 h-48  relative border border-white/10 mb-4 bg-white/90">
          <img className="absolute -top-[165%] right-3 w-[1000px] h-[1000px] object-cover " src="/michael.png"  alt="hello" />
          </div> */}

            <h1 className="font-medium text-text-primary md:text-5xl text-2xl tracking-tighter leading-[100%] max-w-[700px] text-pretty ">
              Hi, I'm Michael Dresler, <br /> Designer and Developer
            </h1>
            <h2 className="font-light text-[1rem] md: text-lg text-text-secondary max-w-[750px] text-pretty">
              As a fourth-year Interactive Arts and Technology student, I've
              developed a strong understanding of UI/UX design and front-end
              development. I'm eager to apply my skills to create engaging and
              user-friendly web experiences.
            </h2>
          </div>

          <div className="flex justify-center gap-12 mt-6">
            {contacts.map((link, index) => (
              <Link
                className="  text-lg  link underline"
                key={index}
                href={link.url}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </section>

        <section className="w-full flex flex-col gap-6">
          <div className="w-full aspect-video bg-white/20 rounded-xl"></div>
          <div className="w-full aspect-video bg-white/20 rounded-xl"></div>
        </section>
      </main>
    </div>
  );
}
