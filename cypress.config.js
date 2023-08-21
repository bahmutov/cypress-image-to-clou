const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'q9f4sx',
  e2e: {
    // baseUrl, etc
    supportFile: false,
    fixturesFolder: false,
    video: false,
    viewportHeight: 1000,
    viewportWidth: 1200,
    setupNodeEvents(on, config) {
      // https://on.cypress.io/after-screenshot-api
      on('after:screenshot', (details) => {
        console.log('details')
        console.log(details)
        if (details.name === 'spec2-hello') {
          console.log('uploading hello.png image instead')
          return { path: 'hello.png' }
        }
      })
    },
  },
})
