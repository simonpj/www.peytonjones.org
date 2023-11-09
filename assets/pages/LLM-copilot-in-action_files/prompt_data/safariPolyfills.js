;(function runAdapterIfNecessary() {
  const isSafari =
    typeof browser !== 'undefined' && browser.runtime.getURL('').indexOf('safari') > -1
  if (!isSafari) return

  const isKeeper = location.href.includes(browser.runtime.getURL(''))
  if (!isKeeper) return

  /*
   * :focus-visible is not supported natively, so provide our own special listeners
   * to interpret the key events themselves to add/remove a custom .safari-focus-visible class
   */
  document.addEventListener('keydown', onKeyDown, true)
  document.addEventListener('mousedown', onMouseDown, true)
  document.addEventListener('focus', onFocus, true)
  document.addEventListener('blur', onBlur, true)

  let hadKeyboardEvent = false

  function onKeyDown(e) {
    if (e.metaKey || e.altKey || e.ctrlKey) {
      return
    }

    addFocusVisibleClass(document.activeElement)

    hadKeyboardEvent = true
  }

  function onMouseDown() {
    hadKeyboardEvent = false
  }

  function onFocus(e) {
    if (hadKeyboardEvent) {
      addFocusVisibleClass(e.target)
    }
  }

  function onBlur(e) {
    if (e.target.classList.contains('safari-focus-visible')) {
      removeFocusVisibleClass(e.target)
    }
  }

  function addFocusVisibleClass(el) {
    if (el.classList.contains('safari-focus-visible')) {
      return
    }
    el.classList.add('safari-focus-visible')
  }

  function removeFocusVisibleClass(el) {
    el.classList.remove('safari-focus-visible')
  }
})()
