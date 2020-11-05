<template>
       <button @click="login">登录</button>
</template>
<script>
export default {
    methods:{
        login () {
            this.$router.replace({
                path:"/index"
            })
        }
    }
}
</script>

<style lang="less">

</style>