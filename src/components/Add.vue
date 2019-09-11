<template>
    <div class="add container">
        <alert v-if="message" v-bind:message="message"></alert>
        <h1 class="page-header">添加用户</h1>
        <form @submit="addCustomer">
            <div class="well">
                <h4>用户信息</h4>
                <div class="form-group">
                    <label>姓名</label>
                    <input type="text" class="form-control" placeholder="name" v-model="customer.name">
                </div>
                <div class="form-group">
                    <label>电话</label>
                    <input type="text" class="form-control" placeholder="phone" v-model="customer.phone">
                </div>
                <div class="form-group">
                    <label>邮箱</label>
                    <input type="text" class="form-control" placeholder="email" v-model="customer.email">
                </div>
                <div class="form-group">
                    <label>ID</label>
                    <input type="text" class="form-control" placeholder="id" v-model="customer.id">
                </div>
                <div class="form-group">
                    <label>年龄 </label>
                    <input type="text" class="form-control" placeholder="age" v-model="customer.age">
                </div>
                <div class="form-group">
                    <label>公司ID </label>
                    <input type="text" class="form-control" placeholder="companyId"
                           v-model="customer.companyId">
                </div>
                <button type="submit" class="btn btn-primary">添加</button>
            </div>
        </form>
    </div>
</template>

<script>
    import alert from './alert'

    export default {
        name: 'add',
        data() {
            return {
                customer: {},
                message: ''
            }
        },
        methods: {
            addCustomer(e) {
                if (!this.customer.name || !this.customer.email || !this.customer.phone) {
                    this.message = '请添加对应信息'
                } else {
                    let newCustomer = {
                        name: this.customer.name,
                        email: this.customer.email,
                        phone: this.customer.phone,
                        id: this.customer.id,
                        age: this.customer.age,
                        companyId: this.customer.companyId
                    }
                    this.$http.post("http://localhost:3000/users", newCustomer).then(function (response) {
                        this.$router.push({path: "/", query: {message: '用户信息添加成功!'}});
                    })
                }
                e.preventDefault();
            }
        },
        components: {
            alert: alert
        }
    }
</script>


<style scoped>

</style>
