const Table = ({ sat }) => {
  function activeOrInactive(data) {
    const activity = data.operational;
    if(activity) {
      return(
        "active"
      );
    }
      return(
        "inactive"
      );
}
  return (
    <table>
    <thead>
     <tr>
       <th>Name</th>
       <th>Type of Satellite</th>
       <th>Launch Date</th>
       <th>Status</th>
     </tr>
     </thead>
     <tbody>
      {sat.map((data, id) => {
        console.log(id);
        return (
          <tr key={id}>
            <td>{data.name}</td>
            <td>{data.type}</td>
            <td>{data.launchDate}</td>
            <td>{activeOrInactive(data)}</td>
          </tr>
         );
      })}
     </tbody>
   </table>
  );
};

export default Table;