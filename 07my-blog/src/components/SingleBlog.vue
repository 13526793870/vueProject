<template>
  <div id="single-blog">
    <h1>{{blog.title}}</h1>
    <article>{{blog.content}}</article>
    <p>作者：{{blog.author}}</p>
    <p>分类：</p>
    <ul>
      <li v-for="(category,index) in blog.categories" :key="index">{{category}}</li>
    </ul>
    <button @click="deleteSingleBlog()">删除</button>
    <router-link :to="'/edit/'+this.id">编辑</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: {}
    };
  },
  methods: {
    deleteSingleBlog() {
      this.$axios.delete("/blogs/" + this.id).then(res => {
        this.$router.push({ path: "/" });
      });
    }
  },
  created() {
    this.$axios.get("/blogs/" + this.id).then(res => {
      console.log(res);
      this.blog = res.data;
    });
  }
};
</script>

<style scoped>
#single-blog {
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
  background: #eee;
  border: 1px dotted #aaa;
}
</style>