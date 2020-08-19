<template>
    <div id="tweet">
        <!-- 主体内容 -->
        <main-card-tweet></main-card-tweet>

        <!-- 侧边卡片 -->
        <sidebar-card></sidebar-card>
    </div>
</template>

<script>

    import MainCardTweet from "../components/tweet/MainCardTweet";
    import SidebarCard from "../components/index/SidebarCard";

    export default {
        name: "tweet",
        components: {
            MainCardTweet,
            SidebarCard,
        },
    }
</script>

<style lang="scss">

    #tweet {
        width: 990px;

        display: flex;
        justify-content: space-between;
    }

</style>