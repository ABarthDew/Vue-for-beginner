<template>
  <div class="question-box-container">
    <b-jumbotron header="Vue" lead="Bootstrap v4 Components for Vue.js 2">
      <template v-slot:lead>
        {{ currentQuestion.question }}
      </template>

      <hr class="my-4">

      <b-list-group>
        <b-list-group-item v-for="(answer, index) in answers" :key="index" @click="selectAnswer(index)"
                           :class="[selectedIndex === index ? 'selected' : '']">
          {{ answer }}
        </b-list-group-item>
      </b-list-group>

      <b-button variant="primary" @click="submitAnswer">submit</b-button>
      <b-button @click="next" variant="success" href="#">next</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  props: {
    currentQuestion: Object,
    next: Function,
    increment: Function
  },
  data() {
    return {
      selectedIndex: null,
      shuffledAnswers: []
    }
  },
  computed: {
    answers() {
      let answers = [...this.currentQuestion.incorrect_answers]; //... : 객체의 변수들을 전개함(전개 연산자)
      //뒤에 객체가 있으면 객체 안의 element를 전개함(밖으로 하나하나 다 뺌)
      //[...this.currentQuestion.incorrect_answers] => [1번째부터 차례로,2번재,3번째,4,5,6...]
      answers.push(this.currentQuestion.correct_answer);
      return answers;
    }
  },
  watch: {
    currentQuestion: {
      immediate: true,
      handler() {
        this.selectedIndex = null;
        this.shuffleAnswers();
      }
    }
    // currentQuestion(){
    //     this.selectedIndex = null;
    //     this.shuffleAnswers();
    // }
  },
  methods: {
    selectAnswer(index) {
      this.selectedIndex = index;
      // console.log(index);
    },
    shuffleAnswers() {
      let answers = [...this.currentQuestion.incorrect_answers, this.currentQuestion.correct_answer];
      this.shuffledAnswers = _.shuffle(answers);
      this.correctIndex = this.shuffledAnswers.indexOf(this.CurrentQuestion.correct_answer);
    },
    submitAnswer() {
      let isCorrect = false;
      if (this.selectedIndex === this.correctIndex) {
        isCorrect = true;
      }
      this.increment(isCorrect);
    }
  },
  // mounted(){
  //     console.log(this.currentQuestion);
  //     this.shuffleAnswers();
  // }
}
</script>

<style scoped>
.list-group {
  margin-bottom: 15px;
}

.list-group-item:hover {
  background: #eee;
  cursor: pointer;
}

.btn {
  margin: 0 5px;
}

.selected {
  background-color: powderblue;
}

.correct {
  background-color: lightgreen;
}

.incorrect {
  background-color: lightcoral;
}
</style>