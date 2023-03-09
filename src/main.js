//import { createApp } from 'vue'
//import App from './App.vue'

//createApp(App).mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import * as apolloProvider from './apollo.provider'
import * as routerConfig from './appRouter'

const app = createApp(App)

app.use(apolloProvider.provider);
app.use(routerConfig.router);
app.mount('#app');

/*import Vue from 'vue'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'

const httpLink = new HttpLink({
    uri: process.env.VUE_APP_GRAPHQL_ENDPOINT
})

// Create the apollo client
export const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
    connectToDevTools: true
})

// Install the Vue plugin

Vue.use(VueApollo)

export const apolloProvider = new VueApollo({
    defaultClient: apolloClient
})*/
/*
import VueApollo from 'vue-apollo'
//Vue.use(VueApollo)

//import { store } from './store/store'
//import App from './App.vue'

//const app = createApp(App)

//app.use(store)



//app.mount('#app')

import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'http://localhost:4000//graphql',
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

Vue.config.productionTip = false

/*new Vue({
  // inject apolloProvider here like vue-router or vuex
  apolloProvider,
  render: h => h(App),
}).$mount('#app')*/

/*new Vue({
    // inject apolloProvider here like vue-router or vuex
    apolloProvider,
    render: h => h(App),
  }).$mount('#app')*/

  