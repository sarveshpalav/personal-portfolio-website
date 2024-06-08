import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <div className=" p-6 rounded-lg">
           
        <h1 className="header font-inter text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Sarvesh Palav</h1>
        <h2 className="sub-heading font-inter text-base sm:text-lg mt-4 md:ml-2">Full Stack Application Developer</h2>

        </div>
        <div className="font-inter p-6  brief">
        Over the years, I’ve built products for companies and businesses around the globe, ranging from marketing websites to complex solutions and enterprise apps, with a focus on fast, elegant, and accessible user experiences.
Currently, I work at Optel Group as a Software Consultant, crafting thoughtful and inclusive experiences that adhere to web standards for diverse clients across the traceability domain. I leverage technologies like Python, FastAPI, PostgreSQL, React-TypeScript, and Google Cloud Platform to deliver scalable and reliable solutions.

        </div>
        </div>
    </main>
  );
}
