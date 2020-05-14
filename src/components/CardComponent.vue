<template>
    <v-container>
        <div v-if="displayedPosts">
            <v-card>
                <v-container>
                    <v-row>
                        <v-col

                                v-for="item in displayedPosts"
                                :key="item.id"
                                cols="12"
                                md="3"
                        >
                            <v-img :src="item.url" width="300" height="350" class="ml-6"></v-img>
                            <v-card-text class="text-center mx-auto" style="width: 310px">{{item.title}} - {{item.id}}
                            </v-card-text>
                        </v-col>
                    </v-row>

                    <nav>
                        <ul class="pagination">
                            <li class="page-item">
                                <button
                                        type="button"
                                        class="page-link"
                                        v-if="page != 1"
                                        @click="page = 1"
                                >
                                    <v-icon>mdi-chevron-double-left</v-icon>
                                </button>
                            </li>
                            <li class="page-item">
                                <button
                                        type="button"
                                        class="page-link"
                                        v-if="page != 1"
                                        @click="page--"
                                >
                                    <v-icon>mdi-chevron-left</v-icon>
                                </button>
                            </li>

                            <li class="page-item">
                                <button
                                        type="button"
                                        class="page-link"
                                        v-for="(pageNumber,index) in pages.slice(page-1, page+5)"
                                        :key="index"
                                        @click="page = pageNumber"
                                >
                                    {{pageNumber}}
                                </button>
                            </li>

                            <li class="page-item">
                                <button
                                        type="button"
                                        v-if="page < pages.length"
                                        @click="page++"
                                        class="page-link"
                                >
                                    <v-icon>mdi-chevron-right</v-icon>
                                </button>
                            </li>
                            <li class="page-item">
                                <button
                                        type="button"
                                        v-if="page != pages.length"
                                        @click="page = pages.length"
                                        class="page-link"
                                >
                                    <v-icon>mdi-chevron-double-right</v-icon>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </v-container>
            </v-card>
            <br>
            <v-card>
                <v-container v-if="allPhoto">
                    <v-row>
                        <v-col></v-col>
                        <v-col>
                            <v-img
                                    :src="allPhoto[16].url"
                                    height="500"
                                    width="700"
                                    class="justify-center align-center"
                            >
                            </v-img>
                            <v-card-title class="justify-center">{{allPhoto[16].title}} - {{allPhoto[16].id}}
                            </v-card-title>
                            <v-card-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda distinctio
                                ipsam mollitia omnis sed? Aliquid ducimus eos est fuga id soluta veniam. Amet ex harum
                                quas rem tempora, voluptatum. Consequatur.
                            </v-card-text>
                        </v-col>
                        <v-col></v-col>
                    </v-row>
                </v-container>
            </v-card>
        </div>
    </v-container>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: "CardComponent",
        data() {
            return {
                posts: [],
                page: 1,
                perPage: 20,
                pages: []
            }
        },
        methods: {
            ...mapActions(['fetchPhoto']),
            getPosts() {
                for (let i = 0; i < this.allPhoto.length; i++) {
                    this.posts.push(this.allPhoto[i])
                }
            },
            setPages() {
                let numOfPages = Math.ceil(this.posts.length / this.perPage);
                for (let i = 1; i <= numOfPages; i++) {
                    this.pages.push(i)
                }
            },
            paginate(posts) {
                let page = this.page;
                let perPage = this.perPage;
                let from = (page * perPage) - perPage;
                let to = (page * perPage);
                return posts.slice(from, to)
            },

        },
        computed: {
            ...mapGetters(['allPhoto']),
            displayedPosts() {
                return this.paginate(this.posts)
            }
        },
        watch: {
            posts() {
                this.setPages()
            }
        },
        created() {
            this.fetchPhoto();
            this.getPosts()
        },
    }
</script>

<style scoped>
    ul {
        display: flex;
        justify-content: center;
    }

    ul li {
        display: inline-block;
        align-items: center;
    }

    li {
        text-decoration: none;
    }

    button.page-link {
        font-size: 17px;
        background: #f4f4f4;
        color: #000;
        border: 1px solid #ccc;
        border-radius: 3px;
        padding: 5px 8px;
        margin: 5px;
    }

    button.page-link:hover {
        color: red;
    }

</style>