<template>
  <div class="container"
       ref="container">
    <div class="inner"
         :style="isVirtualDom?'opacity: 0;': ''">
      <div class="title"
           ref="title">
        <sub>*</sub>
        <span>{{number}}</span>
      </div>
      <div class="options-cover">
        <!-- 小题 -->
        <div v-if="childrenList.length"
             class="unfold"
             @click="unfold">
          <span>小题</span>
          <img :src="unfoldImgUrl"
               alt="">
        </div>
        <!-- 反馈结果 -->
        <!-- -1：未反馈  0：错误  1：正确 -->
        <div v-else-if="result == 1 || result==0"
             class="result-wrap">
          <div class="result">
            <img :src="result==1?selectCorrectlyImgUrl:selectErrorImgUrl"
                 alt="">
          </div>
        </div>
        <!-- 对错选择 / 反馈结果为 -1 -->
        <div v-else
             class="options-cup">
          <div class="correctly"
               @click="select(1)"
               ref="correctly">
            <img :src="selectCorrectly?selectCorrectlyImgUrl:correctlyImgUrl"
                 alt="">
          </div>
          <div class="error"
               @click="select(0)"
               ref="error">
            <img :src="selectError?selectErrorImgUrl:errorImgUrl"
                 alt="">
          </div>
        </div>
      </div>
    </div>

    <!-- 递归组件 -->
    <div v-show="childrenList.length && unfoldStatus"
         class="recursion-container">
      <div class="recursion-wrap"
           ref="recursionWrap">
        <recursion v-for="(item, index) in childrenList"
                :key="index"
                :number="formatChildrenNubmer(index)"
                :childrenList="item.childrenList"
                :isVirtualDom="item.isVirtualDom"
                :result="item.result"
                :isRecursion="true"
                ref="recursion"
                @childrenSelectItem="childrenSelectItem"
                @scrollToBottom="scrollToBottom"></recursion>
        <!-- 箭头指引 -->
        <span class="arrow"
              ref="arrow">
          <span></span>
        </span>
        <!-- 遮罩层, 用于一层层关闭展开，废弃 -->
        <!-- <div class="mask"
             @click="unfold"></div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { addClass, removeClass } from 'common/js/dom'

/*
 * 展开 title 与 bgClr 颜色集合
 * 1 => 第一次展开
 * 2 = > 第二次展开
 */
const RecursionBgClrList = new Map([
  [1, {
    title: '#55C4BD',
    recursionBgClr: '#DCF7F5'
  }],
  [2, {
    title: '#628ADC',
    recursionBgClr: '#C9D8F7'
  }],
  ['default', '#ffc540']
])

