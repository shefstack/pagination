import { useNavigate } from "@tanstack/react-router";

type Props = {
  data: any[];
  totalPages: number;
  currentPage: number;
};

export default function CharTable({ data, totalPages, currentPage }: Props) {
  const navigate = useNavigate();

  return (
    <div>
      <table className="border w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Species</th>
          </tr>
        </thead>
        <tbody>
          {data.map((char) => (
            <tr
              key={char.id}
              onClick={() =>
                navigate({
                  to: "/character/$id",
                  params: { id: String(char.id) }, // ✅ required
                })
              }
              className="cursor-pointer hover:bg-gray-100"
            >
              <td>{char.name}</td>
              <td>{char.status}</td>
              <td>{char.species}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between mt-4">
        {currentPage > 1 && (
          <button
            onClick={() =>
              navigate({
                to: "/",
                search: { page: currentPage - 1 },
              })
            }
          >
            Previous
          </button>
        )}
        {currentPage < totalPages && (
          <button
            onClick={() =>
              navigate({
                to: "/",
                search: { page: currentPage + 1 },
              })
            }
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
