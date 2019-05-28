<template>
  <div>
    <div v-if="questionList"
         class="recursion-container"
         ref="recursionCont">
      <recursion v-for="(item, index) in questionList"
              :key="index"
              :number="`${index + 1}`"
              :childrenList="item.childrenList"
              :isVirtualDom="item.isVirtualDom"
              :result="item.result"
              ref="recursion"
              @selectItem="selectItem"
              @scrollToBottom="scrollToBottom"></recursion>
    </div>
  </div>
</template>

<script>
import Recursion from 'components/recursion/recursion'

export default {
  data() {
    return {
      options: [], // 用于存储 return 回来的多维数组
      // 虚拟数据
      questionList: [1,
        {
          childrenList: [1, { result: 1 }, 3, {
            childrenList: [1, 2, 3, 4, 5, 6]
          }, 5, 6]
        },
        3, 4, 5, { result: -1 }, 7, 8, 9, { result: 0 }, 11,
        {
          childrenList: [1, 2, 3, {
            childrenList: [1, 2]
          }, 5, 6]
        },
        13, 14, 15, { result: 1 }, 17, 18]
    }
  },

  methods: {
    // recursion
    // 存储 return 回来的多维数组
    selectItem(option) {
      this.options[option.number] = option.val
    },

    // 超出可视区域，添加 padding-bottom
    scrollToBottom(childrenOffset) {
      // 获取 testQuest 的位置信息
      let recursionCont = this.$refs.recursionCont
      let rect = recursionCont.getBoundingClientRect()
      let offsetWidth = rect.top + rect.height
      // 获取差值
      let diff = childrenOffset - offsetWidth
      // testQuest 添加 paddingBottom 扩展内容区域
      if (diff > 0) {
        recursionCont.style.paddingBottom = diff + 'px'
        document.documentElement.scrollTop = childrenOffset
      } else {
        recursionCont.style.paddingBottom = 0
      }
    },

    // flex 布局，最后一行左对齐
    _questionsLengthLessThanFour() {
      // 添加虚拟 dom 使每一行保持 4 个元素
      let remainder = this.questionList.length % 4
      let obj = { isVirtualDom: true }
      while (remainder > 0) {
        this.questionList.push(obj)
        remainder--
      }
    }
  },

  components: {
    Recursion
  },

  mounted() {
    this._questionsLengthLessThanFour()
  }
}
</script>

<style lang='less' scoped>
/* recursion */
.recursion-container {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
