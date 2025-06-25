export default function styleguide() {
  const cells = Array.from({ length: 100 }, (_, index) => (
    <div
      key={index}
      className="flex text-black bg-transparent  w-full h-full hover:bg-white transition-all duration-1000 "
    ></div>
  ));

  return (
    <div>
      <main className=" w-full h-screen  ">
        <div className=" h-full grid grid-cols-10 grid-rows-10">{cells}</div>
      </main>
    </div>
  );
}
