document.querySelectorAll(".compare__tilt-container").forEach(function(e){var t=e.querySelector(".compare__tilt-img");e.addEventListener("mousemove",function(o){var n=e.getBoundingClientRect(),c=n.width,r=n.height,d=n.left,a=n.top,l=(o.clientX-d)/c-.5,i=(o.clientY-a)/r-.5;t.style.transform="rotateX(".concat(50*i,"deg) rotateY(").concat(-(50*l),"deg) scale3d(1.05, 1.05, 1.05)"),t.style.boxShadow="".concat(40*l,"px ").concat(40*i,"px ").concat(16,"px rgba(232, 232, 240, 0.4)")}),e.addEventListener("mouseleave",function(){t.style.transform="rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",t.style.boxShadow=""})}),document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".detail__explore-btn"),t=document.querySelector(".header__icon--burger"),o=document.querySelector(".header__icon--close"),n=document.body;t.addEventListener("click",function(){n.style.overflow="hidden"}),o.addEventListener("click",function(){n.style.overflow="auto"}),e.addEventListener("click",function(){document.getElementById("detail").scrollIntoView({behavior:"smooth"})})});
//# sourceMappingURL=index.8832e32a.js.map