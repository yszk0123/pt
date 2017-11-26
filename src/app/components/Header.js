import * as React from 'react';

export default function Header({
  accessToken,
  authUrl,
  contents,
  totalPoint,
  onEventsReset,
  onPostReport,
}) {
  return (
    <header className="flex items-center justify-between bg-blue ph2 pw3 mb3">
      <div className="f6 br-100 h2 w2 tc white bg-black pa2">{totalPoint}</div>
      <div className="pa2">
        <a
          className="f6 link dim br2 ph3 pv2 dib white bg-red mr1"
          onClick={onEventsReset}
        >
          Reset
        </a>
        {accessToken ? (
          <a
            className="f6 link dim br2 ph3 pv2 dib white bg-black"
            onClick={() => onPostReport(accessToken, contents)}
          >
            Report
          </a>
        ) : (
          <a className="f6 link" href={authUrl}>
            Authenticate with Dropbox
          </a>
        )}
      </div>
    </header>
  );
}
