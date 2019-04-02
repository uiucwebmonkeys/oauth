import React from 'react';
import queryString from 'query-string';

const Auth = (props) => {
  const { location } = props;
  const qs = queryString.parse(location.search);

  return (
    <div>
      {JSON.stringify(qs)}
    </div>
  );
};

export default Auth;
