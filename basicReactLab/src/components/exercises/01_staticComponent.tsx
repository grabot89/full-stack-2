import React from "react";

const Demo: React.FC = () => {
  return (
    <div>
    <h1>H.Dip in Computer Science 2023</h1>
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
          <td>Mobile Dev</td>
          <td>2</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Full Stack 2</td>
          <td>3</td>
          <td>2</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
};

export default Demo;
