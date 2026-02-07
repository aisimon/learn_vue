import Vue from 'vue';

const Article = {
  template:
    ` 
    <div>
        <h2>Title:  {{title}} </h2>
        <p> {{ body }} </p>
        <ul>
          <li v-for="todo in todos">
            {{ todo.text }}
          </li>
        </ul>
    </div>
    `,
  data: function () {
    return {
      'body': 'Body 1'
    }
  },
  props: ['title', 'todos'],
};

const app = new Vue({
  el: '#app',
  data: function () {
    return {
      'todos': [{ 'id': 1, 'text': 'Todo 1', 'completed': false }],
      'title': 'Testing Title'
    }
  },
  template: `
    <article>
      <div>Vue Main App</div>
      <Article :title="title" :todos="todos"/>
    </article>
  `,
  components: {
    Article
  }
});