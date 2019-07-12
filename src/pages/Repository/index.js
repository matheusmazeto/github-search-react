import React from "react";

function Repository({ match }) {
  return <div>Repository: {decodeURIComponent(match.params.repository)}</div>;
}

export default Repository;
