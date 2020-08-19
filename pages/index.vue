<template>
    <div id="index">
        <!-- 主体内容 -->
        <main-card></main-card>

        <!-- 侧边卡片 -->
        <sidebar-card></sidebar-card>
    </div>
</template>

<script>

    import MainCard from "../components/index/MainCard";
    import SidebarCard from "../components/index/SidebarCard";

    export default {
        components: {
            MainCard,
            SidebarCard,
        },
    }
</script>
<style lang="scss">

    #index {
        width: 990px;

        display: flex;
        justify-content: space-between;
    }


</style>