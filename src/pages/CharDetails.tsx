import { useParams } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { getCharacterById } from "../api";

export default function CharacterDetails() {
  const { id } = useParams({ from: "/character/$id" });
  const { data, isLoading } = useQuery({
    queryKey: ["character", id],
    queryFn: () => getCharacterById(id),
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-xl">{data.results}</h1>
      {/* <img src={data.image} alt={data.name} className="w-48 h-48" />
      <p>Status: {data.status}</p>
      <p>Species: {data.species}</p>
      <p>Gender: {data.gender}</p>
      <p>Origin: {data.origin.name}</p> */}
    </div>
  );
}
