const { defaults: tsjPreset } = require('ts-jest/presets')

module.exports = {
  preset: 'react-native',
  setupFiles: [
    "<rootDir>/jest/setup.js",
    './node_modules/react-native-gesture-handler/jestSetup.js'
  ],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.spec.json',
    },
  },
  transform: {
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/jest/fileTransformer.js',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    "node_modules/(?!(react-native"
    + "|react-native-ratings"
    + "|react-native-size-matters"
    + "|@react-native"
    + "|react-native-elements"
    + "|react-native-dropdown-picker"
    + "|@react-navigation"
    + "|react-native-gesture-handler"
    + "|react-native-reanimated"
    + "|react-native-safe-area-context"
    + "|react-native-screens"
    + ")/)",
  ]
}