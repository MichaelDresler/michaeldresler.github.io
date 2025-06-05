
export default function ProjectsLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section className=" ">

      {/* <div className="absolute top-0 w-[130vw] h-[130vh] bg-radial-[at_38%_416%] from-[#ffffff] to-70% to-[rgb(12,12,12)] opacity-10 -z-10 over "></div> */}
      <div className="fixed top-[-100%] w-[100vw] aspect-square  bg-radial-[at_50%_50%] from-[#434343] to-75% to-[rgb(16,16,16)] opacity-25 -z-100 "></div>
      {children}
    </section>
  }