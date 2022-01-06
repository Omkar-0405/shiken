import React from "react";
import { useContext } from "react";
import Filter from "../../components/filter/Filters";
import Layout from "../../components/layout/Navbar";
import { getStudentsBySem } from "../../context/actions";
import { Context } from "../../context/context";
// import { BasicTable } from '../../components/table/Table'

export const GenerateHallTicket = (props) => {
  const { state, dispatch } = useContext(Context);
  return (
    <div>
      <Layout>
        <h2 className="ml-3 mt-2">
          <b>Generate Hall Tickets</b>
        </h2>
        <Filter
          // onLoad={dispatch(getStudentsBySem(state))}
          hallTicket={true}
        />
        {/* <BasicTable/> */}
      </Layout>
    </div>
  );
};
