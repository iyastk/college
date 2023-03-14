import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Links(props) {
  const { linkText, linkUrl } = props;
  return (
    <Fragment>
      <Link to={linkUrl}>
        <div>{linkText}</div>
      </Link>
    </Fragment>
  );
}

export default Links;
