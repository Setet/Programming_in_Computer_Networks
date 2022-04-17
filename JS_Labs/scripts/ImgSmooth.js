(function setHideEvents(el) {
    el.onmouseover = function() {
          this.classList.add('hidden_1')
          document.getElementById('quote').classList.add('shown')
    }
    el.onmouseout = function() {
          this.classList.remove('hidden_1')
          document.getElementById('quote').classList.remove('shown')
    }   
  })(document.getElementById('img_smooth'))