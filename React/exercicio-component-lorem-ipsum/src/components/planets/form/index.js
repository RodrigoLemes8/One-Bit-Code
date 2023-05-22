import React, { Fragment, useState } from "react";

const initialState = {
  name: "",
  description: "",
  link: "",
  link_url: "",
};

const From = (props) => {
  const [fields, setFields] = useState(initialState);

  const handleFieldsChange = (e) =>
    setFields({
      ...fields,
      [e.currentTarget.name]: e.currentTarget.value,
    });

  const handleSubmit = (event) => {
    props.addPlanet(fields);
    event.preventDefault();
    setFields(initialState);
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={fields.name}
            onChange={handleFieldsChange}
          />
        </div>

        <div>
          <label htmlFor="description">description</label>
          <input
            id="description"
            name="description"
            type="tdescription"
            value={fields.description}
            onChange={handleFieldsChange}
          />
        </div>

        <div>
          <label htmlFor="link">link:</label>
          <input
            id="link"
            name="link"
            type="tlink"
            value={fields.link}
            onChange={handleFieldsChange}
          />
        </div>

        <div>
          <label htmlFor="img_url">img_url:</label>
          <input
            id="img_url"
            name="img_url"
            type="timg_url"
            value={fields.img_url}
            onChange={handleFieldsChange}
          />
        </div>

        <br />
        <input type="submit" />
      </form>
    </Fragment>
  );
};

export default From;
