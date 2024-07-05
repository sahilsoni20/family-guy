import { Container } from "@/components/Container";
import { getAllCharacters } from "@/lib/characters";
import Image from "next/image";
import Link from "next/link";

export default async function HomePage() {
  const data = await getAllCharacters();

  return (
    <main>
      <Container className="px-5 w-full max-w-screen-md m-auto grid grid-cols-2 gap-1 py-5 md:grid-cols-3 lg:grid-cols-4">
        {data?.characters?.map((item) => {
          return (
            <Link
              href={`/characters/${item.slug}`}
              key={item.id}
              className="overflow-hidden rounded-md"
            >
              <Image
                src={item.avatar}
                alt=""
                width={500}
                height={500}
                className="transition-all duration-500 hover:scale-110 hover:-rotate-2"
              />
            </Link>
          );
        })}
      </Container>
    </main>
  );
}
