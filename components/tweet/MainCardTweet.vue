<template>

    <div class="main-card-tweet">
        <div class="content">

            <!-- 头部页眉 -->
            <div class="content-tag">
                <div class="tag-main">
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
                    <div>
                        <h2 class="title-h2-inline">推文</h2>
                    </div>
                </div>
            </div>

            <!-- 主体内容区域 -->
            <div class="content-main">
                <div class="main-card">
                    <article>
                        <div class="article-main">
                            <!-- 粗线 -->
                            <div style="width: 568px;margin: 0 auto;height: 10px;">
                                <div style="margin-left: -5px;margin-right: -5px;height: 10px;"></div>
                            </div>

                            <div class="content-container">


                                <div class="card-main">
                                    <div class="card-main-title">


                                        <div class="left-avatar">
                                            <!-- 头像弹窗 -->
                                            <el-popover
                                                    :open-delay="500"
                                                    :close-delay="250"
                                                    :visible-arrow="false"
                                                    trigger="hover">

                                                <!-- 弹框信息 -->
                                                <popover-info :tweet="tweetInfo"></popover-info>

                                                <el-avatar slot="reference" :size="49"
                                                           src="/avatar/theeconomist.jpg">
                                                </el-avatar>
                                            </el-popover>
                                        </div>

                                        <div class="title-main">
                                            <div class="main-left">
                                                <!-- 头像弹窗 -->
                                                <el-popover
                                                        :open-delay="500"
                                                        :close-delay="250"
                                                        :visible-arrow="false"
                                                        trigger="hover">

                                                    <!-- 弹框信息 -->
                                                    <popover-info :tweet="tweetInfo"></popover-info>

                                                    <div class="main-name" slot="reference">
                                                        <a href="#">
                                                            <div class="a-uname">
                                                                <div>The Economist</div>
                                                                <div class="authentic"
                                                                     v-if="tweetInfo.user.isAuthentic">
                                                                    <svg viewBox="0 0 24 24" style="height: 1.25em;">
                                                                        <g fill="rgba(29,161,242,1.00)">
                                                                            <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                                                                        </g>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                            <div class="uname main-detail">@TheEconomist</div>
                                                        </a>
                                                    </div>
                                                </el-popover>
                                            </div>
                                            <div class="main-right">
                                                <!-- 下拉菜单 -->
                                                <el-popover
                                                        :visible-arrow="false">
                                                    <ul class="ul-li drop-down-font">
                                                        <li>
                                                            <div>
                                                                <svg viewBox="0 0 24 24" height="1.25em"
                                                                     style="margin-right: 10px">
                                                                    <g fill="rgb(101, 119, 134)">
                                                                        <path d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"></path>
                                                                        <path d="M12 13.415c1.892 0 3.633.95 4.656 2.544.224.348.123.81-.226 1.035-.348.226-.812.124-1.036-.226-.747-1.162-2.016-1.855-3.395-1.855s-2.648.693-3.396 1.854c-.224.35-.688.45-1.036.225-.35-.224-.45-.688-.226-1.036 1.025-1.594 2.766-2.545 4.658-2.545zm4.216-3.957c0 .816-.662 1.478-1.478 1.478s-1.478-.66-1.478-1.478c0-.817.662-1.478 1.478-1.478s1.478.66 1.478 1.478zm-5.476 0c0 .816-.662 1.478-1.478 1.478s-1.478-.66-1.478-1.478c0-.817.662-1.478 1.478-1.478.817 0 1.478.66 1.478 1.478z"></path>
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                            对此不感兴趣
                                                        </li>
                                                        <li>
                                                            <div>
                                                                <svg viewBox="0 0 24 24" height="1.25em"
                                                                     style="margin-right: 10px">
                                                                    <g fill="rgb(101, 119, 134)">
                                                                        <path d="M23.804 11.5l-6.496-7.25c-.278-.31-.752-.334-1.06-.06-.308.277-.334.752-.058 1.06L22.238 12l-6.047 6.75c-.275.308-.25.782.06 1.06.142.127.32.19.5.19.204 0 .41-.084.558-.25l6.496-7.25c.252-.28.258-.713 0-1zm-23.606 0l6.496-7.25c.278-.31.752-.334 1.06-.06.308.277.334.752.058 1.06L1.764 12l6.047 6.75c.277.308.25.782-.057 1.06-.143.127-.322.19-.5.19-.206 0-.41-.084-.56-.25L.197 12.5c-.252-.28-.257-.713 0-1zm9.872 12c-.045 0-.09-.004-.135-.012-.407-.073-.68-.463-.605-.87l3.863-21.5c.074-.407.466-.674.87-.606.408.073.68.463.606.87l-3.864 21.5c-.065.363-.38.618-.737.618z"></path>
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                            嵌入推文
                                                        </li>
                                                        <li>
                                                            <div>
                                                                <svg viewBox="0 0 24 24" height="1.25em"
                                                                     style="margin-right: 10px">
                                                                    <g fill="rgb(101, 119, 134)">
                                                                        <path d="M20.083 6.173l2.323 2.323c.293.293.768.293 1.06 0s.294-.768 0-1.06l-2.32-2.326 2.322-2.323c.293-.294.293-.77 0-1.062s-.768-.293-1.06 0L20.082 4.05 17.76 1.73c-.293-.293-.768-.293-1.06 0-.147.146-.22.338-.22.53s.072.384.22.53l2.32 2.32-2.32 2.325c-.147.146-.22.338-.22.53s.072.384.22.53c.292.293.767.293 1.06 0l2.323-2.32zM8.417 11.816c1.355 0 2.872-.15 3.84-1.256.813-.93 1.077-2.367.806-4.392-.38-2.826-2.116-4.513-4.645-4.513-2.53 0-4.267 1.687-4.646 4.513-.273 2.025-.01 3.462.805 4.393.968 1.108 2.485 1.257 3.84 1.257zm-3.16-5.448c.16-1.2.786-3.212 3.16-3.212 2.373 0 2.998 2.013 3.16 3.212.207 1.55.056 2.627-.45 3.205-.455.52-1.266.743-2.71.743s-2.256-.223-2.71-.743c-.507-.578-.658-1.656-.45-3.205zm11.44 12.867c-.88-3.525-4.283-5.988-8.28-5.988-3.998 0-7.403 2.463-8.28 5.988-.172.693-.03 1.4.395 1.94.408.522 1.04.822 1.733.822H14.57c.69 0 1.323-.3 1.73-.82.425-.54.568-1.247.396-1.942zm-1.577 1.018c-.126.16-.316.245-.55.245H2.264c-.235 0-.426-.085-.552-.246-.137-.174-.18-.412-.12-.654.71-2.855 3.517-4.85 6.824-4.85s6.113 1.994 6.824 4.85c.06.24.017.48-.12.655z"></path>
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                            取消关注 @TheEconomist
                                                        </li>
                                                        <li>
                                                            <div>
                                                                <svg viewBox="0 0 24 24" height="1.25em"
                                                                     style="margin-right: 10px">
                                                                    <g fill="rgb(101, 119, 134)">
                                                                        <path d="M23.25 3.25h-2.425V.825c0-.414-.336-.75-.75-.75s-.75.336-.75.75V3.25H16.9c-.414 0-.75.336-.75.75s.336.75.75.75h2.425v2.425c0 .414.336.75.75.75s.75-.336.75-.75V4.75h2.425c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zM18.575 22H4.25C3.01 22 2 20.99 2 19.75V5.5c0-1.24 1.01-2.25 2.25-2.25h8.947c.414 0 .75.336.75.75s-.336.75-.75.75H4.25c-.413 0-.75.336-.75.75v14.25c0 .414.337.75.75.75h14.325c.413 0 .75-.336.75-.75v-8.872c0-.414.336-.75.75-.75s.75.336.75.75v8.872c0 1.24-1.01 2.25-2.25 2.25z"></path>
                                                                        <path d="M16.078 9.583H6.673c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h9.405c.414 0 .75.336.75.75s-.336.75-.75.75zm0 3.867H6.673c-.414 0-.75-.337-.75-.75s.336-.75.75-.75h9.405c.414 0 .75.335.75.75s-.336.75-.75.75zm-4.703 3.866H6.673c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h4.702c.414 0 .75.336.75.75s-.336.75-.75.75z"></path>
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                            从列表中添加/移除
                                                        </li>
                                                        <li>
                                                            <div>
                                                                <svg viewBox="0 0 24 24" height="1.25em"
                                                                     style="margin-right: 10px">
                                                                    <g fill="rgb(101, 119, 134)">
                                                                        <path d="M1.75 22.354c-.192 0-.384-.073-.53-.22-.293-.293-.293-.768 0-1.06L20.395 1.898c.293-.294.768-.294 1.06 0s.294.767 0 1.06L2.28 22.135c-.146.146-.338.22-.53.22zm1.716-5.577c-.134 0-.27-.036-.392-.11-.67-.413-1.07-1.13-1.07-1.917v-5.5c0-1.24 1.01-2.25 2.25-2.25H6.74l7.047-5.588c.225-.18.533-.215.792-.087.258.125.423.387.423.675v3.28c0 .415-.336.75-.75.75s-.75-.335-.75-.75V3.553L7.47 8.338c-.134.104-.298.162-.467.162h-2.75c-.413 0-.75.337-.75.75v5.5c0 .263.134.5.356.64.353.216.462.678.245 1.03-.14.23-.387.357-.64.357zm10.787 5.973c-.166 0-.33-.055-.466-.162l-4.795-3.803c-.325-.258-.38-.73-.122-1.054.258-.322.73-.38 1.054-.12l3.58 2.838v-7.013c0-.414.335-.75.75-.75s.75.336.75.75V22c0 .288-.166.55-.425.675-.104.05-.216.075-.327.075z"></path>
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                            隐藏 @TheEconomist
                                                        </li>
                                                        <li>
                                                            <div>
                                                                <svg viewBox="0 0 24 24" height="1.25em"
                                                                     style="margin-right: 10px">
                                                                    <g fill="rgb(101, 119, 134)">
                                                                        <path d="M12 1.25C6.072 1.25 1.25 6.072 1.25 12S6.072 22.75 12 22.75 22.75 17.928 22.75 12 17.928 1.25 12 1.25zm0 1.5c2.28 0 4.368.834 5.982 2.207L4.957 17.982C3.584 16.368 2.75 14.282 2.75 12c0-5.1 4.15-9.25 9.25-9.25zm0 18.5c-2.28 0-4.368-.834-5.982-2.207L19.043 6.018c1.373 1.614 2.207 3.7 2.207 5.982 0 5.1-4.15 9.25-9.25 9.25z"></path>
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                            屏蔽 @TheEconomist
                                                        </li>
                                                        <li>
                                                            <div>
                                                                <svg viewBox="0 0 24 24" height="1.25em"
                                                                     style="margin-right: 10px">
                                                                    <g fill="rgb(101, 119, 134)">
                                                                        <path d="M19.25 2c-.414 0-.75.336-.75.75v.09c-.695-.245-1.423-.38-2.21-.38-1.453 0-2.876.417-4.25.82-1.334.39-2.592.76-3.83.76-.948 0-1.792-.225-2.58-.688-.234-.135-.52-.136-.753-.002-.233.132-.377.38-.377.65v9.77c0 .267.14.513.37.647 1.025.6 2.117.893 3.34.893 1.453 0 2.876-.417 4.25-.82 1.334-.39 2.592-.76 3.83-.76.802 0 1.527.17 2.21.5v7.02c0 .414.336.75.75.75s.75-.336.75-.75V2.75c0-.414-.336-.75-.75-.75zm-2.96 10.23c-1.453 0-2.876.416-4.25.82-1.333.39-2.592.76-3.83.76-.802 0-1.528-.162-2.21-.49V5.174c.694.245 1.425.366 2.21.366 1.453 0 2.875-.417 4.25-.82 1.333-.39 2.592-.76 3.83-.76.802 0 1.528.16 2.21.49v8.145c-.694-.244-1.425-.366-2.21-.366z"></path>
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                            举报推文
                                                        </li>
                                                    </ul>
                                                    <i slot="reference" class="el-icon-arrow-down"></i>
                                                </el-popover>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tweet-main">
                                        <div class="main-01">
                                            <div class="tweet-content">
                                                <div class="tweet-content">もちろん茶ぱっつんや金髪ぱっつんもいいよね…！ぱっつんは良い文明</div>
                                                <div class="tweet-translate">
                                                    翻译推文
                                                </div>
                                            </div>
                                            <div class="main-img" v-show="false">
                                                <el-image
                                                        src="/avatar/hand.jpg">
                                                </el-image>
                                            </div>
                                        </div>

                                        <div class="tweet-time">
                                            <div class="main-detail">
                                                下午5:01 · 2020年5月31日
                                            </div>
                                            <div class="main-detail"
                                                 style="padding: 0 5px">·
                                            </div>
                                            <div class="tweet-app">
                                                Twitter for iPhone
                                            </div>
                                        </div>

                                        <div class="share-like">
                                            <div class="share">
                                                <a href="#">
                                                    <span class="main-name">21</span>
                                                    <span class="main-detail">转推</span>
                                                </a>
                                            </div>
                                            <div class="like">
                                                <a href="#">
                                                    <span class="main-name">229</span>
                                                    <span class="main-detail">喜欢次数</span>
                                                </a>
                                            </div>
                                        </div>

                                        <tweet-ops-big></tweet-ops-big>

                                    </div>



                                </div>
                            </div>
                        </div>
                    </article>

                    <reply-card></reply-card>

                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import TweetEdit from "../index/TweetEdit";
    import TweetOpsBig from "./TweetOpsBig";
    import PopoverInfo from "../index/PopoverInfo";
    import ReplyCard from "./ReplyCard";

    export default {
        name: "MainCard",
        components: {
            TweetEdit,
            PopoverInfo,
            TweetOpsBig,
            ReplyCard,
        },
        data() {
            return {
                dialogVisible: false,

                isShow: false,
                disabled: true,
                percentage: 0,
                tweet: {
                    say: ''
                },


                user: {
                    userId: 1,
                    nickname: "Nine_Hite",
                    username: "Hiten_ine",
                    avatar: "/avatar/ht.jpg",
                    tweet: {
                        content: "",
                        pictures: [""]
                    }
                },

                tweetInfo: {
                    tweetId: 2,
                    content: "The lira has lost 15% of its value against the dollar so far this year, the most among big, commodity-importing emerging markets",
                    pictures: [],
                    commentCount: 12,
                    shareCount: 12,
                    likeCount: 12,
                    user: {
                        userId: 2,
                        nickname: "The Economist",
                        username: "TheEconomist",
                        avatar: "/avatar/theeconomist.jpg",
                        isAuthentic: 1,
                        info: "News and analysis with a global perspective.",
                        isFollow: 1,
                        following: 126,
                        followers: 24810000
                    }
                },
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

            }
        },
        methods: {
            aaa() {
                console.log("aaa")
            },
            onSubmit() {
                console.log(this.tweet);
            },
            tweetLen() {
                if (this.tweet.say.length > 0) {
                    this.percentage = this.tweet.say.length / 280 * 100
                    this.isShow = true
                    this.disabled = false
                } else {
                    this.percentage = 0
                    this.isShow = false
                    this.disabled = true
                }
            }
        },
        computed: {
            per() {
                return this.tweet.length > 0 ? this.percentage = this.tweet.length / 280 : 0
            }
        }

    }
