'use strict';
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("clickMe");
    if (button) {
        button.addEventListener("click", function() {
            alert("你点击了按钮!");
        });
    }
});

