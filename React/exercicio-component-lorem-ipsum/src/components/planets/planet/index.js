import React, { useState, useEffect, Fragment } from "react";
import GrayImg from "../../shared/gray-img";
import DescriptionWithLink from "../../shared/DescriptionWithLink";
import Form from "./form";
async function getSatellites(id) {
  let response = await fetch(`http://localhost:3000/api/${id}.json`);
  let data = await response.json();
  return data;
}

// componentDidMount() {
//   getSatellites(props.id).then((data) => {
//     this.setState((state) => ({
//       satellites: data["satellites"],
//     }));
//   });
// }

const Planet = (props) => {
  const [satellites, setSatellites] = useState([]);

  useEffect(() => {
    getSatellites(props.id).then((data) => {
      setSatellites(data["satellites"]);
    });
  });

  const addSatellite = (new_satellite) => {
    setSatellites([...satellites, new_satellite]);
  };

  let title;
  if (props.title_with_underline)
    title = (
      <h4>
        <u>{props.name}</u>
      </h4>
    );
  else title = <h4>{props.name}</h4>;

  return (
    <Fragment>
      <div>
        {title}
        <DescriptionWithLink
          description={props.description}
          link={props.link}
        />
        <GrayImg img_url={props.img_url} gray={props.gray} />
        <h4>Satélites</h4>
        <hr />
        <Form addSatellite={addSatellite} />
        <hr />

        <ul>
          {satellites.map((satellite, index) => (
            <li key={index}>{satellite.name}</li>
          ))}
        </ul>
        <hr />
      </div>
    </Fragment>
  );
};

export default Planet;
