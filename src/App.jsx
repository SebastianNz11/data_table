import DataTable from "react-data-table-component";
import { useState } from "react";
import { BsTrashFill, BsPencilFill } from "react-icons/bs";

export const App = () => {
  const initialData = [
    {
      id: 1,
      nombre: "Lorant",
      apellido: "Grunnill",
      email: "lgrunnill0@creativecommons.org",
    },
    { id: 2, nombre: "Richy", apellido: "Righy", email: "rrighy1@prweb.com" },
    {
      id: 3,
      nombre: "Eal",
      apellido: "Dumbrall",
      email: "edumbrall2@google.de",
    },
    {
      id: 4,
      nombre: "Quintana",
      apellido: "O'Leahy",
      email: "qoleahy3@weibo.com",
    },
    {
      id: 5,
      nombre: "Gare",
      apellido: "Rilton",
      email: "grilton4@craigslist.org",
    },
    {
      id: 6,
      nombre: "Lilly",
      apellido: "Cottham",
      email: "lcottham5@eepurl.com",
    },
    {
      id: 7,
      nombre: "Uri",
      apellido: "Dulson",
      email: "udulson6@engadget.com",
    },
    {
      id: 8,
      nombre: "Goldia",
      apellido: "Strother",
      email: "gstrother7@list-manage.com",
    },
    {
      id: 9,
      nombre: "Kira",
      apellido: "Maddrah",
      email: "kmaddrah8@tinyurl.com",
    },
    {
      id: 10,
      nombre: "Sascha",
      apellido: "Hannis",
      email: "shannis9@tripod.com",
    },
  ];

  const [filteredData, setFilteredData] = useState(initialData);

  const columns = [
    {
      name: "Id",
      selector: "id",
    },
    {
      name: "Nombre",
      selector: "nombre",
    },
    {
      name: "Apellido",
      selector: "apellido",
    },
    {
      name: "Correo",
      selector: "email",
    },
    {
      name: "Acciones",
      cell: () => (
        <div>
          <BsPencilFill className="me-3" />
          <BsTrashFill />
        </div>
      ),
      button: true,
    },
  ];

  const paginacionOpciones = {
    rowsPerPageText: "Filas por página",
    rangeSeparatorText: "de",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Todos",
  };

  const handleSearch = (value) => {
    const filteredResults = initialData.filter(
      (row) =>
        row.id.toString().includes(value) ||
        row.nombre.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredData(filteredResults);
  };

  return (
    <div className="container-fluid d-flex justify-content-center p-5">
      <div className="row col-8 p-5">
        <DataTable
          className="table border"
          columns={columns}
          data={filteredData}
          title="Nombres"
          pagination
          fixedHeader={true}
          paginationComponentOptions={paginacionOpciones}
          subHeader={true}
          noDataComponent={<div>No hay datos</div>}
          subHeaderComponent={
            <input
              type="text"
              placeholder="Buscar..."
              onChange={(e) => handleSearch(e.target.value)}
            />
          }
        />
      </div>
    </div>
  );
};
