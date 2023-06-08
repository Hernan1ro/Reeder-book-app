import { useMemo } from "react";
import { useTable, useSortBy, useFilters, useGlobalFilter } from "react-table";
import { Link } from "react-router-dom";

import { Book } from "../types";

interface Props {
  books: Book[];
}

interface Headers {
  Header: string;
  accessor: string;
}

export const BookList = ({ books }: Props) => {
  const columns = useMemo<Headers[]>(
    () => [
      {
        Header: "Título",
        accessor: "name",
      },
      {
        Header: "Autor",
        accessor: "authors",
      },
      {
        Header: "Tipo",
        accessor: "mediaType",
      },
      {
        Header: "Fecha de publicación",
        accessor: "publisher",
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  }: any = useTable<any>(
    {
      columns,
      data: books,
    },
    useFilters,
    useGlobalFilter,
    useSortBy
  );

  const { globalFilter }: any = state;

  //------------------ get id number ----------------------- //
  function extractIdFromLink(link: string): string | null {
    const url = new URL(link);
    const segments = url.pathname.split("/");
    const id = segments[segments.length - 1];

    return id ? id : null;
  }

  return (
    <div className="w-full grid place-items-center">
      <input
        className="mb-4 border border-solid border-1 border-gray-300 rounded-md p-2 outline-primary w-3/12 sm:w-auto"
        type="text"
        value={globalFilter || ""}
        onChange={(e) => setGlobalFilter(e.target.value)}
        placeholder="Buscar"
      />

      <table
        {...getTableProps()}
        className="w-full border-collapse overflow-hidden shadow-lg rounded-lg"
      >
        <thead>
          {headerGroups.map((headerGroup: any) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              className="bg-blue-500 text-white text-left"
            >
              {headerGroup.headers.map((column: any) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="p-4"
                >
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row: any) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className="bg-blue-200 hover:bg-blue-100 transition-all text-dark hover:text-cyan"
              >
                {row.cells.map((cell: any) => {
                  return (
                    <td {...cell.getCellProps()} className="p-2">
                      <Link
                        to={`bookdetail/${extractIdFromLink(
                          cell.row.original.url
                        )}`}
                      >
                        {cell.render("Cell")}
                      </Link>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
