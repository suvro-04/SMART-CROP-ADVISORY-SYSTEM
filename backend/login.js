    const togglePassword = document.querySelector(".toggle-password");
    const passwordInput = document.querySelector("#password");

    togglePassword.addEventListener("click", () => {
      const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
      passwordInput.setAttribute("type", type);
      togglePassword.textContent = type === "password" ;
    });

    document.querySelectorAll('.login-btn, .social-btn').forEach(button => {
      button.addEventListener("click", function (e) {
        const ripple = document.createElement("span");
        ripple.classList.add("ripple");
        ripple.style.width = ripple.style.height = Math.max(this.offsetWidth, this.offsetHeight) + "px";
        ripple.style.left = e.clientX - this.offsetLeft - ripple.offsetWidth / 2 + "px";
        ripple.style.top = e.clientY - this.offsetTop - ripple.offsetHeight / 2 + "px";
        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
      });
    });