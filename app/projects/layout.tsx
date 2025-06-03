
export default function ProjectsLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section className=" ">

      {/* <div className="absolute top-0 w-[130vw] h-[130vh] bg-radial-[at_38%_45%] from-[#ffffff] to-70% to-[rgb(12,12,12)] opacity-10 -z-10 over "></div> */}
      <div className="fixed top-0 w-screen aspect-square bg-radial-[at_50%_25%] from-[#ffffff] to-90% to-[#131313] opacity-5 -z-10 "></div>
      {children}
    </section>
  }