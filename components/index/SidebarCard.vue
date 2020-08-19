<template>
    <div class="main-sidebar">
        <div class="sidebar-content">
            <!-- 侧边搜索框 -->
            <div class="sidebar-search">
                <el-input
                        placeholder="搜索 Twitter"
                        prefix-icon="el-icon-search"
                        v-model="input">
                </el-input>
            </div>
            <div class="sidebar-card">
                <div class="sidebar-card">
                    <div class="card">
                        <div class="card-title">
                            <h2 class="title-h2">有什么新鲜事？</h2>
                        </div>
                        <div class="card-content">
                            <div>
                                <span class="sidebar-card-top-detail">
                                    sidebar-card-top-detail
                                </span>
                                    <span class="sidebar-card-top-name">
                                    sidebar-card-top
                                </span>
                                    <span class="sidebar-card-content">
                                    Tech workers are considering escaping Silicon Valley's sky-high rents
                                </span>
                            </div>
                            <div>c</div>
                        </div>
                        <div class="card-bottom">
                            <span class="sidebar-card-bottom-more">显示更多</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SideBarCard",
        data() {
            return {
                input: '',
            }
        }
    }
</script>

<style lang="scss">

    .el-icon-search {
        font-size: 18px;
        margin-top: 4px;
        margin-left: 1px;
        padding: 0 0 0 5px;
    }

    .main-sidebar {


        width: 350px;
        float: right;
        margin-right: 10px;

        min-height: 1100.4px;
        height: 100%;

        .sidebar-content {



            display: flex;

            padding-top: 10px;
            padding-bottom: 59px;


            .sidebar-search {
                display: flex;
                align-items: center;

                background-color: white;
                position: fixed;
                top: 0;
                width: 350px;
                height: 53px;
                line-height: 53px;
                margin-bottom: 10px;

                .el-input__inner {
                    background: rgb(230, 236, 240);
                    height: 41px;
                    border-radius: 50px;

                    padding-left: 50px;

                    &::placeholder {
                        color: rgb(101, 119, 134);
                    }

                    &::-webkit-input-placeholder {
                        /* WebKit browsers 适配谷歌 */
                        color: rgb(101, 119, 134);
                    }

                    &:-moz-placeholder {
                        /* Mozilla Firefox 4 to 18 适配火狐 */
                        color: rgb(101, 119, 134);
                    }

                    &::-moz-placeholder {
                        /* Mozilla Firefox 19+ 适配火狐 */
                        color: rgb(101, 119, 134);
                    }

                    &:-ms-input-placeholder {
                        /* Internet Explorer 10+  适配ie*/
                        color: rgb(101, 119, 134);
                    }

                }


                .el-input__inner:focus {
                    background: white;
                }
            }

            .sidebar-card {
                display: flex;
                margin-top: 28px;

                .card {
                    padding: 0;
                    background-color: rgb(245, 248, 250);
                    border: 1px solid rgb(245, 248, 250);
                    border-radius: 14px;
                    box-sizing: border-box;
                    margin-bottom: 15px;

                    .card-title {
                        padding: 10px 15px;
                        border-bottom: 1px solid rgb(230, 236, 240);
                    }

                    .card-content {
                        div {
                            padding: 10px 15px;
                            border-bottom: 1px solid rgb(230, 236, 240);
                        }
                    }

                    .card-bottom {
                        padding: 10px 15px;

                        border: none;
                    }

                }

                .el-card {
                    background-color: rgb(245, 248, 250);
                    border: 1px solid rgb(245, 248, 250);
                    border-radius: 14px;
                    box-sizing: border-box;
                    margin-bottom: 15px;

                    ul {
                        li {
                            padding: 10px 15px;
                            border-bottom: 1px solid rgb(230, 236, 240);
                        }

                        li:last-child {
                            padding: 10px 15px;

                            border: none;
                        }
                    }

                }
            }
        }
    }


</style>