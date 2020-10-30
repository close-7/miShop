<template>
    <div>
        <order-header></order-header>
        <router-view></router-view>
        <order-footer></order-footer>
    </div>
</template>

<script>
import OrderHeader from './../components/orderHeader'
import OrderFooter from './../components/orderFooter'
export default {
    name:'order',
    components:{
        OrderHeader,
        OrderFooter
    }
}
</script>

