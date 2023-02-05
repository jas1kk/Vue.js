// image-rotate.js
export default {
  install(Vue) {
    Vue.directive('rotate-image', {
      bind(el, binding) {
        const imageLinks = binding.value.links
        const gap = binding.value.gap || 5000
        let currentIndex = 0
    
        function updateImage() {
          el.src = imageLinks[currentIndex]
          currentIndex = (currentIndex + 1) % imageLinks.length
        }
        updateImage()
    
        const intervalId = setInterval(updateImage, gap)
    
        el.addEventListener('click', function () {
          clearInterval(intervalId)
          currentIndex = Math.floor(Math.random() * imageLinks.length)
          updateImage()
        })
      },
    })
  },
}