</script>

<style lang="scss">

    .ops-all {

        display: flex;

        .all {


            .all-1 {
                position: relative;


                div {
                    display: inline-flex;
                    font-size: 15px;
                    width: 34.75px;
                    height: 34.75px;
                    position: absolute;
                    margin: -8px;
                }

                svg {
                    width: 1.25em;
                    height: 1.25em;
                }

            }

        }

    }

    /* 向下小箭头里的弹出框 */
    .el-popover {
        margin: 0;
        padding: 0;
        color: rgb(20, 23, 26);

        border-radius: 10px;

        .ul-li {
            list-style: none;
            padding: 0 !important;
            margin: 0 !important;

            li {
                display: flex;
                align-items: center;

                cursor: pointer;

                div {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                &:hover {
                    background-color: rgb(245, 248, 250);
                    transition-duration: 0.2s;
                }

                margin: 0;
                padding: 15px;
            }
        }
    }

    .main-card-tweet {

        display: flex;

        flex-basis: auto;
        flex-direction: column;
        flex-shrink: 0;

        width: 600px;
        float: left;
        box-sizing: border-box;
        border-right: 1px solid rgb(230, 236, 240);
        border-left: 1px solid rgb(230, 236, 240);

        .content {
            display: flex;
            flex-basis: auto;
            flex-direction: column;
            flex-shrink: 0;

            .content-tag {
                z-index: 3;

                background-color: white;

                position: sticky;
                top: 0;

                height: 54px;
                line-height: 54px;
                box-sizing: border-box;
                border-bottom: 1px solid rgb(230, 236, 240);

                .tag-main {

                    display: flex;
                    align-items: center;
                    justify-content: flex-start;

                    height: 53px;
                    padding: 0 15px;

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
            }


            .content-main {
                height: 1800px;


                .main-card {

                    article {

                        border-bottom: 1px solid rgb(230, 236, 240);

                        padding-left: 15px;
                        padding-right: 15px;

                        .article-main {

                            .content-container {
                                display: flex;

                                .left-avatar {
                                    margin-right: 5px;
                                }

                                .card-main {


                                    .card-main-title {
                                        display: flex;


                                        .title-main {
                                            display: flex;
                                            justify-content: space-between;

                                            width: 509px;
                                            margin-left: 5px;
                                            .main-left {
                                                display: flex;

                                                .main-name {

                                                    a {
                                                        display: flex;
                                                        flex-direction: column;

                                                        .a-uname {
                                                            display: flex;

                                                            .authentic {
                                                                margin-left: 2px;
                                                            }
                                                        }

                                                        div:first-child:hover {
                                                            text-decoration: underline;
                                                            transition-duration: 0.2s;
                                                        }
                                                    }
                                                }
                                            }

                                            .main-right {
                                                display: flex;
                                                justify-content: flex-end;
                                            }
                                        }
                                    }

                                    .tweet-main {
                                        .main-01 {
                                            margin-top: 10px;
                                            .main-img {

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

                                            .tweet-content {
                                                margin-top: 10px;
                                            }

                                            .tweet-translate {
                                                margin-top: 5px;

                                                &:hover {
                                                    text-decoration: underline;
                                                    cursor: pointer;
                                                    transition-duration: 0.2s;
                                                }
                                            }

                                        }

                                        .tweet-time {
                                            display: flex;
                                            padding: 15px 0;

                                            .tweet-app {
                                                &:hover {
                                                    text-decoration: underline;
                                                    cursor: pointer;
                                                    transition-duration: 0.2s;
                                                }
                                            }
                                        }

                                        .share-like {

                                            display: flex;
                                            padding: 15px 0;
                                            margin-top: calc(-5px);

                                            border-top: 1px solid rgb(230, 236, 240);
                                            border-bottom: 1px solid rgb(230, 236, 240);

                                            div {
                                                margin-right: 20px;
                                                margin-top: 5px;
                                            }

                                            a {
                                                &:hover {
                                                    text-decoration: underline;
                                                    transition-duration: 0.2s;
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
        }

    }


</style>