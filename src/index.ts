import { App } from "vue"

const plugin = {
    install(app: App) {
      // Register core components
      console.log('This vue plugin does absolutely nothing')
      console.warn('OMG BREAKING CHANGE ⚠️')
    },
  }
  
  export default plugin
  