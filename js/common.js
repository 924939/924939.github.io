// 处理ios有些机型input和fixed冲突问题
_fixIosInputH () {
    // 判断是否ios
    if (!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
      let [timeout, beforeTop] = [null, 0]
      $('input, textarea').on('focus', () => {
        beforeTop = document.body.scrollTop
        clearTimeout(timeout)
      }).on('blur', () => {
        timeout = setTimeout(() => {
          document.body.scrollTop = beforeTop
        }, 100)
      })
    }
  }