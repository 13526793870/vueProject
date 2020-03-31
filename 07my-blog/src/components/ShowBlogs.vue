<template>
  <div id="show-blog">
    <h1>博客总览</h1>
    <input type="text" placeholder="搜索" v-model="search" />
    <div class="single-blog" v-for="(blog,index) in filterBlogs" :key="index">
      <router-link :to="'/blog/'+blog.id">
        <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
      </router-link>
      <article>{{blog.content}}</article>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: [],
      search: ""
    };
  },
  created() {
    this.$axios.get("/blogs").then(res => {
      this.blogs = res.data;
    });
  },
  computed: {
    filterBlogs() {
      return this.blogs.filter(blog => {
        return blog.title.match(this.search);
      });
    }
  },
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    }
  },
  directives: {
    rainbow: {
      bind(el, binding, vnode) {
        el.style.color = "red";
      }
    }
  }
};
</script>

<style scoped>
#show-blog {
  max-width: 800px;
  margin: 0 auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
  border: 1px solid #aaa;
}
a {
  text-decoration: none;
}
input[type="text"] {
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
}
</style>