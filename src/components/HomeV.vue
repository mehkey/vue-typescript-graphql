<template>
    <div class="container">
      <div class="container mt-3">
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            v-model="searchValue"
            placeholder="Search By Brand"
          />
          <button
            class="btn btn-outline-primary"
            v-on:click="searchByBrand"
            type="button"
          >
            Search
          </button>
        </form>
      </div>
      <div class="row mt-1">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Product Name</th>
              <th scope="col">Brand</th>
              <th scope="col">Cost</th>
              <th scope="col">Type</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in filterByBrand" :key="item.id">
              <td>{{ item.id }}</td>
              <td>{{ item.productName }}</td>
              <td>{{ item.brand }}</td>
              <td>{{ item.cost }}</td>
              <td>{{ item.type }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  <script>
  import gql from "graphql-tag";
  export default {
    apollo: {
      filterByBrand: {
        query: gql`
          query ($brandQuery: String) {
            filterByBrand(brand: $brandQuery) {
              id
              productName
              brand
              cost
              type
            }
          }
        `,
        variables() {
          return {
            brandQuery: this.brandQuery,
          };
        },
      },
    },
    data() {
      return {
        filterByBrand: [],
        searchValue: "",
        brandQuery: "",
      };
    },
    methods: {
      searchByBrand() {
        this.brandQuery = this.searchValue;
      },
    },
  };
  </script>