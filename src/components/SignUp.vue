<template>
   <div v-if="show" class="signModal">

      <form @submit.prevent="signup()" class="screen-1 signup" name="myForm" action="" onsubmit="" method="post">
         <div class="d-flex justify-content-end">
            <button class="btn shadow-none w-5 m-0" @click="$emit('close')">
               <ion-icon name="close-outline"></ion-icon>
            </button>
         </div>
         <div class="d-flex justify-content-center">
            <img class="w-50 mb-4" src="../../public/tool_logo3.png" alt="logo-tool" />
         </div>
         <h4 class="">SIGN UP FOR FREE</h4>
         <div class="email">
            <label for="name">Full name</label>
            <div>
               <ion-icon name="at-outline"></ion-icon>
               <input v-model="fullname" type="text" placeholder=" Username" name="name">
            </div>
         </div>
         <div class="email m-0">
            <label for="email">Email Address</label>
            <div>
               <ion-icon name="mail-outline"></ion-icon>
               <input v-model="email" type="email" name="email" placeholder=" Username@gmail.com" />
            </div>
         </div>
         <div class="password mt-3">
            <label for="password">Password</label>
            <div>
               <ion-icon name="lock-closed-outline"></ion-icon>
               <input v-model="password" class="pas" type="password" name="password" placeholder=" ············" />
               <ion-icon class="show-hide" name="eye-outline"></ion-icon>
            </div>
         </div>
         <div class="d-flex">
            <input class="mb-3 mx-2" type="checkbox" />
            <span class="mb-3 size-xxs">I agree to the <a href="">Terms of Service</a> and <a href="">Privacity
                  Policy</a> .</span>
         </div>
         <button @click="signup(); show=false" class="login align-self-center">Create account </button>
         <div class="footer"><span>Signup</span><span>Forgot Password?</span></div>
      </form>
   </div>

</template>

<script>
import { mapStores } from "pinia";
import userStore from "../stores/user.js";

export default {
   data() {
      return {

      }
   },
   props: {
      show: Boolean
   },
   computed: {
      ...mapStores(userStore),
   },
   methods: {
      async signup() {
         const response = await this.userStore.signUp(this.email, this.password);
         alert("Your registration had been confirmed!\nYou can Log In now")
      },
   },
};
</script>

<style scoped>
* {
   font-family: "Poppins";
}

.signModal {
   position: fixed;
   inset: 0;
   background: rgba(0, 0, 0, .7);
   display: flex;
   justify-content: center;
   align-items: center;
   z-index: 10000;
}

.signup {
   display: flex;
   background: #ffffff;
   height: 100vh;
}

.screen-1 {
   padding: 2em;
   display: flex;
   flex-direction: column;
   border-radius: 30px;
   box-shadow: 0 0 2em #e6e9f9b2;
   width: 85%;
   height: 80vh;
   
   /* gap: 2em; */
}


.screen-1 .email {
   background: white;
   box-shadow: 0 0 1em #bcbcbc;
   padding: 0.5em 2rem;
   display: flex;
   flex-direction: column;
   gap: 0.2em;
   border-radius: 20px;
   color: #4d4d4d;
   margin-bottom: 1rem;
   margin-top: 0.5rem;

}

.screen-1 .email input {
   outline: none;
   border: none;
   width: 85%;

}

.screen-1 .email ion-icon {
   color: #4d4d4d;
   margin-bottom: -0.2em;
}

.screen-1 .password {
   background: white;
   box-shadow: 0 0 1em #bcbcbc;
   padding: 0.5em 2rem;
   display: flex;
   flex-direction: column;
   gap: 0.2em;
   border-radius: 20px;
   color: #4d4d4d;
   margin-bottom: 1rem;
   margin-top: 0.3rem;
}

.screen-1 .password input {
   outline: none;
   border: none;
   width: 80%;
}

.screen-1 .password ion-icon {
   color: #4d4d4d;
   margin-bottom: -0.1em;
}

.screen-1 .email ion-icon {
   color: #4d4d4d;
   margin-bottom: -0.2em;
}

.screen-1 .login {
   padding: 1em;
   background: #444444;
   color: white;
   border: none;
   border-radius: 10px;
   font-weight: 600;
}

.screen-1 .footer {
   display: flex;
   font-size: 0.7em;
   color: #5e5e5e;
   justify-content: space-between;
}

.screen-1 .footer span {
   cursor: pointer;
}

button {
   cursor: pointer;
   margin-bottom: 1rem;
   width: 45%;
   font-size: 0.7rem;
}

.email {
   display: flex;
   justify-content: flex-start;
}

h4 {
   font-size: 1rem;
   margin-left: 0.5rem;
}

input {
   font-size: 0.9rem;
}

label {
   font-size: 0.9rem;
}

.size-xs {
   font-size: x-small;
}

.size-l {
   font-size: x-large;
}

.size-xxs {
   font-size: 0.58rem;
}

.w-5 {
   width: 5%;
   height: 1vh;
}
@media (min-width: 720px) { 
img{
width: 15rem !important;
}
.screen-1{
    width: 40rem;
    height: fit-content;
}

button{
   width: 30%;
}
}
</style>