<template>
    <el-dialog
            :visible.sync="dialogVisible"
            width="39%" style="border-radius: 14px">
        <div class="index-content-container-dialog-t">


            <div class="left-avatar">
                <el-avatar slot="reference" :size="49"
                           src="/avatar/theeconomist.jpg">
                </el-avatar>
            </div>
            <div id="reply-card-main">
                <div class="index-card-main-title">
                    <div class="index-title-main">
                        <div class="index-main-left">


                            <div class="main-name default-font">
                                <span>The Economist</span>
                                <span class="main-detail">@TheEconomist</span>
                                <span class="main-detail"
                                      style="padding-right: 5px">·</span>
                            </div>

                            <div class="main-detail">
                                <a title="上午11:41 · 2020年5月20日">8小时</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="main-01 default-font">
                        <p>
                            The lira has lost 15% of its value against
                            the dollar so far this
                            year,
                            the most among big, commodity-importing
                            emerging markets
                        </p>
                        <div class="main-img" v-show="false">
                            <el-image
                                    src="/avatar/hand.jpg">
                            </el-image>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="content-container-dialog-b">
            <div class="left-pic">
                <div></div>
            </div>
            <div class="right-replay">
                <div>
                    <span class="main-detail">回复</span>
                    <span style="color: rgb(27, 149, 224);font-size: 15px;">@TheEconomist</span>
                </div>
            </div>

        </div>
        <reply-dialog></reply-dialog>

    </el-dialog>
</template>

<script>

    import ReplyDialog from "./ReplyDialog";

    export default {
        name: "TweetReplyDialog",
        props: ['dialogVisible'],
        components: {
            ReplyDialog,
        }
    }
</script>

<style lang="scss">
    .index-content-container-dialog-t {
        display: flex;


        .left-avatar {
            margin: 0 5px;
        }

        #reply-card-main {
            width: 509px;
            margin-left: 5px;
            margin-right: 5px;
            padding-bottom: 5px;

            .index-card-main-title {

                margin-bottom: 2px;

                .index-title-main {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    .index-main-left {
                        display: flex;

                    }

                    .index-main-right {
                        display: flex;
                        justify-content: flex-end;
                    }
                }
            }

            div {
                .main-01 {

                    padding-bottom: 10px;

                    .main-img {
                        margin-top: 10px;
                        width: 507px;
                        height: 285px;
                        overflow: hidden;
                        border: 1px solid rgb(204, 214, 221);
                        border-radius: 14px;

                        display: flex;
                        align-items: center;
                        justify-content: center;

                        .el-image {

                        }
                    }

                }

                .main-02 {
                    padding: 0 15px;
                }

            }
        }


    }
    .content-container-dialog-b {
        display: flex;

        .left-pic {
            flex-basis: 49px;
            margin: 0 5px;

            display: flex;
            justify-content: center;
            align-items: center;

            div {
                width: 2px;
                height: 100%;
                background-color: rgb(204, 214, 221);
            }
        }
        .right-replay {
            margin:  0 5px;
            div {
                padding-top: 5px;
                padding-bottom: 15px;
            }
        }
    }

</style>