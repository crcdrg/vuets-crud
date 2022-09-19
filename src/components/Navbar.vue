<template>
  <div class="navbar">
    <nav
      class="
        p-3
        bg-gray-50
        rounded
        border-gray-200
        dark:bg-gray-800 dark:border-gray-700
      "
    >
      <div
        class="container flex flex-wrap justify-between items-center mx-auto"
      >
        <a href="#" class="flex items-center">
          <img
            src=""
            class="mr-3 h-6 sm:h-10"
            alt=""
          />
          <span
            class="
              self-center
              text-xl
              font-semibold
              whitespace-nowrap
              dark:text-white
            "
            ></span
          >
        </a>
        <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          class="
            inline-flex
            justify-center
            items-center
            ml-3
            text-gray-400
            rounded-lg
            md:hidden
            hover:text-gray-900
            focus:outline-none focus:ring-2 focus:ring-blue-300
            dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500
          "
          aria-controls="navbar-solid-bg"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul
            class="
              flex flex-col
              mt-4
              bg-gray-50
              rounded-lg
              md:flex-row
              md:space-x-8
              md:mt-0
              md:text-sm
              md:font-medium
              md:border-0
              md:bg-transparent
              dark:bg-gray-800
              md:dark:bg-transparent
              dark:border-gray-700
            "
          >
            <li>
              <a
                href="#"
                class="
                  block
                  py-2
                  pr-4
                  pl-3
                  text-white
                  bg-blue-700
                  rounded
                  md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white
                  dark:bg-blue-600
                  md:dark:bg-transparent
                "
                aria-current="page"
                ><router-link :to="{ name: '/' }">Home</router-link></a
              >
            </li>
            <li v-if="!user">
              <a
                href="#"
                class="
                  block
                  py-2
                  pr-4
                  pl-3
                  text-gray-700
                  rounded
                  hover:bg-gray-100
                  md:hover:bg-transparent
                  md:border-0
                  md:hover:text-blue-700
                  md:p-0
                  dark:text-gray-400
                  md:dark:hover:text-white
                  dark:hover:bg-gray-700 dark:hover:text-white
                  md:dark:hover:bg-transparent
                "
                ><router-link :to="{ name: '/Signup' }">Signup</router-link></a
              >
            </li>
            <li v-if="!user">
              <a
                href="#"
                class="
                  block
                  py-2
                  pr-4
                  pl-3
                  text-gray-700
                  rounded
                  hover:bg-gray-100
                  md:hover:bg-transparent
                  md:border-0
                  md:hover:text-blue-700
                  md:p-0
                  dark:text-gray-400
                  md:dark:hover:text-white
                  dark:hover:bg-gray-700 dark:hover:text-white
                  md:dark:hover:bg-transparent
                "
                ><router-link :to="{ name: '/Login' }">Login</router-link></a
              >
            </li>
            <li v-if="user">
              <a
                href="#"
                class="
                  block
                  py-2
                  pr-4
                  pl-3
                  text-gray-700
                  rounded
                  hover:bg-gray-100
                  md:hover:bg-transparent
                  md:border-0
                  md:hover:text-blue-700
                  md:p-0
                  dark:text-gray-400
                  md:dark:hover:text-white
                  dark:hover:bg-gray-700 dark:hover:text-white
                  md:dark:hover:bg-transparent
                "
                @click="handleClick">Log out</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import useLogout from "../composables/useLogout";
import getUser from "../composables/getUser";
import { useRouter } from "vue-router";

export default {
  setup() {
    const { logout } = useLogout();
    const { user } = getUser();
    const router = useRouter();

    const handleClick = async () => {
      await logout();
      console.log("user logged out");
      router.push({ name: "/Login" });
    };
    return { handleClick, user };
  },
};
</script>

<style>
</style>