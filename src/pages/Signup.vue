<template>
  <form @submit.prevent="handleSubmit">
    <div class="py-12 flex justify-center items-center">
      <h2 class="text-2xl font-bold"></h2>
      <div class="mt-8 max-w-md">
        <div class="grid grid-cols-1 gap-6">
              <label class="block">
                <span class="text-gray-700">Username</span>
                <input type="text" class="
                    mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  " placeholder="Username" v-model="displayName">
              </label>
              <label class="block">
                <span class="text-gray-700">Email address</span>
                <input type="email" class="
                    mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  " placeholder="Email" v-model="email">
              </label>
              <label class="block">
                <span class="text-gray-700">Password</span>
                <input type="password" class="
                    mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  " placeholder="Password" v-model="password">
              </label>
              <div v-if="error" class="error">{{ error }}</div>
              <button class="text-white bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-gray shadow-lg shadow-gray-500/50 dark:shadow-lg dark:shadow-gray-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 " v-if="!isPending">Sign Up</button>
              <button class="text-white bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-gray shadow-lg shadow-gray-500/50 dark:shadow-lg dark:shadow-gray-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 cursor-not-allowed" v-if="isPending" disabled>Loading</button>
            </div>
          </div>
        </div>
  </form>
</template>

<script>
import useSignup from '../composables/useSignup'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default {
    setup() {
      const { error, signup, isPending } = useSignup()
      const router = useRouter()

      const email = ref('')
      const password = ref('')
      const displayName = ref('')

      const handleSubmit = async () => {
        const res = await signup(email.value, password.value, displayName.value)
        if(!error.value) {
          router.push({ name: '/' })
        }
      }
      return { email, password, displayName, handleSubmit, error, isPending }
    }
}
</script>

<style>

</style>