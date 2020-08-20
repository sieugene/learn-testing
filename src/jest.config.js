module.exports = {
    "roots": [
      "<rootDir>/src"
    ],
    "moduleFileExtensions": [
      "js",
      "jsx",
      "json",
      "node"
    ],
    "snapshotSerializers": ["enzyme-to-json/serializer"],
    "coverageThreshold": {
      "global": {
        "statements": 100,
        "branches": 50,
        "functions": 100,
        "lines": 100
      }
    }
  }