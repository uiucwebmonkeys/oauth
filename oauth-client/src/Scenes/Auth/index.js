import React, { useState, useEffect } from 'react';
import queryString from 'query-string';

const Auth = (props) => {
  const { location } = props;
  const qs = queryString.parse(location.search);

  const [ data, setData ] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/info?code=${qs.code}`)
      .then(r => {
        if (r.status >= 400) {
          throw new Error('Request failed');
        }
        return r.json();
      }).then(d => {
        if (d.access_token) {
          return fetch(`https://api.github.com/user?access_token=${d.access_token}`)
            .then(r => r.json())
        }
      }).then(d => {
        setData(d);
      }).catch(e => {
        setData({ error: e });
      });
  }, []);

  if (data && data.login) {
    return (
      <div>
        <h1>{data.login}</h1>
        <img src={data.avatar_url} alt="avatar" />
      </div>
    );
  }

  return (
    <div>
      {JSON.stringify(qs)}
      {JSON.stringify(data)}
    </div>
  );
};

export default Auth;
