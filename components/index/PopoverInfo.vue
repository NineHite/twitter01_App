<template>
    <div class="popover-info">
        <div>
            <div class="popover-info-top">
                <div class="top-left-avatar">
                    <el-avatar :size="59"
                               :src="tweet.user.avatar">
                    </el-avatar>
                </div>
                <div class="top-right-status">
                    <div @mouseenter="followEn" @mouseleave="followLea" v-if="isShowBtnBot">
                        <el-button type="primary" round>
                            <span class="main-name">{{followInfo}}</span>
                        </el-button>
                    </div>
                </div>
            </div>
            <div class="main-name top">
                <a href="#">
                    <div class="main-name">
                        {{ tweet.user.nickname }}
                    </div>
                    <div class="authentic" v-if="tweet.user.isAuthentic">
                        <svg viewBox="0 0 24 24" style="height: 1.25em;">
                            <g fill="rgba(29,161,242,1.00)">
                                <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                            </g>
                        </svg>
                    </div>
                </a>
            </div>
            <div class="main-detail">
                @{{ tweet.user.username }}
            </div>
            <div class="info-des">
                <p>{{ tweet.content }}</p>
            </div>
            <div class="follow">
                <div class="following">
                    <a href="#">
                        <span class="main-name">{{ numberFormat(tweet.user.following) }}</span>
                        <span class="main-detail">正在关注</span>
                    </a>
                </div>
                <div class="followers">
                    <a href="#">
                        <span class="main-name">{{ numberFormat(tweet.user.followers) }}</span>
                        <span class="main-detail">个关注者</span>
                    </a>
                </div>
            </div>
            <div class="common-followers" v-if="isShowBtnBot">
                <span class="sidebar-card-top-detail">你关注的人中没有人关注</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PopoverInfo",
        props: {
            tweet: {
                type: Object,
                default: () => {
                    return {
                        user: {}
                    }
                },
            },

        },
        data() {
            return {
                isShowBtnBot: true,
                followInfo: '正在关注',
            }
        },
        methods: {
            numberFormat(str) {
                str = str.toString()
                if (str > 9999 && str < 100000000) {
                    return this.textFormat(str.substring(0, str.length - 1), '#.0,万')
                }
                if (str >= 100000000) {
                    return this.textFormat(str.substring(0, str.length - 2), '##.0,,亿')
                }
                return this.textFormat(str, '#,#')

            },
            followEn() {
                (this.followInfo === '正在关注') ? this.followInfo = '取消关注' : this.followInfo = '正在关注'
            },
            followLea() {
                (this.followInfo === '正在关注') ? this.followInfo = '取消关注' : this.followInfo = '正在关注'
            }
        },
        mounted() {
            this.tweet.user.isFollow === 2 ? this.isShowBtnBot = false : this.isShowBtnBot = true;
        },
    }
</script>

<style lang="scss">

    .popover-info {
        font-size: 15px;
        padding: 15px;
        width: 270px;

        div {

            .popover-info-top {
                display: flex;
                justify-content: space-between;

                .top-right-status {
                    div {
                        width: 92px;
                        height: 39px;
                        border-radius: 20px;

                        .el-button {
                            width: 92px;
                            height: 39px;
                            color: #1DA1F2;

                            display: flex;
                            justify-content: center;
                            align-items: center;

                            &:hover {
                                background-color: #ca2055;
                                border: none;
                                transition-duration: 0.2s;
                            }

                            span {
                                color: white;
                            }
                        }
                    }
                }
            }

            .top {
                a {

                    display: flex;

                    .authentic {
                        margin-left: 2px;
                    }

                    &:hover {
                        text-decoration: underline;
                        transition-duration: 0.2s;
                    }
                }
            }

            .info-des {
                padding-top: 10px;

                p {
                    overflow-wrap: break-word;
                }
            }

            .follow {
                padding-top: 10px;

                display: flex;
                justify-content: space-between;
                align-items: center;

                .following {
                    &:hover {
                        text-decoration: underline;
                        transition-duration: 0.2s;
                    }
                }

                .followers {
                    &:hover {
                        text-decoration: underline;
                        transition-duration: 0.2s;
                    }
                }
            }

            .common-followers {
                padding-top: 5px;
            }
        }
    }


</style>