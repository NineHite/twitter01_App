<template>

    <div id="my-menu">

        <div class="menu-fixed">
            <div class="menu-pad">

                <div class="menu-main">
                    <Logo></Logo>

                    <div class="menu-list">
                        <nav>
                            <a href="/">
                                <div class="list-main">
                                    <div class="list-main-icon">
                                        <svg viewBox="0 0 24 24">
                                            <g fill="rgb(20, 23, 26)">
                                                <path d="M22.46 7.57L12.357 2.115c-.223-.12-.49-.12-.713 0L1.543 7.57c-.364.197-.5.652-.303 1.017.135.25.394.393.66.393.12 0 .243-.03.356-.09l.815-.44L4.7 19.963c.214 1.215 1.308 2.062 2.658 2.062h9.282c1.352 0 2.445-.848 2.663-2.087l1.626-11.49.818.442c.364.193.82.06 1.017-.304.196-.363.06-.818-.304-1.016zm-4.638 12.133c-.107.606-.703.822-1.18.822H7.36c-.48 0-1.075-.216-1.178-.798L4.48 7.69 12 3.628l7.522 4.06-1.7 12.015z"></path>
                                                <path d="M8.22 12.184c0 2.084 1.695 3.78 3.78 3.78s3.78-1.696 3.78-3.78-1.695-3.78-3.78-3.78-3.78 1.696-3.78 3.78zm6.06 0c0 1.258-1.022 2.28-2.28 2.28s-2.28-1.022-2.28-2.28 1.022-2.28 2.28-2.28 2.28 1.022 2.28 2.28z"></path>
                                            </g>
                                        </svg>
                                    </div>
                                    <div class="list-main-desc">
                                        <span>主页</span>
                                    </div>
                                </div>
                            </a>

                            <a href="#">
                                <div class="list-main">
                                    <div class="list-main-icon">
                                        <svg viewBox="0 0 24 24">
                                            <g fill="rgb(20, 23, 26)">
                                                <path d="M19.75 22H4.25C3.01 22 2 20.99 2 19.75V4.25C2 3.01 3.01 2 4.25 2h15.5C20.99 2 22 3.01 22 4.25v15.5c0 1.24-1.01 2.25-2.25 2.25zM4.25 3.5c-.414 0-.75.337-.75.75v15.5c0 .413.336.75.75.75h15.5c.414 0 .75-.337.75-.75V4.25c0-.413-.336-.75-.75-.75H4.25z"></path>
                                                <path d="M17 8.64H7c-.414 0-.75-.337-.75-.75s.336-.75.75-.75h10c.414 0 .75.335.75.75s-.336.75-.75.75zm0 4.11H7c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h10c.414 0 .75.336.75.75s-.336.75-.75.75zm-5 4.11H7c-.414 0-.75-.335-.75-.75s.336-.75.75-.75h5c.414 0 .75.337.75.75s-.336.75-.75.75z"></path>
                                            </g>
                                        </svg>
                                    </div>
                                    <div class="list-main-desc">
                                        <span slot="title">列表</span>
                                    </div>
                                </div>
                            </a>
                            <a href="/NineHite">
                                <div class="list-main">
                                    <div class="list-main-icon">
                                        <svg viewBox="0 0 24 24">
                                            <g fill="rgb(20, 23, 26)">
                                                <path d="M12 11.816c1.355 0 2.872-.15 3.84-1.256.814-.93 1.078-2.368.806-4.392-.38-2.825-2.117-4.512-4.646-4.512S7.734 3.343 7.354 6.17c-.272 2.022-.008 3.46.806 4.39.968 1.107 2.485 1.256 3.84 1.256zM8.84 6.368c.162-1.2.787-3.212 3.16-3.212s2.998 2.013 3.16 3.212c.207 1.55.057 2.627-.45 3.205-.455.52-1.266.743-2.71.743s-2.255-.223-2.71-.743c-.507-.578-.657-1.656-.45-3.205zm11.44 12.868c-.877-3.526-4.282-5.99-8.28-5.99s-7.403 2.464-8.28 5.99c-.172.692-.028 1.4.395 1.94.408.52 1.04.82 1.733.82h12.304c.693 0 1.325-.3 1.733-.82.424-.54.567-1.247.394-1.94zm-1.576 1.016c-.126.16-.316.246-.552.246H5.848c-.235 0-.426-.085-.552-.246-.137-.174-.18-.412-.12-.654.71-2.855 3.517-4.85 6.824-4.85s6.114 1.994 6.824 4.85c.06.242.017.48-.12.654z"></path>
                                            </g>
                                        </svg>
                                    </div>
                                    <div class="list-main-desc">
                                        <span slot="title">个人资料</span>
                                    </div>
                                </div>
                            </a>
                        </nav>
                    </div>


                    <el-dialog
                            :append-to-body='true'
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
                                        <div>
                                            <div class="index-main-left">


                                                <div class="main-name default-font">
                                                    <span>The Economist</span>
                                                    <span class="main-detail"
                                                          style="padding-left: 5px">@TheEconomist</span>
                                                    <span class="main-detail"
                                                          style="padding: 0 5px">·</span>
                                                </div>

                                                <div class="main-detail">
                                                    <a title="上午11:41 · 2020年5月20日"><span class="main-detail">8小时</span></a>
                                                </div>
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

                </div>

                <el-popover
                        ref="user"
                        trigger="click">
                    <div class="user-ops-main">
                        <div class="ops-main-li">
                            <div class="main-li-top">
                                <div class="main-li-top-left">
                                    <el-avatar :size="49"
                                               src="/avatar/ht.jpg">
                                    </el-avatar>
                                </div>
                                <div class="main-li-top-center">
                                    <div class="main-name">Nine Hite</div>
                                    <div class="main-detail">@NineHite</div>
                                </div>
                                <div class="main-li-top-right">
                                    <svg viewBox="0 0 24 24">
                                        <g>
                                            <path d="M9 20c-.264 0-.52-.104-.707-.293l-4.785-4.785c-.39-.39-.39-1.023 0-1.414s1.023-.39 1.414 0l3.946 3.945L18.075 4.41c.32-.45.94-.558 1.395-.24.45.318.56.942.24 1.394L9.817 19.577c-.17.24-.438.395-.732.42-.028.002-.057.003-.085.003z"></path>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <div class="main-li-center">
                                <div class="default-font">添加已有帐号</div>
                            </div>
                            <div class="main-li-bottom">
                                <div class="default-font">
                                    登出
                                    <span>@NineHite</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </el-popover>

                <div class="user-ops-wrap" v-popover:user>
                    <div class="user-ops">
                        <div class="user-ops-container-wrap">
                            <div class="user-ops-container">
                                <div class="user-ops-left">
                                    <el-avatar :size="39"
                                               src="/avatar/ht.jpg">
                                    </el-avatar>
                                </div>
                                <div class="user-ops-center">
                                    <div class="main-name">Nine Hite</div>
                                    <div class="main-detail">@NineHite</div>
                                </div>
                                <div class="user-ops-right">
                                    <svg viewBox="0 0 24 24">
                                        <g>
                                            <path d="M20.207 8.147c-.39-.39-1.023-.39-1.414 0L12 14.94 5.207 8.147c-.39-.39-1.023-.39-1.414 0-.39.39-.39 1.023 0 1.414l7.5 7.5c.195.196.45.294.707.294s.512-.098.707-.293l7.5-7.5c.39-.39.39-1.022 0-1.413z"></path>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </div>

    </div>

