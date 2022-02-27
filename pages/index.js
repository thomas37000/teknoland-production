import Head from "next/head";
import Image from "next/image";
import skulls from "../public/skulls.jpeg";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Teknoland-production, Techno vinyls and digital music</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full h-screen">
        <h1 className="text-3xl">Teknoland Production</h1>
        <div className="">
          {/* <Image
            src={skulls}
            alt="skulls"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          /> */}
        </div>
      </main>

      <footer className=""></footer>
    </div>
  );
}
