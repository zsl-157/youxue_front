<!--
    评论列表组件
-->
<template>
    <div>   
        <div class="avator_container">
            <img v-if="avator" v-bind:src="avator" class=""/>
        </div>
        
    </div>
</template>

<script>
    export default{
        props:{
            name:String,
            avator:String,
        },
        data() {
            return {
                ddds:"nadddme",
            }
        },
        methods: {
            
        },
        
    }
</script>

<style>
    .avator_container{
        width: 100%;
    }
    .avator_img{
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        border: 1px solid #efefef;
    }
</style>