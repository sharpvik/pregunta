<template>
  <div>
    <button @click="signInWithGoogle">Log in with Google</button>
  </div>
</template>

<script>
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../fire/config";
import { useUserStore } from "../stores/users";

export default {
  data() {
    return {
      errorMessage: null,
      userStore: useUserStore(),
    };
  },

  methods: {
    signInWithGoogle() {
      signInWithPopup(auth, new GoogleAuthProvider()).catch((error) => {
        this.errorMessage = error.message;
      });
    },
  },

  mounted() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.userStore.login(user);
        console.log("User signed in:", this.userStore.user);
      } else console.log("User signed out");
    });
  },
};
</script>
