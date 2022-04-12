(function setHideEvents(el) {
    el.onmouseover = function() {
          this.classList.add('hidden')
    }
    el.onmouseout = function() {
        this.classList.remove('hidden')
    }
  })(document.getElementById('rnd__img1'))