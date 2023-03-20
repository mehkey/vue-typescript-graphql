<!--template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style-->


<template>
  <div class="main">
    <div class="row">
      <div class="container">
        <div class="col-md-12">
          <h1>Book Listing APP With Vue.js Apollo and GraphQL</h1>
          <form >
            <div class="form-group">
              <input type="text" v-model="title" class="form-control" id="title" placeholder="Title">
            </div>
            <div class="form-group">
              <input type="text" v-model="author"  class="form-control" id="author" placeholder="Author">
            </div>
            <div class="form-group">
              <textarea v-model="description" class="form-control" id="description" rows="3"></textarea>
            </div>
            <button @click="createBook" type="button" class="btn btn-secondary btn-lg btn-block">Add todo</button>
          </form>
        </div>
      </div>
    </div>
    
    <div class="row">
      <div class="container mt-4">
        <div v-for="book in books" :key="book.id">
          <div class="col-md-12">
            <div class="">
                <div class="card">
                  <div class="card-body">
                    Title:{{book.title}}
                    <hr>
                    Author:{{book.author}}
                    Descroption{{book.description}}
                  </div>
                </div>
                
            </div>
          </div>
          <br>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'mainApp',
  data(){
    return{
      books:'',

      title:'',
      author:'',
      description:''
    }
  },

  apollo:{
    books:{
      query: gql`
        query {
          books{
            title,
            author,
            description
          }
        }
      `,
    }
  },

  methods:{
    createBook(){
      this.$apollo.mutate({
        
        mutation: gql`
            mutation createBook($title:String!, $author:String!, $description:String!){
              createBook(title: $title, author:$author, description:$description){
                title,
                author,
                description
              }
            }
          `,
          variables: {
            title: this.title,
            author: this.author,
            description: this.description
          }
      })
      .then(response => {
        this.books = response.data.createBook
        location.reload()
      })
    },
  }

  

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
  padding-top: 5%;
}
</style>
