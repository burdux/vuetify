<template>
    <v-row
            align="center"
            justify="center"
    >
        <v-col
                sm="8"
                md="7"
                lg="6"
                xl="4"
        >
            <v-card class="elevation-12">
                <v-toolbar
                        color="primary"
                        dark
                        flat
                >
                    <v-toolbar-title>Register</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                    <v-row
                            justify="space-between"
                    >
                        <v-col
                                cols="12"
                                md="6"
                                lg="6"
                                xl="6"
                        >
                            <v-form
                                    ref="form1"
                            >
                                <v-text-field
                                        v-model="account.username"
                                        :rules="userNameRules"
                                        label="Username"
                                        prepend-icon="mdi-account"
                                        type="text"
                                        required
                                ></v-text-field>
                                <v-text-field
                                        v-model="account.password"
                                        :rules="passwordRules"
                                        label="Password"
                                        prepend-icon="mdi-lock"
                                        type="password"
                                        required
                                ></v-text-field>
                                <v-text-field
                                        v-model="account.websiteLink"
                                        label="Website"
                                        prepend-icon="mdi-link"
                                        type="url"
                                ></v-text-field>
                            </v-form>
                        </v-col>

                        <v-col
                                cols="12"
                                md="6"
                                lg="6"
                                xl="6"
                        >
                            <v-form
                                    ref="form2"
                            >
                                <v-text-field
                                        v-model="account.email"
                                        :rules="emailRules"
                                        label="Email"
                                        prepend-icon="mdi-email"
                                        type="text"
                                        required
                                ></v-text-field>
                                <v-text-field
                                        v-model="account.passwordRetype"
                                        :rules="passwordRetypeRules"
                                        label="Re-type Password"
                                        prepend-icon="mdi-lock"
                                        type="password"
                                        required
                                ></v-text-field>
                                <v-text-field
                                        v-model="account.phoneNumber"
                                        label="Phone Number"
                                        prepend-icon="mdi-phone"
                                        type="number"
                                ></v-text-field>
                            </v-form>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions>
                    <v-btn
                            color="primary"
                            @click="routeToSignIn"
                    >
                        Back
                    </v-btn>

                    <v-spacer></v-spacer>

                    <v-btn
                            :disabled="!valid"
                            color="primary"
                            @click="validate"
                            type="submit"
                    >
                        Create New Account
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        name: "signUp",
        data: () => ({
            valid: true,

            account: {
                username: '',
                email: '',
                password: '',
                passwordRetype: '',
                phoneNumber: '',
                websiteLink: '',
            },

            userNameRules: [
                v => !!v || 'Username is required',
            ],
            emailRules: [
                v => !!v || 'Email is required',
            ],
            passwordRules: [
                v => !!v || 'Password is required',
            ],
            passwordRetypeRules: [
                v => !!v || 'Re-type Password is required',
            ],

            checkbox: false
        }),

        mounted() {

        },

        methods: {
            validate() {
                this.$refs.form1.validate();
                this.$refs.form2.validate();
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

            routeToSignIn() {
                this.$router.push('signin')
            }
        }
    }
</script>

<style scoped>

</style>