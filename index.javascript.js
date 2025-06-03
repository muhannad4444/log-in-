/*
HOW TO CONNECT TO YOUR APP | كيفية ربط الكود بالتطبيق:
1. Replace alert messages with your actual login/register logic
   استبدال رسائل التنبيه بوظائف تسجيل الدخول/التسجيل الفعلية
2. Add your API endpoints for authentication
   إضافة روابط API للتوثيق
3. Customize validation rules as needed
   تخصيص قواعد التحقق حسب الحاجة
*/

document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations | تهيئة المؤثرات
    setTimeout(function() {
        document.getElementById('loginContainer').classList.add('animate');
    }, 100);
    
    // Password visibility toggle | تبديل رؤية كلمة السر
    const togglePasswordButtons = document.querySelectorAll('.toggle-password');
    
    togglePasswordButtons.forEach(button => {
        button.addEventListener('click', function() {
            const passwordInput = this.parentElement.querySelector('input');
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                this.textContent = '○';
            } else {
                passwordInput.type = 'password';
                this.textContent = '●';
            }
        });
    });

    // Switch between login and register forms | التبديل بين كارت الدخول والتسجيل
    const showRegister = document.getElementById('showRegister');
    const showLogin = document.getElementById('showLogin');
    const loginContainer = document.getElementById('loginContainer');
    const registerContainer = document.getElementById('registerContainer');

    showRegister.addEventListener('click', function(e) {
        e.preventDefault();
        loginContainer.classList.remove('animate');
        loginContainer.classList.add('hide-down');
        setTimeout(() => {
            loginContainer.style.display = 'none';
            registerContainer.style.display = 'block';
            setTimeout(() => {
                registerContainer.classList.remove('hide-up');
                registerContainer.classList.add('animate');
            }, 50);
        }, 700);
    });

    showLogin.addEventListener('click', function(e) {
        e.preventDefault();
        registerContainer.classList.remove('animate');
        registerContainer.classList.add('hide-up');
        setTimeout(() => {
            registerContainer.style.display = 'none';
            loginContainer.style.display = 'block';
            setTimeout(() => {
                loginContainer.classList.remove('hide-down');
                loginContainer.classList.add('animate');
            }, 50);
        }, 700);
    });

    // Email validation | التحقق من صحة الإيميل
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Password validation | التحقق من قوة كلمة السر
    function validatePassword(password) {
        const re = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;
        return re.test(password);
    }

    // Login form elements | عناصر نموذج تسجيل الدخول
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;
        
        // Email validation check | التحقق من صحة الإيميل
        if (!emailInput.value || !validateEmail(emailInput.value)) {
            emailInput.classList.add('input-error');
            emailError.style.display = 'block';
            isValid = false;
        } else {
            emailInput.classList.remove('input-error');
            emailError.style.display = 'none';
        }
        
        // Password validation check | التحقق من صحة كلمة السر
        if (!passwordInput.value || !validatePassword(passwordInput.value)) {
            passwordInput.classList.add('input-error');
            passwordError.style.display = 'block';
            isValid = false;
        } else {
            passwordInput.classList.remove('input-error');
            passwordError.style.display = 'none';
        }
        
        if (isValid) {
            // Replace with your actual login logic | استبدل هذا بوظيفة تسجيل الدخول الفعلية
            alert('Login successful!');
            // window.location.href = "dashboard.html"; // Example redirect
        }
    });

    // Register form elements | عناصر نموذج التسجيل
    const registerForm = document.getElementById('registerForm');
    const regEmailInput = document.getElementById('reg-email');
    const regPasswordInput = document.getElementById('reg-password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const regEmailError = document.getElementById('regEmailError');
    const regPasswordError = document.getElementById('regPasswordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;
        
        // Email validation | التحقق من الإيميل
        if (!regEmailInput.value || !validateEmail(regEmailInput.value)) {
            regEmailInput.classList.add('input-error');
            regEmailError.style.display = 'block';
            isValid = false;
        } else {
            regEmailInput.classList.remove('input-error');
            regEmailError.style.display = 'none';
        }
        
        // Password validation | التحقق من كلمة السر
        if (!regPasswordInput.value || !validatePassword(regPasswordInput.value)) {
            regPasswordInput.classList.add('input-error');
            regPasswordError.style.display = 'block';
            isValid = false;
        } else {
            regPasswordInput.classList.remove('input-error');
            regPasswordError.style.display = 'none';
        }
        
        // Password match validation | التحقق من تطابق كلمة السر
        if (regPasswordInput.value !== confirmPasswordInput.value) {
            confirmPasswordInput.classList.add('input-error');
            confirmPasswordError.style.display = 'block';
            isValid = false;
        } else {
            confirmPasswordInput.classList.remove('input-error');
            confirmPasswordError.style.display = 'none';
        }
        
        if (isValid) {
            // Replace with your actual registration logic | استبدل هذا بوظيفة التسجيل الفعلية
            alert('Account created successfully!');
            // Example: Send data to your backend
            // fetch('/api/register', { method: 'POST', body: JSON.stringify(...) })
        }
    });

    // Real-time validation | التحقق في الوقت الحقيقي
    emailInput.addEventListener('input', validateLoginForm);
    passwordInput.addEventListener('input', validateLoginForm);
    regEmailInput.addEventListener('input', validateRegisterForm);
    regPasswordInput.addEventListener('input', validateRegisterForm);
    confirmPasswordInput.addEventListener('input', validateRegisterForm);

    function validateLoginForm() {
        if (emailInput.value && validateEmail(emailInput.value)) {
            emailInput.classList.remove('input-error');
            emailError.style.display = 'none';
        }
        if (passwordInput.value && validatePassword(passwordInput.value)) {
            passwordInput.classList.remove('input-error');
            passwordError.style.display = 'none';
        }
    }

    function validateRegisterForm() {
        if (regEmailInput.value && validateEmail(regEmailInput.value)) {
            regEmailInput.classList.remove('input-error');
            regEmailError.style.display = 'none';
        }
        if (regPasswordInput.value && validatePassword(regPasswordInput.value)) {
            regPasswordInput.classList.remove('input-error');
            regPasswordError.style.display = 'none';
        }
        if (regPasswordInput.value === confirmPasswordInput.value) {
            confirmPasswordInput.classList.remove('input-error');
            confirmPasswordError.style.display = 'none';
        }
    }
});