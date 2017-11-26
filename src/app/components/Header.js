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
    <div className="flex items-center justify-between pa2">
      <div className="pa2">{totalPoint}</div>
      <div className="pa2">
        <a
          className="f6 link dim br3 ph3 pv2 mb2 dib white bg-red mr1"
          onClick={onEventsReset}
        >
          Reset
        </a>
        {accessToken ? (
          <a
            className="f6 link dim br3 ph3 pv2 mb2 dib white bg-black"
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
    </div>
  );
}
