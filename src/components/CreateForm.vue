<template>
    <div class="container mt-4">
      <form class="col-lg-6 offset-lg-3">
        <div class="row text-center">
          <h4>Create A Gadget</h4>
        </div>
        <input
          class="form-control mt-2"
          type="text"
          v-model="gadget.productName"
          placeholder="Enter Product Name"
        />
        <input
          class="form-control mt-2"
          type="text"
          v-model="gadget.brand"
          placeholder="Enter Brand"
        />
        <input
          class="form-control mt-2"
          type="number"
          v-model="gadget.cost"
          placeholder="Enter Cost"
        />
        <input
          class="form-control mt-2"
          type="text"
          v-model="gadget.type"
          placeholder="Enter Type"
        />
  
        <button
          class="btn btn-outline-primary offset-5 mt-2 justify-content-center"
          type="button"
          v-on:click="addGadget"
        >
          Create
        </button>
      </form>
    </div>
  </template>
  <script>
  import gql from "graphql-tag";
  const filterByBrandQuery = gql`
    query ($brandQuery: String) {
      filterByBrand(brand: $brandQuery) {
        id
        productName
        brand
        cost
        type
      }
    }
  `;
  export default {
    data() {
      return {
        gadget: {
          productName: "",
          brand: "",
          cost: 0,
          type: "",
        },
      };
    },
    methods: {
      addGadget() {
        this.$apollo
          .mutate({
            mutation: gql`
              mutation ($myGadgets: GadgetsInput) {
                save(model: $myGadgets) {
                  id
                  productName
                  brand
                  cost
                  type
                }
              }
            `,
            variables: {
              myGadgets: this.gadget,
            },
            update: (store, { data: { save } }) => {
              const gadgetsQuery = {
                query: filterByBrandQuery,
                variables: { brandQuery: "" },
              };
  
              const existingData = Object.assign(
                {},
                store.readQuery(gadgetsQuery)
              );
              const newData = [];
              newData.push(save);
              for (let i = 0; i < existingData.filterByBrand.length; i++) {
                newData.push(existingData.filterByBrand[i]);
              }
              existingData.filterByBrand = newData;
              store.writeQuery({
                query: filterByBrandQuery,
                variables: { brandQuery: "" },
                data: existingData,
              });
            },
          })
          .then((data) => {
            console.log(data);
            this.$router.push("/");
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
  };
  </script>