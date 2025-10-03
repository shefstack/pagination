import { useQuery} from "@tanstack/react-query";
import { useSearch } from "@tanstack/react-router";
import { getCharacters } from "../api";
import CharTable from "../components/CharTable";
import RefreshBtn from "../components/RefreshBtn";

export default function CharList() {
  const { page = 1 } = useSearch({ from: "/" });

  const { data, isPending, error, refetch } = useQuery({
  queryKey: ["char", page],
  queryFn: () => getCharacters(page),
  initialData: {
    info: { pages: 0, count: 0, next: null, prev: null },
    results: [],
  
  keepPreviousData: true, }
});


  if (isPending) return <div>Data Loading</div>;
  if (error) return (console.log(error));

  return (
    <div>
      <h4>Rick & Morty Characters List</h4>
      <RefreshBtn onClick={() => refetch()} />
      <CharTable
        data={data.results}          
        totalPages={data.info.pages}  
        currentPage={page}
      />
    </div>
  );
}
