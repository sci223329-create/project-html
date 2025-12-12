document.addEventListener("DOMContentLoaded", function() {

    
    const form = document.querySelector("#contact form");
    form.addEventListener("submit", function(e) {
        e.preventDefault(); 
        alert("تم إرسال رسالتك بنجاح! سنقوم بالتواصل معك قريباً.");
    });

    // ============================
    // 2) عند الضغط على الصور (شراء عقار)
    // ============================
    const images = document.querySelectorAll("#listings img, #gallery img");

    images.forEach(function(img) {
        img.addEventListener("click", function() {

            const propertyName = img.alt || "العقار";

            const confirmPurchase = confirm(`هل تريد شراء ${propertyName}؟`);

            if(confirmPurchase) {
                alert(`تم تسجيل رغبتك في شراء ${propertyName}. سنتواصل معك قريباً!`);
            }
        });
    });


    // ============================
    // 3) عند الضغط على العروض (Confirmation)
    // ============================
    const offers = document.querySelectorAll("#offers li");

    const messages = [
        "فيلا — خصم 10%",
        "شقة عائلية — سعر خاص 300 د.ل / شهر",
        "محل تجاري — فرصة استثمارية مع استشارة مجانية"
    ];

    offers.forEach((offers, index) => {
        offers.addEventListener("click", () => {

            let confirmOffer = confirm(`هل تريد اختيار العرض التالي؟\n\n${messages[index]}`);

            if (confirmOffer) {
                alert(`تم تسجيل رغبتك في عرض: ${messages[index]}. سنقوم بالتواصل معك قريباً!`);
            }
        });
    });

});
