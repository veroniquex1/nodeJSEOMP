import { createStore } from 'vuex'
import axios from 'axios'
import sweet from 'sweetalert'
import { useCookies } from 'vue3-cookies'
const {cookies} = useCookies()
import router from '@/router'
import AuthenticateUser from '@/service/AuthenticateUser'
const blueURL = 'https://nodejseomp-5u9s.onrender.com/'

export default createStore({
    state: {
      users: null,
      user: null,
      products: null,
      product: null
    },
    getters: {
    },
    mutations: {
      setUsers(state, value) {
        state.users = value
      },
      setUser(state, value) {
        state.user = value
      },
      setProducts(state, value) {
        state.products = value
      },
      setProduct(state, value) {
        state.product = value
      },
    },
    actions: {
      async register(context, payload) {
        try{
          let {msg} = (await axios.post(`${blueURL}users/register`, payload)).data
          if(msg) {
            context.dispatch('fetchUsers')
            sweet({
              title: 'Registration',
              text: msg,
              icon: "success",
              timer: 2000
            })
            //
            router.push({name: 'login'})
          }
        }catch(e) {
          sweet({
            title: 'Error',
            text: 'Please try again later',
            icon: "error",
            timer: 2000
          })
        }
      },
      async fetchUsers(context) {
        try{
          let {results} = (await axios.get(`${blueURL}users`)).data
          if(results) {
            context.commit('setUsers', results)
          }
        }catch(e) {
          sweet({
            title: 'Error',
            text: 'An error occurred when retrieving users.',
            icon: "error",
            timer: 2000
          })
        }
      },
      async fetchUser(context, payload) {
        try{
          let {result} = (await axios.get(`${blueURL}users/${payload.id}`)).data
          if(result) {
            context.commit('setUser', result)
          }else {
            sweet({
              title: 'Retrieving a single user',
              text: 'User was not found',
              icon: "info",
              timer: 2000
            })
          }
        }catch(e) {
          sweet({
            title: 'Error',
            text: 'A user was not found.',
            icon: "error",
            timer: 2000
          })
        }
      },
      async updateUser(context, payload) {
        try{
          let {msg} = await axios.patch(`${blueURL}users/update/${payload.id}`)
          if(msg) {
            context.dispatch('fetchUsers')
            sweet({
              title: 'Update user',
              text: msg,
              icon: "success",
              timer: 2000
            })
          }
        }catch(e) {
          sweet({
            title: 'Error',
            text: 'An error occurred when updating a user.',
            icon: "success",
            timer: 2000
          })
        }
      },
      async deleteUser({commit, dispatch}, payload) {
        try{
          await axios.delete(`${blueURL}users/delete/${payload.id}`)
            commit('setUsers');
            dispatch('fetchUsers')
            sweet({
              title: 'Delete user',
              icon: "success",
              timer: 2000
            })
        }catch(e) {
          sweet({
            title: 'Error',
            text: 'An error occurred when deleting a user.',
            icon: "error",
            timer: 2000
          })
        }
      },
      async login(context, payload) {
        try{
         const {msg, token, result} = (await axios.post(`${blueURL}users/login`, payload)).data
         if(result){
          context.commit('setUser', {msg, result})
          cookies.set('LegitUser', {
            msg, token, result
          })
          AuthenticateUser.applyToken(token)
          sweet({
            title: msg,
            text: `Welcome back,
            ${result?.firstName} ${result?.lastName}`,
            icon: "success",
            timer: 2000
          })
            router.push({name: 'home'})
          }else {
            sweet({
              title: 'info',
              text: msg,
              icon: "info",
              timer: 2000
            })
          }
        }catch(e) {
          sweet({
            title: 'Error',
            text: 'Failed to login.',
            icon: "error",
            timer: 2000
          })
        }
      },
      async fetchProducts(context) {
        try{
          let {results} =
          (await axios.get(`${blueURL}products`)).data
          if(results) {
            context.commit('setProducts', results)
          }
        }catch(e) {
          sweet({
            title: 'Error',
            text: 'An error occurred when retrieving products.',
            icon: "error",
            timer: 2000
          })
        }
      },
      async fetchProduct(context, payload) {
        try{
          let {result} = (await axios.get(`${blueURL}products/${payload.id}`)).data
          if(result) {
            context.commit('setProduct', result)
          }else {
            sweet({
              title: 'Retrieving a single product',
              text: 'Product was not found',
              icon: "info",
              timer: 2000
            })
          }
        }catch(e) {
          sweet({
            title: 'Error',
            text: 'A product was not found.',
            icon: "error",
            timer: 2000
          })
        }
      }
    },
    async deleteProduct({commit, dispatch}, payload) {
      try{
        await axios.delete(`${blueURL}products/delete/${payload.id}`)
          commit('setProducts');
          dispatch('fetchProducts')
          sweet({
            title: 'Delete product',
            icon: "success",
            timer: 2000
          })
      }catch(e) {
        sweet({
          title: 'Error',
          text: 'An error occurred when deleting a product.',
          icon: "error",
          timer: 2000
        })
      }
    },
    async addProduct(context, payload) {
      try{
        let {msg} = (await axios.post(`${blueURL}products/addProduct`, payload))
        if(msg) {
          context.dispatch('setProducts')
          sweet({
            title: 'Registration',
            text: msg,
            icon: "success",
            timer: 2000
          })

        }
      }catch(e) {
        sweet({
          title: 'Error',
          text: 'Please try again later',
          icon: "error",
          timer: 2000
        })
      }
    },
    modules: {
    }
  })
