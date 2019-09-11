<template>
    <div class="customer container">
        <h1 class="page-header">用户管理系统</h1>
        <input type="text" class="form-control" placeholder="搜索" v-model="filterInput">
        <alert v-if="message" v-bind:message="message"></alert>
        <table class="table table-striped">
            <thead>
            <tr>
                <th>姓名</th>
                <th>电话</th>
                <th>邮箱</th>
                <th></th>
            </tr>
            </thead>

            <tbody>
            <tr v-for="(customer,index) in filterBy(customers,filterInput)" :key="index">
                <td>{{customer.name}}</td>
                <td>{{customer.phone}}</td>
                <td>{{customer.email}}</td>
                <td>
                    <router-link class="btn btn-default" :to="'/customer/'+customer.id">详情</router-link>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    import alert from './alert'

    export default {
        name: 'Customers',
        data() {
            return {
                customers: [],
                message: '',
                filterInput: ''
            }
        },
        methods: {
            fetchCustomers() {
                this.$http.get("http://localhost:3000/users")
                    .then(function (response) {
                        // eslint-disable-next-line no-console
                        this.customers = response.body
                    })
            },
            filterBy(customers, value) {
                return customers.filter(function (customer) {
                    return customer.name.match(value)
                })
            },
        },
        created() {
            if (this.$route.query.message) {
                this.message = this.$route.query.message
            }
            this.fetchCustomers();
        },
        updated() {
            this.fetchCustomers();
        },
        components: {
            alert
        }

    }
</script>

<style scoped>

</style>
