<template>
      <div class="full-height justify-content-center col-12 text-center py-5">

      <div class="text-3xl font-bold underline my-7 mb-3">Register Shorlink Apps</div>

      <form class="pb-2" @submit.prevent="handleSubmit">
        <p class="p-2">
          <input v-model="email" placeholder="Email" type="text" class="border" />
        </p>
        <p>
          <input
            v-model="password"
            placeholder="Password"
            type="password"
            class="border"
          />
        </p>
        <button type="submit" class="p-2 bg-green-500 rounded-md mx-3 my-2" @submit.prevent="handleSubmit" >
          Daftar
        </button>{{}}
      </form>
     
      <div class="text-3xl font-bold underline my-7">
        <router-link to="/"> Back> </router-link>
      </div>
      <div v-if="isSuccess != null">
        <h1 v-if="isSuccess === true">Berhasil Mendaftar</h1>
        <h1 v-if="isSuccess === false">Gagal Mendaftar</h1>
      </div>
    </div>
  </template>
  
  <script>
  import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
  
  export default {
    name: "Register",
  
    data() {
      return {
        email: "",
        password: "",
        token: undefined,
      };
    },
  
    methods: {
      async handleSubmit() {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth,this.email, this.password)
          .then((userCredential) => {
            alert("Successfully registered! Please login.");
            this.token = userCredential._tokenResponse;
            this.$router.push("/login");
          })
          .catch((error) => {
            alert(error.message);
          });
      },
    },
  };
  </script>
  

   <!-- <template>
    <div class="mt-8">
        <div class="lg:col-span-2">
          <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
              
              <div class="md:col-span-5">
                  <label for="email">Email</label>
                  <input type="text" name="email" id="email" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" 
                  v-model="App.input.user.email" placeholder="email@domain.com" />
                </div>
                
                <div class="md:col-span-5">
                  <label for="password">Password</label>
                  <input type="password" name="password" id="password" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" 
                  v-model="App.input.user.password" />
                </div>

            <div class="md:col-span-5 text-right">
              <div class="inline-flex items-end">
                <button @click="App.addRegister(App.input.user)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
              </div>
            </div>
            <router-link
                to="/login"
                class="bg-yellow-400 p-2 rounded-md text-black"
                >
                cancel</router-link
                >
          </div>
        </div>
    </div>
</template>

<script>
import {useApp} from '../../stores/index';
export default {
  setup() {
    const App = useApp();
    return {
      App,
    }
  },
  created() {
  }
}
</script> -->