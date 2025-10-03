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
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Species</th>
          </tr>
        </thead>
        <tbody>
          {data.map((elem) => (
            <tr
              key={elem.id}
              onClick={() =>
                navigate({
                  to: "/character/$id",
                  params: { id: String(elem.id) },
                })
              }
            >
              <td>{elem.name}</td>
              <td>{elem.status}</td>
              <td>{elem.species}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
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
