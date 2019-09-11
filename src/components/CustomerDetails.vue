<template>
    <div class="customerDetails container">
        <router-link class="btn btn-default" to="/">返回主页</router-link>

        <h1 class="page-header">{{customer.name}}
            <span class="pull-right">
            <router-link class="btn btn-primary" :to="'/edit/'+customer.id">编辑</router-link>
            <button class="btn btn-danger" @click="deleteCustomer(customer.id)">删除</button>
            </span>
        </h1>
        <ul class="list-group">
            <li class="list-group-item"><span class="glyphicon glyphicon-asterisk">{{customer.phone}}</span></li>
            <li class="list-group-item"><span class="glyphicon glyphicon-plus">{{customer.email}}</span></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "customerDetails",
        data() {
            return {
                customer: []
            }
        },
        methods: {
            fetchCustomers(id) {
                this.$http.get("http://localhost:3000/users/" + id)
                    .then(function (response) {
                        // eslint-disable-next-line no-console
                        this.customer = response.body
                    })
            },
            deleteCustomer(id) {
                this.$http.delete("http://localhost:3000/users/" + id)
                    .then(function (response) {
                        this.$router.push({path: '/', query: {message: '删除成功！'}})
                    })
            }
        },
        created() {
            this.fetchCustomers(this.$route.params.id)
        }
    }
</script>

<style scoped>

</style>
