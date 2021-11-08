# Vue 3 + Vite

## init Vue Project

```js
npm init @vitejs/app

npm install vue-router@next vuex@next
```

## 组件化

- 通用型组件
- 业务型组件

通用型组件就是各大组件库的组件风格，包括按钮、表单、弹窗等通用功能。业务型组件包含业务的交互逻辑，包括购物车、登录注册等，会和我们不同的业务强绑定。

## 动画

> 动画的本质：“从哪里来，到哪里去，中间过程是怎么样的”。

- 使用 CSS 的属性 transition 来实现过渡效果
  - 可以通过 transition 来控制一个元素的属性的值，缓慢地变成另外一个值，这种操作就称之为过渡
  ```css
  <style>
  .box{
    background:#d88986;
    height:100px;
    transition: width 1s linear;
  }
  </style>
  ```
- 还可以通过 animation 和 keyframe 的组合实现动画
  ```css
  /* 我们指定标签的 animation 配置，给标签设置 move 动画，持续时间为两秒，线性变化并且无限循环。然后使用 @keyframes 定制 move 动画，内部定义了动画 0%、50% 和 100% 的位置，最终实现了一个方块循环移动的效果 */
  .box1{
    width:30px;
    height:30px;
    position: relative;
    background:#d88986;
    animation: move 2s linear infinite;
  }
  @keyframes move {
    0% {left:0px}
    50% {left:200px}
    100% {left:0}
  }
  ```
- Vue3 动画入门
  - transition 组件
    - 通过制定的命名规范，在 CSS 中设置过渡和动画效果，从而很方便地实现过渡效果，并且丰富了清单应用的弹窗功能
  - transition-group 实现列表元素的动画

## Vuex

对于一个数据，如果只是组件内部使用就是用 ref 管理；如果我们需要跨组件，跨页面共享的时候，我们就需要把数据从 Vue 的组件内部抽离出来，放在 Vuex 中去管理。

```js
// 安装
npm install vuex@next
```

```js
// import { createStore } from 'vuex';
import { createStore } from './mini-vuex';

// 数据流都试不允许直接修改的
// 需要提交一个 mutations 修改 state 中的数据
// 这样做的好处就是清楚的知道来源 是谁修改了
const store = createStore({
    state() {
        return { count: 666 };
    },
    getters: {
        double(state) {
            return state.count * 2;
        }
    },
    // mutation 的设计就是用来实现同步地修改数据
    mutations: {
        add(state) {
            state.count++;
        }
    },
    // actions 是实现异步处理
    // action 并不是直接修改数据，而是通过 mutations 去修改
    actions: {
        asyncAdd({ commit }) {
            setTimeout(() => {
                commit('add');
            }, 1000);
        }
    }
});

export default store;
```