</template>

<script>

    import Logo from "./Logo";
    import PopoverInfo from "../index/PopoverInfo";
    import ReplyDialog from "../index/ReplyDialog";

    export default {
        name: "Menu",
        components: {
            Logo,
            PopoverInfo,
            ReplyDialog
        },
        data() {
            return {
                dialogVisible: false,

                tweetInfo1: {
                    tweetId: 1,
                    content: "一张背景墙",
                    pictures: [
                        {
                            url: "/avatar/bg.png"
                        }
                    ],
                    commentCount: 12,
                    shareCount: 12,
                    likeCount: 12,
                    user: {
                        userId: 1,
                        nickname: "Nine_Hite",
                        username: "Hiten_ine",
                        avatar: "/avatar/ht.jpg",
                        isAuthentic: 0,
                        info: "inner peace!",
                        isFollow: 2,
                        following: 30,
                        followers: 1
                    }
                },
            };
        },
    }
</script>

<style lang="scss" scoped>

    .user-ops-main {
        width: 300px;
        min-width: 260px;
        max-width: 360px;
        max-height: 480px;
        min-height: 30px;

        .ops-main-li {
            padding-top: 10px;
            padding-bottom: 10px;

            .main-li-top {
                border-bottom: 1px solid rgb(230, 236, 240);
                padding: 10px 15px;

                display: flex;
                justify-content: space-between;
                align-items: center;

                cursor: auto;
                .main-li-top-left {
                    height: 49px;
                }
                .main-li-top-center{
                    margin-left: 10px;
                    margin-right: 30px;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                }
                .main-li-top-right {
                    display: flex;
                    flex-grow: 1;
                    flex-direction: column;
                    align-items: flex-end;
                    svg {
                        margin-left: 10px;
                        color: rgba(29,161,242,1.00);
                        fill: currentColor;
                        max-width: 100%;
                        height: 1.25em;
                    }
                }
            }
            .main-li-center {
                border-bottom: 1px solid rgb(230, 236, 240);
                padding: 15px;
                cursor: pointer;
                &:hover {
                    background-color: rgb(245, 248, 250);
                }
            }
            .main-li-bottom {
                cursor: pointer;
                padding: 15px;

                &:hover {
                    background-color: rgb(245, 248, 250);
                }

            }

        }

    }

    #my-menu {
        z-index: 4;


        width: 275px;
        display: flex;
        flex-direction: column;
        position: relative;

        .menu-fixed {

            height: 100%;
            position: fixed;
            display: flex;
            flex-basis: auto;
            flex-direction: column;
            flex-shrink: 0;
            top: 0;


            .menu-pad {
                height: 100%;
                overflow-y: auto;

                padding-left: 10px;
                padding-right: 10px;
                box-sizing: border-box;
                width: 275px;
                justify-content: space-between;
                display: flex;
                flex-basis: auto;
                flex-direction: column;
                flex-shrink: 0;


                .menu-main {
                    display: flex;
                    flex-direction: column;

                    .menu-list {
                        margin: 2px 0 5px 0;
                        width: 100%;


                        nav {


                            a {
                                display: flex;
                                flex-direction: column;
                                align-items: flex-start;
                                width: 100%;
                                padding: 4px 0;

                                .list-main {
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;

                                    padding: 10px;

                                    .list-main-icon {
                                        display: flex;
                                        align-items: center;
                                        justify-content: center;

                                        svg {
                                            height: 1.75rem;
                                            color: rgb(20, 23, 26);
                                            fill: currentColor;
                                            max-width: 100%;
                                        }
                                    }

                                    .list-main-desc {

                                        max-width: 100%;
                                        overflow-x: hidden;
                                        overflow-y: hidden;
                                        text-overflow: ellipsis;
                                        white-space: nowrap;

                                        margin-right: 15px;
                                        margin-left: 20px;
                                        font-size: 19px;
                                        color: rgb(20, 23, 26);
                                        font-weight: bold;

                                        span {
                                            line-height: 1.3125;
                                        }
                                    }

                                    &:hover {
                                        .list-main-icon {
                                            svg {
                                                path {
                                                    fill: #1DA1F2;
                                                    /*d: path("M22.58 7.35L12.475 1.897c-.297-.16-.654-.16-.95 0L1.425 7.35c-.486.264-.667.87-.405 1.356.18.335.525.525.88.525.16 0 .324-.038.475-.12l.734-.396 1.59 11.25c.216 1.214 1.31 2.062 2.66 2.062h9.282c1.35 0 2.444-.848 2.662-2.088l1.588-11.225.737.398c.485.263 1.092.082 1.354-.404.263-.486.08-1.093-.404-1.355zM12 15.435c-1.795 0-3.25-1.455-3.25-3.25s1.455-3.25 3.25-3.25 3.25 1.455 3.25 3.25-1.455 3.25-3.25 3.25z");*/

                                                }
                                            }
                                        }

                                        .list-main-desc {
                                            color: #1DA1F2;
                                        }

                                        background-color: rgba(29, 161, 242, 0.1);
                                        border-radius: 50px;
                                    }

                                }
                            }
                        }

                    }

                    .menu-btn {
                        display: flex;
                        flex-direction: column;
                        margin-top: 5px;
                        margin-bottom: 5px;
                        width: 90%;

                        a {
                            display: flex;
                            flex-direction: column;
                            background-color: rgb(29, 161, 242);
                            outline-style: none;

                            box-shadow: rgba(0, 0, 0, 0.08) 0px 8px 28px;
                            transition-duration: 0.2s;
                            min-height: 49px;
                            height: 0px;
                            min-width: calc(78.89px);
                            padding-left: 30px;
                            padding-right: 30px;
                            box-sizing: border-box;
                            border: 1px solid rgba(0, 0, 0, 0);
                            border-radius: 9999px;

                            &:hover {
                                background-color: rgb(26, 145, 218);
                            }

                            div {
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                flex-grow: 1;
                                max-width: 100%;
                                line-height: 1;
                                font-weight: bold;
                                font-size: 15px;
                                min-width: 0px;

                                span {
                                    color: rgb(255, 255, 255);

                                    line-height: 1.3125;
                                }
                            }
                        }

                    }

                }

                .user-ops-wrap {
                    margin-top: 20px;
                    margin-bottom: 10px;
                    display: flex;
                    flex-basis: auto;
                    flex-direction: column;
                    flex-shrink: 0;

                    .user-ops {

                        .user-ops-container-wrap {

                            &:hover {
                                background-color: rgba(29, 161, 242, 0.1);
                            }
                            cursor: pointer;

                            box-sizing: border-box;
                            padding: 10px;
                            display: flex;
                            align-items: center;
                            border-radius: 9999px;

                            .user-ops-container {

                                display: flex;
                                justify-content: space-between;
                                width: 100%;
                                align-items: center;

                                .user-ops-left {
                                    height: 39px;
                                }

                                .user-ops-center {
                                    margin-left: 10px;
                                    margin-right: 30px;
                                    display: flex;
                                    flex-direction: column;
                                    align-items: flex-start;
                                }

                                .user-ops-right {
                                    display: flex;
                                    flex-grow: 1;
                                    flex-direction: column;
                                    align-items: flex-end;
                                    svg {
                                        color: rgb(20, 23, 26);
                                        fill: currentColor;
                                        max-width: 100%;
                                        height: 1.25em;
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