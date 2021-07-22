import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  // 调用 Vue.prototype._init 方法，该方法是在 initMixin 中定义的
  this._init(options)
}

// 通过Mixin函数，在Vue的prototype上扩展方法，比如_init
initMixin(Vue) // 定义 Vue.prototype._init 方法
stateMixin(Vue)  // 主要是添加了 $data,$props,$watch,$set,$delete 几个属性和方法
eventsMixin(Vue)  // 主要是添加了 $on,$off,$once,$emit 三个方法
lifecycleMixin(Vue)  // 主要添加了 _update, $forceUpdate, $destroy 三个方法
renderMixin(Vue)  // 主要添加了 $nextTick 和 _render 两个方法以及一大堆renderHelpers

export default Vue
