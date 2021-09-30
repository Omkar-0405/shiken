import React, { useMemo } from "react";
import { useTable } from "react-table";
import MOCK_DATA from "../../assets/MOCK_DATA.json";
import { VerificationButton } from "../button/Button";
import { COLUMNS } from "./columns/Columns";
import "./table.css";
import Table from 'react-bootstrap/Table'

export const BasicTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data
  });

 const students = [
    {
      id: 1,
      first_name: "krish"
    },
    {
      id: 2,
      first_name: "krish2"
    },
    {
      id: 3,
      first_name: "krish3"
    },
  ]
  return (
    // <table {...getTableProps()}>
    //   <thead>
    //     {headerGroups.map((headerGroup) => (
    //       <tr {...headerGroup.getHeaderGroupProps()}>
    //         {headerGroup.headers.map((column) => (
    //           <th {...column.getHeaderProps()}>{column.render("Header")}</th>
    //         ))}
    //       </tr>
    //     ))}
    //   </thead>
    //   <tbody {...getTableBodyProps()}>
    //     {rows.map((row) => {
    //       prepareRow(row);
    //       return (
    //         <tr {...row.getRowProps()}>
    //           {row.cells.map((cell) => {
    //             return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
    //           })}
    //         </tr>
    //       );
    //     })}
    //   </tbody>
    //   <VerificationButton />
    // </table>
    <>
      <table>

        <tr >
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
        {
          students.map(student => {
            <tr key={student.id}>
              <td>{student.first_name}</td>
              <td>{student.first_name}</td>
              <td>{student.first_name}</td>
            </tr>

          })
        }




      </table>

      <Table striped bordered hover responsive variant="">

        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {
            console.log(MOCK_DATA),
            MOCK_DATA.map(student => {
              <tr >
                {console.log(student)}
                <td>{student.sr_no} ahga</td>
                <td>{student.first_name}shbshb</td>
                <td>{student.last_name}hbh</td>
                <td>{student.status}hbh</td>
              </tr>
            })

          }


        </tbody>
      </Table>


    </>
  );
};
