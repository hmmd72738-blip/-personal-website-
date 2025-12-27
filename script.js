document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    var password = document.getElementById('password').value;

    // আপনার পাসওয়ার্ড
    var correctPassword = '12345'; 

    if (password === correctPassword) {
        alert('লগইন সফল!');
        // এখানে পরবর্তী পেজে রিডাইরেক্ট করা হবে, যেমন:
        // window.location.href = 'dashboard.html';
    } else {
        alert('ভুল পাসওয়ার্ড!');
    }
});
