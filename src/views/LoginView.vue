<template>
  <div>
    <button @click="signInWithGoogle">Log in with Google</button>
  </div>
</template>

<script>
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../fire/config";

export default {
  data() {
    return {
      errorMessage: null,
    };
  },

  methods: {
    signInWithGoogle() {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider).catch((error) => {
        this.errorMessage = error.message;
      });
    },
  },

  mounted() {
    auth.onAuthStateChanged((user) => {
      if (user) console.log("User signed in:", user);
      else console.log("User signed out");
    });
  },
};
</script>
