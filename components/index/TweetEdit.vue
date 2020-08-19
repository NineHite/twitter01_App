<template>
    <div class="tweet-edit">
        <div>
            <!-- 细线 -->
            <div style="height: 0.2em;width: 100%;padding: 0;position: absolute;border-top-right-radius: 5px;border-top-left-radius: 5px;overflow-x: hidden;
    overflow-y: hidden;"></div>

            <div class="say-main">
                <div>
                    <div>
                        <div class="say-main-left">
                            <el-avatar slot="reference" :size="49"
                                       :src="user.avatar">
                            </el-avatar>
                        </div>
                        <div class="say-main-right">
                            <div class="right-form">
                                <el-form :model="user.tweet">
                                    <el-input
                                            placeholder="有什么新鲜事？"
                                            type="textarea"
                                            autosize
                                            :maxlength="280"
                                            @input="tweetLen"
                                            v-model="user.tweet.content">
                                    </el-input>


                                </el-form>
                            </div>


                            <edit-bottom-ops :content="user.tweet.content" :is-show="isShow" :percentage="percentage" :disabled="disabled"></edit-bottom-ops>

                        </div>
                    </div>
                </div>

            </div>

        </div>


    </div>
</template>

<script>

    import EditBottomOps from "./EditBottomOps";

    export default {
        name: "TweetEdit",
        components: {
            EditBottomOps
        },
        props: {
            user: {
                type: Object,
                default: () => {
                    return {
                        tweet: {}
                    }
                },
            }
        },
        data() {
            return {
                isShow: false,
                disabled: true,
                percentage: 0,
                tweet: {
                    content: ''
                },

                /*user: {
                    userId: 1,
                    nickname: "Nine_Hite",
                    username: "Hiten_ine",
                    avatar: "/avatar/ht.jpg",
                    tweet: {
                        content: "",
                        pictures: [""]
                    }
                }*/
            }
        },
        methods: {
            aaa() {
                console.log("aaa")
            },
            onSubmit() {
                console.log(this.user.tweet);
            },
            tweetLen() {
                if (this.user.tweet.content.length > 0) {
                    this.percentage = this.user.tweet.content.length / 280 * 100
                    this.isShow = true
                    this.disabled = false
                } else {
                    this.percentage = 0
                    this.isShow = false
                    this.disabled = true
                }
            }
        },
    }
</script>

<style lang="scss">
    .tweet-edit {

        box-sizing: border-box;

        div {
            padding-bottom: 5px;
            position: relative;


            .say-main {
                padding-top: 5px;
                padding-bottom: 5px;
                display: flex;

                div {
                    display: flex;
                    padding: 0 15px;

                    div {
                        padding: 0;
                        display: flex;
                        margin-left: -5px;
                        margin-right: -5px;

                        .say-main-left {
                            margin-left: 5px;
                            margin-right: 5px;
                            padding-top: 5px;

                            flex-basis: 49px;

                        }

                        .say-main-right {

                            display: flex;

                            flex-basis: auto;
                            flex-grow: 1;
                            flex-direction: column;
                            flex-shrink: 0;

                            margin-left: 5px;
                            margin-right: 5px;

                            position: relative;

                            .right-form {

                                margin: 0;

                                display: flex;
                                flex-direction: column;
                                border: 2px solid rgba(0, 0, 0, 0);

                                width: 100%;
                                box-sizing: border-box;
                                .el-form {
                                    display: flex;
                                    flex-grow: 1;


                                    .el-textarea {
                                        width: 100%;
                                        margin: 0;
                                        padding: 13px 0 9px;

                                        box-sizing: border-box;


                                    }
                                        .el-textarea__inner:focus {

                                            &::placeholder {
                                                font-size: 19px;
                                                box-sizing: border-box;
                                                opacity: 0.7;


                                                color: #9197a3;
                                                font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
                                            }
                                        }


                                    .el-textarea__inner {
                                        padding: 0;
                                        min-height: 24.8px !important;


                                        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
                                        font-size: 19px;
                                        color: rgb(20, 23, 26);

                                        resize: none;
                                        outline: none;

                                        border: none;

                                        &::placeholder {
                                            font-size: 19px;
                                            box-sizing: border-box;



                                            color: #9197a3;
                                            font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
                                        }

                                        &::-webkit-input-placeholder {
                                            /* WebKit browsers 适配谷歌 */
                                            resize: none;
                                            outline: none;
                                            font-size: 19px;
                                            color: #9197a3;
                                            font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
                                        }

                                        &:-moz-placeholder {
                                            /* Mozilla Firefox 4 to 18 适配火狐 */
                                            font-size: 19px;
                                            color: #9197a3;
                                            font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
                                        }

                                        &::-moz-placeholder {
                                            /* Mozilla Firefox 19+ 适配火狐 */
                                            font-size: 19px;
                                            color: #9197a3;
                                            font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
                                        }

                                        &:-ms-input-placeholder {
                                            /* Internet Explorer 10+  适配ie*/
                                            font-size: 19px;
                                            color: #9197a3;
                                            font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
                                        }
                                    }
                                }



                            }


                        }
                    }
                }
            }
        }

    }
</style>