import { useQuery } from "@tanstack/react-query";
import { useSearch } from "@tanstack/react-router";
import { getCharacters } from "../api";
import CharTable from "../components/CharTable";
import RefreshBtn from "../components/RefreshBtn";
import { keepPreviousData } from "@tanstack/react-query";

export default function CharList() {
  const { page = 1 } = useSearch({ from: "/" });

  const { data, isPending, error, refetch } = useQuery({
    queryKey: ["char", page],
    queryFn: () => getCharacters(page),
    placeholderData:keepPreviousData,
  });

  if (isPending) return <div className="p-4">Loading...</div>;
  if (error) return <div className="p-4 text-red-500">Error loading characters</div>;

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Rick & Morty Characters</h1>
      <RefreshBtn onClick={() => refetch()} />
      <CharTable 
        data={data?.results} 
        totalPages={data?.info.pages} 
        currentPage={page} 
      />
    </div>
  );
}
