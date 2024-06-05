
import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { ModuleProps } from "../../types/samples/interfaces";

const Demo: React.FC<ModuleProps> = (props) => {
  return (
    <div>
    <h1>{props.heading}</h1>
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>No lectures</th>
          <th>No practicals</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.modules[0].name}</td>
          <td>{props.modules[0].noLectures}</td>
          <td>{props.modules[0].noPracticals}</td>
        </tr>
        <tr>
          <td>{props.modules[1].name}</td>
          <td>{props.modules[1].noLectures}</td>
          <td>{props.modules[1].noPracticals}</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
};

export default Demo;
