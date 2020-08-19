<template>
    <div id="container">
        <header class="menu">

            <my-menu></my-menu>
<!--            <side-menu></side-menu>-->

        </header>
        <main class="main">

            <nuxt/>

        </main>
    </div>
</template>

<script>

    import SideMenu from "../components/public/SideMenu";

    import MyMenu from "../components/public/MyMenu";


    export default {
        components: {
            MyMenu,
            SideMenu
        }
    }
</script>
<style lang="scss">

    #container {
        display: flex;
        height: 100%;
        box-sizing: border-box;

        .menu {


            box-sizing: border-box;

            display: flex;
            flex-direction: column;
            align-items: flex-end;
            flex-grow: 1;
        }

        .main {
            display: flex;
            justify-content: flex-start;
            flex-shrink: 1;
            flex-grow: 1;
            align-items: flex-start;
            box-sizing: border-box;

        }
    }


    /*#container {
        display: flex;
        height: 100%;

        header {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            box-sizing: border-box;
        }

        main {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            box-sizing: border-box;
        }
    }*/
</style>