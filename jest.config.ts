module.exports = {  
  preset: 'ts-jest',
  transformIgnorePatterns: ['node_modules/(?!(sucrase)/)'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx|mjs)$': 'ts-jest',
  },
  testEnvironment: 'jsdom',
  // ...the rest of your config
}