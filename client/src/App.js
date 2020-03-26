import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { listLogEntries } from './API';
import LogEntryForm from './LogEntryForm';

const App = () => {
  const [logEntries, setLogEntries] = useState([]);
  const [showPopup, setShowPopup] = useState({});
  const [addEntryLocation, setAddEntryLocation] = useState(null);

  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 41.1277557,
    longitude: -100.7946784,
    zoom: 3
  });

  useEffect(() => {
    (async () => {
      const logEntries = await listLogEntries();
      console.log(logEntries);
      setLogEntries(logEntries);
    })();
  }, []);

  const showAddMarkerPopup = e => {
    const [longitude, latitude] = e.lngLat;
    setAddEntryLocation({
      latitude,
      longitude
    });
  };

  return (
    <ReactMapGL
      {...viewport}
      onDblClick={showAddMarkerPopup}
      mapStyle="mapbox://styles/simondtw/ck7txpw8e00ko1ilaurz60ole"
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      onViewportChange={setViewport}
    >
      {logEntries.map(logEntry => (
        <React.Fragment key={logEntry._id}>
          <Marker latitude={logEntry.latitude} longitude={logEntry.longitude}>
            <div
              onClick={() => {
                setShowPopup({
                  [logEntry._id]: true
                });
              }}
            >
              <img
                style={{
                  height: `${8 * viewport.zoom}px`,
                  width: `${8 * viewport.zoom}px`
                }}
                className="marker"
                src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png"
                alt="marker"
              />
            </div>
          </Marker>
          {showPopup[logEntry._id] ? (
            <Popup
              dynamicPosition={true}
              latitude={logEntry.latitude}
              longitude={logEntry.longitude}
              closeButton={true}
              closeOnClick={false}
              onClose={() => setShowPopup({})}
              anchor="top"
            >
              <div className="popup">
                <h3>{logEntry.title}</h3>
                <p>{logEntry.comments}</p>
                <small>
                  Visited on:{' '}
                  {new Date(logEntry.visitDate).toLocaleDateString()}
                </small>
              </div>
            </Popup>
          ) : null}
        </React.Fragment>
      ))}
      {addEntryLocation ? (
        <>
          <Marker
            latitude={addEntryLocation.latitude}
            longitude={addEntryLocation.longitude}
          >
            <div>
              <img
                style={{
                  height: `${7.5 * viewport.zoom}px`,
                  width: `${7.5 * viewport.zoom}px`
                }}
                className="marker"
                src="https://image.flaticon.com/icons/png/512/37/37134.png"
                alt="marker"
              />
            </div>
          </Marker>
          <Popup
            dynamicPosition={true}
            latitude={addEntryLocation.latitude}
            longitude={addEntryLocation.longitude}
            closeButton={true}
            closeOnClick={false}
            onClose={() => setAddEntryLocation(null)}
            anchor="top"
          >
            <div className="popup">
              <LogEntryForm />
            </div>
          </Popup>
        </>
      ) : null}
    </ReactMapGL>
  );
};

export default App;
