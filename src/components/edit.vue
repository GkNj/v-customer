<template>
    <div class="edit container">
        <h1 class="page-header">修改用户信息</h1>
        <form @submit="editCustomer">
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
                <button type="submit" class="btn btn-primary">更改</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'edit',
        data() {
            return {
                customer: {}
            }
        },
        methods: {
            editCustomer(e) {
                if (!this.customer.name || !this.customer.email || !this.customer.phone) {
                    console.log('姓名、邮件地址、电话不能为空！')
                } else {
                    let newCustomer = {
                        name: this.customer.name,
                        email: this.customer.email,
                        phone: this.customer.phone,
                        id: this.customer.id,
                        age: this.customer.age,
                        companyId: this.customer.companyId
                    }
                    this.$http.put("http://localhost:3000/users/" + this.customer.id, newCustomer).then(function (response) {
                        this.$router.push({path: "/", query: {message: '用户信息修改成功!'}});
                    })
                }
                e.preventDefault();
            },
            fetchCustomer(id) {
                this.$http.get('http://localhost:3000/users/' + id)
                    .then(function (response) {
                        console.log(response)
                        this.customer = response.body
                    })
            }
        },
        created() {
            this.fetchCustomer(this.$route.params.id)
        }
    }
</script>


<style scoped>

</style>
