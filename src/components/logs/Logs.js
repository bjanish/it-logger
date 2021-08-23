import React, { useState, useEffect } from 'react';

const Logs = () => {
  const [logs, setLogs] = useState([]); // logs state
  const [loading, setLoading] = useState(false); // loading state

  // get logs
  useEffect(() => {
    // set loading state
    setLoading(true);

    // get logs
    getLogs();

    // set loading state
    setLoading(false);

    // eslint-disable-next-line
  }, []);
  const getLogs = async () => {
    setLoading(true);
    const res = await fetch('/logs');
    const data = await res.json();

    setLogs(data);
    setLoading(false);
  };
  // If loading is true, show loading spinner
  if (loading) {
    return <h4>Loading...</h4>;
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">No logs to show...</p>
      ) : (
        logs.map((log) => <li className="collection-item"> {log.message} </li>)
      )}
    </ul>
  );
};

export default Logs;
