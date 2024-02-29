<!-- placeholder -->

<template>
    <button type="button" class="btn modalButton" data-bs-toggle="modal" data-bs-target="#updateUserModal">
      Update User
    </button>
  
    <!-- Modal -->
    <div class="modal fade" id="updateUserModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Update Users</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="updateUser">
              <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" placeholder="user ID" v-model="payload.userID">
              </div>
              <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" placeholder="first name" v-model="payload.firstName">
              </div>
              <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" placeholder="last name" v-model="payload.lastName">
              </div>
              <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" placeholder="user age" v-model="payload.userAge">
              </div>
              <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" placeholder="gender" v-model="payload.Gender">
              </div>
              <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" placeholder="user role" v-model="payload.userRole">
              </div>
              <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" placeholder="email address" v-model="payload.emailAdd">
              </div>
              <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" placeholder="user password" v-model="payload.userPass">
              </div>
              <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" placeholder="user profile" v-model="payload.userProfile">
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-success" data-bs-dismiss="modal">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UpdateUser',
    data() {
      return {
        payload: {
          userID: '',
          firstName: '',
          lastName: '',
          userAge: '',
          Gender: '',
          userRole: '',
          emailAdd: '',
          userPass: '',
          userProfile: ''
        }
      }
    },
    methods: {
      updateUser() {
        this.$store.dispatch('updateUser', {id: this.payload.userID, data: this.payload});
        window.location.reload()
      }
    }
  }
  </script>
  
  <style scoped>

  </style>