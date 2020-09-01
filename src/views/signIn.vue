<template>
    <v-row
            align="center"
            justify="center"
    >
        <v-col
                sm="8"
                md="7"
                lg="4"
                xl="4"
        >
            <v-card class="elevation-12">
                <v-toolbar
                        color="primary"
                        dark
                        flat
                >
                    <v-toolbar-title>Login</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                    <v-form
                            ref="form"
                            v-model="valid"
                            lazy-validation
                    >
                        <v-text-field
                                v-model="username"
                                :rules="userNameRules"
                                label="Username"
                                prepend-icon="mdi-account"
                                type="text"
                                required
                        ></v-text-field>

                        <v-text-field
                                v-model="password"
                                :rules="passwordRules"
                                label="Password"
                                prepend-icon="mdi-lock"
                                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                @click:append="show1 = !show1"
                                :type="show1 ? 'text' : 'password'"
                                required
                        ></v-text-field>

                        <v-checkbox
                                v-model="checkbox"
                                label="Remember me?"
                        ></v-checkbox>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-btn
                            color="primary"
                            @click="routeToRegister"
                    >
                        Register
                    </v-btn>

                    <v-spacer></v-spacer>

                    <v-btn
                            :disabled="!valid"
                            color="primary"
                            @click="validate"
                            type="submit"
                    >
                        Login
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        name: "signIn",
        data: () => ({
            show1: false,

            valid: true,

            //mockup account for positive login
            account: {},

            username: '',
            password: '',

            passwordRules: [
                v => !!v || 'Password is required',
            ],
            userNameRules: [
                v => !!v || 'Username is required',
            ],
            checkbox: false
        }),

        mounted() {
            this.account = {...this.$store.state.account}
        },

        methods: {
            validate() {
                this.$refs.form.validate();
                if (
                    this.account.username === this.username
                    &&
                    this.account.password === this.password
                ) {
                    this.$router.push('todos')
                } else {
                    //negative feedback
                }
            },

            routeToRegister() {
                this.$router.push('signup')
            }
        }
    }
</script>

<style scoped>

</style>