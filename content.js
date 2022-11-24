requestAnimationFrame(function removeDarkOnLight() {
  requestAnimationFrame(removeDarkOnLight)

  if (document.documentElement.hasAttribute('dark')) return

  const nav = document.querySelector('ytd-masthead')

  if (!nav) return

  nav.removeAttribute('dark')
})