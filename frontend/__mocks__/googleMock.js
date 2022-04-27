const setupGoogleMock = () => {
    global.window.google = {
      maps: {
        Geocoder: jest.fn(() => ({
          geocode: mockGeocoder,
        })),
        GeocoderStatus: {
          ERROR: 'ERROR',
          INVALID_REQUEST: 'INVALID_REQUEST',
          OK: 'OK',
          OVER_QUERY_LIMIT: 'OVER_QUERY_LIMIT',
          REQUEST_DENIED: 'REQUEST_DENIED',
          UNKNOWN_ERROR: 'UNKNOWN_ERROR',
          ZERO_RESULTS: 'ZERO_RESULTS',
        },
        Map: class{
            setCenter(){}
            setZoom(){}
            setOptions(){}
            getCenter(){}
            getZoom(){}
            getBounds(){}
            getMapTypeId(){}
            setMapTypeId(){}
            addListener(){}
            addListenerOnce(){}
            removeListener(){}
            clearInstanceListeners(){}
            getCenter(){}
            fitBounds(){}
            panTo(){}
        },
        DirectionsService: class{
            route(){
                return Promise.resolve({
                    routes: [
                        {
                            legs: [
                                {
                                    distance: {
                                        text: '1.2 km',
                                        value: 1234
                                    },
                                    duration: {
                                        text: '1 min',
                                        value: 1234
                                    },
                                    start_location: {
                                        lat: 52.4095238,
                                        lng: 16.931992
                                    },
                                    end_location: {
                                        lat: 52.4095238,
                                        lng: 16.931992
                                    }
                                }
                            ]
                        }
                    ]
                })
            }
        },
        LatLngBounds: class{
            extend(){}
            getCenter(){}
        },
        DirectionsRenderer: jest.fn(() => ({
            setMap: jest.fn(),
            setOptions: jest.fn(),
            setPanel: jest.fn(),
            setDirections: jest.fn(),
        })),
        DirectionsRequest: jest.fn(() => ({
            origin: origin,
            destination: destination,
            travelMode: 'DRIVING',
        })),
        DirectionResult: jest.fn(() => ({
            routes: [{
                walking: [{
                    distance: {
                        text: '1.2 km',
                        value: 1234,
                    },
                    duration: {
                        text: '1 min',
                        value: 1234,
                    },
                }],
                driving: [{
                    distance: {
                        text: '1.2 km',
                        value: 1234,
                    },
                    duration: {
                        text: '1 min',
                        value: 1234,
                    },
                }]
            }],
        })),
        DirectionsStatus: {
            INVALID_REQUEST: 'INVALID_REQUEST',
            MAX_WAYPOINTS_EXCEEDED: 'MAX_WAYPOINTS_EXCEEDED',
            NOT_FOUND: 'NOT_FOUND',
            OK: 'OK',
            OVER_QUERY_LIMIT: 'OVER_QUERY_LIMIT',
            REQUEST_DENIED: 'REQUEST_DENIED',
            UNKNOWN_ERROR: 'UNKNOWN_ERROR',
            ZERO_RESULTS: 'ZERO_RESULTS',
        },
        ErrorEvent: {
            ERROR: 'ERROR',
        },
        Marker: jest.fn(() => ({
            setMap: jest.fn(),
            setPosition: jest.fn(),
            setTitle: jest.fn(),
            setDraggable: jest.fn(),
            setVisible: jest.fn(),
            setAnimation: jest.fn(),
            setLabel: jest.fn(),
            setOpacity: jest.fn(),
            setOptions: jest.fn(),
            setIcon: jest.fn(),
            setZIndex: jest.fn(),
            setCursor: jest.fn(),
            setClickable: jest.fn(),
            setCrossOnDrag: jest.fn(),
            setCrosshair: jest.fn(),
            setShape: jest.fn(),
        })),
        MarkerImage: jest.fn(() => ({
            setUrl: jest.fn(),
            setSize: jest.fn(),
            setOrigin: jest.fn(),
            setAnchor: jest.fn(),
            setScaledSize: jest.fn(),
        })),
        MarkerShape: jest.fn(() => ({
            type: 'CIRCLE',
            coords: [1, 2, 3, 4, 5],
        })),
        MarkerAnimation: {
            DROP: 'DROP',
            BOUNCE: 'BOUNCE',
        },
        InfoWindow: jest.fn(() => ({
            setContent: jest.fn(),
            setPosition: jest.fn(),
            setZIndex: jest.fn(),
            open: jest.fn(),
            close: jest.fn(),
            isOpen: jest.fn(),
            getContent: jest.fn(),
            getPosition: jest.fn(),
            getZIndex: jest.fn(),
        })),
        Circle: jest.fn(() => ({
            setCenter: jest.fn(),
            setRadius: jest.fn(),
            setEditable: jest.fn(),
            setDraggable: jest.fn(),
            setVisible: jest.fn(),
            setMap: jest.fn(),
            setOptions: jest.fn(),
            getBounds: jest.fn(),
            getCenter: jest.fn(),
            getRadius: jest.fn(),
            getEditable: jest.fn(),
            getDraggable: jest.fn(),
            getVisible: jest.fn(),
            getMap: jest.fn(),
            getOptions: jest.fn(),
        })),
      },
    };
};

export default setupGoogleMock;