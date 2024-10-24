import Link from "next/link";

export default function iat355() {
  return (
    <div >
      <main className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        <Link href={"iat355/assignment1"} className="aspect-video w-full bg-white bg-opacity-[0.16] rounded-xl">
        <h2 className="text-text-primary font-medium text-xl p-4">Assignment 1</h2>
        </Link>
        <Link href={"iat355/assignment2"} className="aspect-video w-full bg-white bg-opacity-[0.16] rounded-xl">
        <h2 className="text-text-primary font-medium text-xl p-4">Assignment 2</h2>
        </Link>
        <Link href={"iat355/assignment3"} className="aspect-video w-full bg-white bg-opacity-[0.16] rounded-xl">
        <h2 className="text-text-primary font-medium text-xl p-4">Assignment 3</h2>
        </Link>

      </main>
    </div>
  );
}
