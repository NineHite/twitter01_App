<template>
    <div class="tweet-main-icon">
        <ul>
            <li>
                <div class="ops-all" @click="dialogVisible = true">
                    <div class="all">
                        <div class="all-1">
                            <div></div>
                            <svg viewBox="0 0 24 24" class="ops-1-1-svg">
                                <g fill="rgb(101, 119, 134)">
                                    <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>

                <el-dialog
                        :visible.sync="dialogVisible"
                        width="39%" style="border-radius: 14px">
                    <div class="content-container-dialog-t">


                        <div class="left-avatar">
                            <el-avatar slot="reference" :size="49"
                                       src="/avatar/theeconomist.jpg">
                            </el-avatar>
                        </div>
                        <div class="card-main">
                            <div class="card-main-title">
                                <div class="tweet-title-main">
                                    <div class="main-left">


                                        <div class="main-name default-font">
                                            <span>The Economist</span>
                                            <span class="main-detail">@TheEconomist</span>
                                            <span class="main-detail"
                                                  style="padding-right: 5px">·</span>
                                        </div>

                                        <div class="main-detail">
                                            <a title="上午11:41 · 2020年5月20日" class="main-detail">8小时</a>
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
            </li>

            <li>
                <div class="ops-all">
                    <div class="all">
                        <div class="all-1">
                            <div></div>
                            <svg viewBox="0 0 24 24" class="ops-1-1-svg">
                                <g>
                                    <path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"
                                          fill="rgb(101, 119, 134)"></path>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="ops-all">
                    <div class="all">
                        <div class="all-1">
                            <div></div>
                            <svg viewBox="0 0 24 24" class="ops-1-1-svg">
                                <g>
                                    <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"
                                          fill="rgb(101, 119, 134)"></path>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>

            </li>
            <li>
                <div class="ops-all">
                    <div class="all">
                        <div class="all-1">
                            <div></div>
                            <svg viewBox="0 0 24 24" class="ops-1-1-svg">
                                <g>
                                    <path d="M 17.53 7.47 l -5 -5 c -0.293 -0.293 -0.768 -0.293 -1.06 0 l -5 5 c -0.294 0.293 -0.294 0.768 0 1.06 s 0.767 0.294 1.06 0 l 3.72 -3.72 V 15 c 0 0.414 0.336 0.75 0.75 0.75 s 0.75 -0.336 0.75 -0.75 V 4.81 l 3.72 3.72 c 0.146 0.147 0.338 0.22 0.53 0.22 s 0.384 -0.072 0.53 -0.22 c 0.293 -0.293 0.293 -0.767 0 -1.06 Z"
                                          fill="rgb(101, 119, 134)"></path>
                                    <path d="M 19.708 21.944 H 4.292 C 3.028 21.944 2 20.916 2 19.652 V 14 c 0 -0.414 0.336 -0.75 0.75 -0.75 s 0.75 0.336 0.75 0.75 v 5.652 c 0 0.437 0.355 0.792 0.792 0.792 h 15.416 c 0.437 0 0.792 -0.355 0.792 -0.792 V 14 c 0 -0.414 0.336 -0.75 0.75 -0.75 s 0.75 0.336 0.75 0.75 v 5.652 c 0 1.264 -1.028 2.292 -2.292 2.292 Z"
                                          fill="rgb(101, 119, 134)"></path>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>

            </li>
        </ul>
    </div>
</template>

<script>

    import ReplyDialog from "../index/ReplyDialog";

    export default {
        name: "TweetOps",
        components: {
          ReplyDialog,
        },
        data() {
            return {
                dialogVisible: false,
            }
        },
        methods: {
            aaa() {
                console.log("aaa")
            },
        }
    }
</script>

<style lang="scss">

    .el-dialog__wrapper {
        cursor: auto;

        .el-dialog {
            border-radius: 14px;

            .el-dialog__header {
                position: relative;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                height: 53px;
                padding: 0;

                border-bottom: 1px solid rgb(204, 214, 221);

                button {
                    display: flex;
                    left: 15px;
                    font-size: 22px;

                    i {
                        color: rgba(29, 161, 242, 1.00);
                    }

                    /*&:hover {
                        background-color: red;
                        border-radius: 50%;
                    }*/

                }
            }

            .el-dialog__body {
                padding: 5px 15px;
            }
        }
    }

    .content-container-dialog-t {
        display: flex;


        .left-avatar {
            margin: 0 5px;
        }

        .card-main {
            width: 509px;
            margin-left: 5px;
            margin-right: 5px;
            padding-bottom: 5px;

            .card-main-title {

                margin-bottom: 2px;

                .tweet-title-main {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    .main-left {
                        display: flex;

                    }

                    .main-right {
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

    .tweet-main-icon {

        ul {
            list-style: none;

            display: flex;
            flex-wrap: nowrap;
            justify-content: space-around;
            align-items: center;

            height: 49px;

            li {
                .ops-all {

                    .all {

                        .all-1 {
                            position: relative;
                            display: flex;
                            align-items: center;

                            div {
                                display: inline-flex;
                                width: 38.5px;
                                height: 38.5px;
                                top: 0;
                                right: 0;
                                left: 0;
                                bottom: 0;

                                position: absolute;
                                margin: -8px;
                            }

                            svg {
                                width: 1.5em;
                                height: 1.5em;
                            }

                        }

                    }

                }
            }
        }
    }

    /* hover */
    .tweet-main-icon ul li:first-child:hover {
        color: #1DA1F2;
        transition-duration: 0.2s;
        .all .all-1 {
            div {
                border-radius: 50%;
                background-color: rgba(29, 161, 242, 0.1);
            }

            svg path {
                fill: #1DA1F2;
                transition-duration: 0.2s;
            }
        }
    }

    .tweet-main-icon ul li:nth-child(2):hover {
        color: #17bf63;
        transition-duration: 0.2s;
        .all .all-1 {
            div {
                border-radius: 50%;
                background-color: rgba(23, 191, 99, 0.1);
            }

            svg path {
                fill: #17bf63;
                transition-duration: 0.2s;
            }
        }
    }

    .tweet-main-icon ul li:nth-child(3):hover {
        color: #E0245E;
        transition-duration: 0.2s;
        .all .all-1 {
            div {
                border-radius: 50%;
                background-color: rgba(224, 36, 94, 0.1);
            }

            svg path {
                fill: #E0245E;
                transition-duration: 0.2s;
            }
        }
    }

    .tweet-main-icon ul li:nth-child(4):hover {
        color: #1DA1F2;
        transition-duration: 0.2s;
        .all .all-1 {
            div {
                border-radius: 50%;
                background-color: rgba(29, 161, 242, 0.1);
            }

            svg path {
                fill: #1DA1F2;
                transition-duration: 0.2s;
            }
        }
    }

    .tweet-main-icon ul li:nth-child(5):hover {
        color: #1DA1F2;
        transition-duration: 0.2s;
        .all .all-1 {
            div {
                border-radius: 50%;
                background-color: rgba(29, 161, 242, 0.1);
            }

            svg path {
                fill: #1DA1F2;
                transition-duration: 0.2s;
            }
        }
    }

</style>