import { Container } from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import { getAllCharacters } from "@/lib/characters";

export default async function Home() {
  const data = getAllCharacters();

  return (
    <main>
      <Container className="">
        {characters.map((item) => (
          <Link href={`/characters/${item.slug}`} key={item.name}>
            <div>
              <Image
                src={item.avatar}
                alt={item.name}
                width={500}
                height={500}
              />
            </div>
          </Link>
        ))}
      </Container>
    </main>
  );
}
