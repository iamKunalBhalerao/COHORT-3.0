import axios from "axios";
import React from "react";

const page = async () => {
  await new Promise((r) => setTimeout(r, 500));

  const { data } = await axios.get(
    "https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details"
  );

  return (
    <div>
      {data.name}
      {data.email}
    </div>
  );
};

export default page;