export default {
  name: 'recursion',
  props: {
    number: {
      type: String,
      default: ''
    },
    childrenList: {
      type: Array,
      default() {
        return []
      }
    },
    isRecursion: {
      type: Boolean,
      default: false
    },
    // 虚拟 dom
    // flex 布局, 最后一行左对齐
    isVirtualDom: {
      type: Boolean,
      default: false
    },
    // 显示反馈结果
    result: Number
  },
  data() {
    return {
      // static file
      unfoldImgUrl: '/static/img/小题箭头.png',
      correctlyImgUrl: '/static/img/√.png',
      errorImgUrl: '/static/img/错.png',
      selectCorrectlyImgUrl: '/static/img/k-342.png',
      selectErrorImgUrl: '/static/img/r-53.png',

      selectCorrectly: false,
      selectError: false,
      childrenListOptions: [], // 存储递归组件返回的 option
      unfoldStatus: false, // 是否展开小题
      isFirstUnfold: true
    }
  },
  methods: {
    select(type) {
      if (this.result) { // 显示结果，不允许触发 click
        return
      }
      // -1 / undefined：取消  0: 错误  1: 正确
      let val = -1
      this._toggleOptionsState(type)
      // 判断取消选择的情况
      if (type) {
        val = this.selectCorrectly ? type : val
      } else {
        val = this.selectError ? type : val
      }
      this._emitUpComp(val)
    },

    unfold(checkUnfold = true) {
      // 先检测有没有展开的组件，如果有，则关闭
      checkUnfold && this._closeSiblingUnfold()
      this.unfoldStatus = !this.unfoldStatus

      this.$nextTick(() => {
        // 第一次展开配置属性
        if (this.isFirstUnfold) {
          // 节流，避免多次运算
          this.isFirstUnfold = false
          // 递归组件的 recursion-wrap bgClr 样式
          this.$refs.recursionWrap.style.backgroundColor = this._getRecursionBgClr('recursionBgClr')
          this._recursionWrapArrowPos()
        }
        // 展开小节的 title 样式
        this.$refs.title.style.backgroundColor = this._getRecursionBgClr()
        // 将展开小节的 dom 的位置信息发给父组件
        if (checkUnfold) {
          // 节流，避免多次运算
          let rect = this.$refs.recursionWrap.getBoundingClientRect()
          let offsetWidth = rect.top + rect.height
          this.scrollToBottom(offsetWidth)
        }
      })
    },

    // 被遮挡触发事件，直到传递给父组件
    scrollToBottom(param) {
      this.$emit('scrollToBottom', param)
    },

    // 递归组件触发
    childrenSelectItem(childrenOption) {
      if (!childrenOption.isRecursion) {
        return
      }
      this.childrenListOptions[childrenOption.number] = childrenOption.val
      this._emitUpComp(this.childrenListOptions)
    },

    formatChildrenNubmer(val) {
      return `${this.number}.${val + 1}`
    },

    _closeSiblingUnfold() {
      // 先关闭 chidler 组件的展开状态
      this.$children && this.$children.some(item => {
        if (item.$data.unfoldStatus === true) {
          item.unfold(false)
          return true
        }
      })
      // 关闭 sibling 组件的展开状态
      this.$parent.$children.some(item => {
        if (item.$props.number !== this.number && item.$data.unfoldStatus === true) {
          item.unfold(false)
          return true
        }
      })
    },

    _recursionWrapArrowPos() {
      // 修改箭头颜色
      this.$refs.arrow.childNodes[0].style.backgroundColor = this._getRecursionBgClr('recursionBgClr')
      // 修改箭头位置
      let clientWidth = document.documentElement.clientWidth
      let domRect = this.$refs.container.getClientRects()[0]
      let offsetWidth = clientWidth / 2 - domRect.left
      offsetWidth -= domRect.width / 2
      this.$refs.arrow.style.transform = `translateX(${-offsetWidth}px)`
    },

    _toggleOptionsState(type) {
      if (type) {
        this.selectCorrectly = !this.selectCorrectly
        this.selectCorrectly ? addClass(this.$refs.correctly, 'on') : removeClass(this.$refs.correctly, 'on')
        this.selectError = false
        removeClass(this.$refs.error, 'on')
      } else {
        this.selectCorrectly = false
        removeClass(this.$refs.correctly, 'on')
        this.selectError = !this.selectError
        this.selectError ? addClass(this.$refs.error, 'on') : removeClass(this.$refs.error, 'on')
      }
    },

    _emitUpComp(val) {
      // 作为参数传递给父组件
      let option = {
        // 递归组件 number 为小数，提取小数后的数值
        number: this._getLastDecimalPointVal(this.number),
        isRecursion: this.isRecursion,
        val
      }
      // 若是递归组件，则返回递归上级，直到传递父组件
      if (this.isRecursion) {
        this.$emit('childrenSelectItem', option)
      } else {
        this.$emit('selectItem', option)
      }
    },

    /*
     * 截取最后一个小数点后的值
     * 1.2.3 => 3
     * 1.2 => 2
     * 1 => 1
     */
    _getLastDecimalPointVal(str) {
      let arr = str.toString().split('.')
      let ret = arr.length ? Number(arr[arr.length - 1]) : str
      // 数组索引从 0 开始
      return ret - 1
    },

    // 递归组件初始化 title 样式
    _setRecursionTitleBgClr() {
      if (!this.isRecursion) {
        return
      }
      this.$refs.title.style.backgroundColor = this._getRecursionBgClr()
    },

    _getRecursionBgClr(type = 'title') {
      // 获取是第几次递归的组件
      let index = this.number.toString().split('.').length
      // 展开小节状态，取下一个颜色
      if (!this.unfoldStatus) {
        index--
      }
      let clr = index ? RecursionBgClrList.get(index)[type] : RecursionBgClrList.get('default')
      return clr
    },

    // flex 布局，最后一行左对齐
    _childerLengthLessThanFour() {
      // 添加虚拟 dom 使每一行保持 4 个元素
      let remainder = this.childrenList.length % 4
      let obj = { isVirtualDom: true }
      while (remainder > 0) {
        this.childrenList.push(obj)
        remainder--
      }
    }
  },

  mounted() {
    this._childerLengthLessThanFour()
    this._setRecursionTitleBgClr()
  }
}
</script>

<style lang="less" scoped>
.container {
  .inner {
    width: 1.6rem;
    margin: 0 0.05rem 0.2rem;
    .title {
      height: 0.6rem;
      font-size: 0.34rem;
      font-weight: 500;
      line-height: 0.6rem;
      text-align: center;
      vertical-align: top;
      background-color: #ffc540;
      border-radius: 5px 5px 0 0;
      sub {
        color: red;
      }
      span {
        color: #fff;
      }
    }
    .options-cover {
      & > div {
        height: 0.6rem;
        background-color: #f8f8f8;
      }
      .unfold {
        font-size: 0.34rem;
        line-height: 0.6rem;
        text-align: center;
        color: #a0a0a0;
        border: 1px solid #f2f2f2;
        border-top: none;
        & > img {
          width: 0.28rem;
        }
      }
      .result {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 0.6rem;
        & > img {
          height: 0.28rem;
        }
      }
      .options-cup {
        display: flex;
        & > div {
          display: flex;
          justify-content: space-around;
          align-items: center;
          box-sizing: border-box;
          width: 50%;
          height: 0.6rem;
          text-align: center;
          border: 1px solid #f2f2f2;
          border-top: none;
          & img {
            height: 0.22rem;
          }
        }
        .correctly {
          border-right: none;
          &.on {
            background-color: rgba(196, 218, 255, 1);
          }
        }
        .error {
          &.on {
            background-color: rgba(255, 196, 196, 1);
          }
        }
      }
    }
  }
  .recursion-container {
    z-index: 1;
    position: absolute;
    left: 0;
    right: 0;
    .recursion-wrap {
      display: inline-flex;
      flex-wrap: wrap;
      justify-content: space-around;
      width: 100%;
      padding-top: 0.2rem;
      background-color: #dcf7f5;
      border-radius: 0.12rem;
      box-shadow: 0px 3px 9px 1px rgba(150, 150, 150, 0.73);
    }
    .arrow {
      position: absolute;
      top: 11px;
      span {
        position: absolute;
        top: 0;
        left: 0;
        width: 10px;
        height: 10px;
        background-color: #dcf7f5;
        transform: rotate(45deg);
      }
    }
    // 遮罩层, 用于一层层关闭展开，废弃
    // .mask {
    //   z-index: -1;
    //   position: fixed;
    //   top: 0;
    //   left: 0;
    //   right: 0;
    //   bottom: 0;
    //   background-color: rgba(0, 0, 0, 0.5);
    // }
  }
}
</style>
