import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { ModuleProps } from "../../types/samples/interfaces";

const Demo: React.FC<ModuleProps> = (props) => {
  const list = props.modules.map((module, index) => 
    <tr key={index}>
      <td>{module.name}</td>
      <td>{module.noLectures}</td>
      <td>{module.noPracticals}</td>
    </tr>
  );
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
        {list}
      </tbody>
    </table>
    </div>
  );
};

export default Demo;
