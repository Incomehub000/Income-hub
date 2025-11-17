// INCOME HUB - JavaScript Code

function openLogin() {
    alert('লগইন সিস্টেম খুব শীঘ্রই আসছে!');
}

function openRegister() {
    alert('রেজিস্ট্রেশন সিস্টেম খুব শীঘ্রই আসছে!');
}

// পেজ লোড হলে কাজ করবে
document.addEventListener('DOMContentLoaded', function() {
    console.log('INCOME HUB ওয়েবসাইট লোড হয়েছে!');
    
    // সোশ্যাল মিডিয়া লিংক
    const socialLinks = document.querySelectorAll('.social-card');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const platform = this.textContent;
            alert(platform + ' গ্রুপে যাচ্ছেন...');
        });
    });
});
