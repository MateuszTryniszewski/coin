<template>
    <div class="q-pa-md" style="max-width: 400px">

    <span class="" style="font-size: 1.6rem;">{{ newUser ? 'Rejestracja' : 'Zaloguj się'}}</span>
    <q-form
      @submit.prevent="postForm"
      class="q-gutter-md q-mt-md"
    >
    <q-input v-model="email" filled type="email" hint="Email" />

      <q-input v-model="password" filled :type="isPwd ? 'password' : 'text'"
        hint="Password with toggle">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>

      <div  class="row justify-end q-pt-md">
        <q-btn @click="newUser = !newUser"
          color="primary"
          flat
          class="q-ml-sm"
          >
          {{ newUser ? 'Logowanie' : 'Utwórz konto' }}
        </q-btn>
        <q-btn  type="submit" color="primary">
          {{ newUser ? 'Rejestruj' : 'Zaloguj' }}
        </q-btn>
      </div>
    </q-form>

  </div>
</template>

<script>
/* eslint-disable no-console */
import { defineComponent, ref } from 'vue';
import { auth } from 'boot/firebase';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'Login',

  setup() {
    const $router = useRouter();
    const email = ref('');
    const password = ref('');
    const newUser = ref(false);

    const postForm = async () => {
      if (!email.value.trim() || !password.value.trim()) {
        console.log('test');
      }
      try {
        if (newUser.value) {
          console.log('a');
          const register = await auth.createUserWithEmailAndPassword(email.value, password.value);
          console.log('logowanie', register.user);
        } else {
          await auth.signInWithEmailAndPassword(email.value, password.value)
            .then((userCredential) => {
            // Signed in
              const { user } = userCredential;
              console.log('zalogowano', user);
              $router.push('/profits');
            })
            .catch((error) => {
              console.log(error.code, error.message);
            });
        }
      } catch (error) {
        console.log(error);
      }
    };

    return {
      email,
      password,
      isPwd: ref(true),
      newUser,
      postForm,

    };
  },

});

</script>
