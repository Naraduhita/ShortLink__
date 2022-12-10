<template>
  <div class="full-height justify-content-center col-12 text-center py-5">
    <div class="text-3xl font-bold underline my-7">Login Shorlink Apps</div>
    <form class="" @submit.prevent="login">
      <p class="pt-5">
        <input v-model="email" placeholder="Email" type="text" class="border" />
      </p>
      <p>
        <input v-model="password" placeholder="Password" type="password" class="border" />
      </p>
    <button type="submit" class="p-2 bg-green-500 rounded-md mx-3">Login</button>
    </form>
    <p class="my-2">Don't have an account ?</p>
    <div class="text-3xl font-bold underline">
      <router-link to="/register"> Register</router-link>
    </div>
  </div>
</template>
<script>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default {
  name: 'Login',

  data: () => ({
    email: '',
  password: '',
  }),

  // https://firebase.google.com/docs/auth/web/start?hl=en&authuser=0
  methods: {
    login() {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((a) => {
          alert('Successfully logged in');
          console.log(a);
          this.$router.push('/dashboard');
        })
        .catch((error) => {
          alert(error.message);
        });
    },
 },
 };
</script>

<style>
/* Please ❤ this if you like it! */
@import url("https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900");
body {
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-size: 15px;
  line-height: 1.7;
  color: #e2eee2;
  background-color: #8cb68c;
  overflow-x: hidden;
}
a {
  cursor: pointer;
  transition: all 200ms linear;
}
a:hover {
  text-decoration: none;
}
.link {
  color: #c4c3ca;
}
.link:hover {
  color: #ffeba7;
}
p {
  font-weight: 500;
  font-size: 14px;
  line-height: 1.7;
}
h4 {
  font-weight: 600;
}
h6 span {
  padding: 0 20px;
  text-transform: uppercase;
  font-weight: 700;
}
.section {
  position: relative;
  width: 100%;
  display: block;
}
.full-height {
  min-height: 100vh;
}
</style>


<!-- {/* <template>
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
</script> --> */} -->