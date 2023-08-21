const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // baseUrl, etc
    supportFile: false,
    fixturesFolder: false,
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
