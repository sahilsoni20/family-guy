import { Container } from "@/components/Container";
import { getAllCharacters, getCharacterBySlug } from "@/lib/characters";
import Image from "next/image";

export const dynamicParams = false;

export async function generateStaticParams() {
  const { characters } = await getAllCharacters();
  return characters.map((character: any) => ({ slug: character.slug }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { character, characterQuotes } = await getCharacterBySlug(params.slug);

  return (
    <Container
      className="px-5 w-full max-w-screen-md m-auto flex flex-col gap-5 py-5"
      as="main"
    >
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold capitalize">{character.name}</h1>
        <ul className="flex gap-1 text-sm">
          {character.occupations.map((item: string) => {
            return (
              <li
                key={item}
                className="p-2 text-gray-300 bg-gray-800 rounded-md"
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>

      <p className="text-sm leading-6">{character.description}</p>
      <ul className="grid gap-2 sm:grid-cols-2">
        {character.images.map((image: string) => {
          return (
            <li
              key={image}
              className="relative flex overflow-hidden bg-gray-900 rounded-xl"
            >
              <Image src={image} alt="" width={760} height={435} className="transition-all duration-500 hover:scale-110 hover:rotate-2" />
            </li>
          );
        })}
      </ul>

      {/* if the character has any skill it will show or not */}
      {character.skills && (
        <>
          <h2 className="text-xl font-bold">Power and Skills</h2>
          <ul className="flex flex-wrap gap-1">
            {character.skills.map((item: string) => {
              return (
                <li
                  key={item}
                  className="flex justify-center flex-grow px-2 py-1 text-orange-400 rounded-full bg-orange-950"
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </>
      )}

      {/* if the character has any quotes it will show or not */}
      {characterQuotes && (
        <>
          <h2 className="text-xl font-bold">Famous Quotes</h2>
          <ul className="grid gap-5">
            {characterQuotes.map((item: any, idx: number) => {
              return (
                <li
                  key={idx}
                  className="p-2 italic text-gray-400 border-l-4 border-green-400 rounded-md"
                >
                  {item.quote}
                </li>
              );
            })}
          </ul>
        </>
      )}
    </Container>
  );
}
