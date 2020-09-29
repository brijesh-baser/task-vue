<template>
    <div>
        <b-container class="text-center">
            <img alt="Vue logo" src="../assets/logo.png" />
        </b-container>
        <b-container class="mt-4">
        <b-form>
            <b-form-group
                id="input-group-1"
            >
                <b-form-input
                id="input-1"
                v-model="loginForm.username"
                required
                placeholder="Enter username"
                ></b-form-input>
            </b-form-group>
            <b-form-group
                id="input-group-1"
                
            >
                <b-form-input
                id="input-1"
                v-model="loginForm.password"
                type="password"
                required
                placeholder="Enter password"
                ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-1">
                <b-button variant="dark" class="w-100 py-2 mt-4" @click="login()">Login</b-button>
            </b-form-group>
        </b-form>
        </b-container>
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            loginForm: {
                username:"",
                password:""
            }
        }
    },
    methods: {
        login: async function() {
            var response = await this.$http.post('http://172.20.10.8:8081/api/authenticate', JSON.stringify(this.loginForm));
            console.log(response.data);
            localStorage.token = response.data['id_token'];
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>

input {
  border: none;
  border-bottom: 1px solid;
  border-radius: unset;
}

</style>