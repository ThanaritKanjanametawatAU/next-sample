import Image from "next/image";

export default async function Page({params, searchParams}) {

    const name = searchParams?.name || "World";
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-bold">Hello {name}!</h1>
      </main>
  );
}

