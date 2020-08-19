<template>
    <div id="profile">
        <div class="profile-main">

            <!-- 头部页眉 -->
            <div class="profile-tag">
                <div class="tag-left">
                    <div class="t-svg" @click="$router.push('/')">
                        <div>
                            <div>
                                <svg viewBox="0 0 24 24" height="1.5em">
                                    <g fill="rgba(29,161,242,1.00)">
                                        <path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"></path>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tag-right">
                    <div>
                        <div class="title-top">Nine Hite</div>
                        <div class="sidebar-card-top-detail">9 推文</div>
                    </div>
                </div>
            </div>

            <div class="profile-main-top">
                <div class="obs">
                    <div class="obs02">
                        <el-image src="/bg.png"></el-image>
                    </div>
                </div>
            </div>
            <div class="profile-intro">
                <div class="ava-edit">
                    <el-avatar src="/avatar/ht.jpg" :size="134"></el-avatar>
                    <div class="edit-btn">编辑资料</div>
                </div>
                <div class="name-id">
                    <div class="main-name">
                        Nine Hite
                    </div>
                    <div class="main-detail">
                        @NineHite
                    </div>
                </div>
                <div class="bir-login"></div>
                <div class="following-er"></div>
            </div>


        </div>

        <div class="profile-side">
            <sidebar-card></sidebar-card>
        </div>
    </div>

</template>

<script>

    import SidebarCard from "../components/index/SidebarCard";

    export default {
        name: "NineHite",
        components: {
            SidebarCard,
        },
    }
</script>

<style lang="scss">

    #profile {

        width: 990px;
        display: flex;
        justify-content: space-between;

        .profile-main {

            max-width: 600px;
            box-sizing: border-box;
            border-right: 1px solid rgb(230, 236, 240);
            border-left: 1px solid rgb(230, 236, 240);

            .profile-tag {
                z-index: 3;
                padding: 0 15px;

                background-color: white;

                position: sticky;
                top: 0;

                box-sizing: border-box;
                border-bottom: 1px solid rgb(230, 236, 240);

                display: flex;
                justify-content: flex-start;

                .tag-left {

                    display: flex;
                    align-items: center;
                    justify-content: flex-start;

                    height: 53px;

                    div {
                    }

                    .t-svg {

                        margin-right: 20px;
                        display: flex;
                        align-items: center;

                        div {

                            display: flex;
                            justify-content: space-around;
                            align-items: center;

                            div {
                                width: 39px;
                                height: 39px;

                                &:hover {
                                    border-radius: 50%;
                                    background-color: rgba(29, 161, 242, 0.1);
                                    transition-duration: 0.2s;
                                }

                                svg {
                                    height: 1.5em;
                                }
                            }
                        }
                    }


                }

                .tag-right {
                    display: flex;
                    flex-direction: column;
                    flex-grow: 1;
                    justify-content: center;

                    div {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        align-items: flex-start;

                        .title-top {
                            font-weight: 800;
                            font-size: 19px;
                        }
                    }
                }
            }

            .profile-main-top {


                .obs {


                    .obs02 {

                        display: flex;
                        align-items: center;
                        justify-content: center;

                        width: 598px;
                        height: 199.33px;
                        overflow: hidden;
                        img {

                        }
                    }
                }
            }
            .profile-intro {

                margin-bottom: 15px;
                padding-top: 10px;
                padding-left: 15px;
                padding-right: 15px;

                display: flex;
                flex-direction: column;

                .ava-edit {
                    height: 49px;
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;

                    .el-avatar {
                        z-index: 1;

                    }
                    .edit-btn {
                        align-self: center;
                    }
                }

                .name-id {
                    margin-top: 5px;
                    margin-bottom: 10px;
                    display: flex;
                    flex-direction: column;

                }
                .bir-login {
                    margin-bottom: 10px;
                }
            }
        }
    }
</style>