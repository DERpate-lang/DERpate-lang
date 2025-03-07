// بيانات الصور (يمكنك تعديلها أو تحميلها من قاعدة بيانات)
const imagesData = [
    { src: "image1.jpg", comment: "تعليق 1", date: "2025-01" },
    { src: "image2.jpg", comment: "تعليق 2", date: "2025-02" },
    { src: "image3.jpg", comment: "تعليق 3", date: "2025-03" },
    { src: "image4.jpg", comment: "تعليق 4", date: "2025-04" },
    { src: "image5.jpg", comment: "تعليق 5", date: "2025-05" },
    { src: "image6.jpg", comment: "تعليق 6", date: "2025-06" },
    { src: "image7.jpg", comment: "تعليق 7", date: "2025-07" },
    { src: "image8.jpg", comment: "تعليق 8", date: "2025-08" },
    { src: "image9.jpg", comment: "تعليق 9", date: "2025-09" },
    { src: "image10.jpg", comment: "تعليق 10", date: "2025-10" },
    { src: "image11.jpg", comment: "تعليق 11", date: "2025-11" },
    { src: "image12.jpg", comment: "تعليق 12", date: "2025-12" },
    { src: "image13.jpg", comment: "تعليق 13", date: "2026-01" },
    { src: "image14.jpg", comment: "تعليق 14", date: "2026-02" },
    { src: "image15.jpg", comment: "تعليق 15", date: "2026-03" }
];

// تحديد العنصر الأساسي الذي سنضيف فيه الصور
const gallery = document.getElementById("gallery");

// إنشاء الصور ديناميكيًا
imagesData.forEach((image, index) => {
    // إنشاء العنصر الرئيسي لكل صورة
    const galleryItem = document.createElement("div");
    galleryItem.classList.add("gallery-item");

    // إنشاء عنصر التعليق
    const commentBox = document.createElement("div");
    commentBox.classList.add("comment-box");
    commentBox.textContent = image.comment;

    // إنشاء عنصر الإطار للصورة
    const frame = document.createElement("div");
    frame.classList.add("frame");
    frame.setAttribute("onclick", "openModal(this)");

    // إنشاء عنصر الصورة داخل الإطار
    const img = document.createElement("img");
    img.src = image.src;
    img.alt = `صورة ${index + 1}`;

    frame.appendChild(img); // إدراج الصورة داخل الإطار
    galleryItem.appendChild(commentBox); // إضافة التعليق
    galleryItem.appendChild(frame); // إضافة الإطار مع الصورة

    // إضافة الصورة إلى المعرض
    gallery.appendChild(galleryItem);

    // إضافة فاصل التاريخ
    const separator = document.createElement("div");
    separator.classList.add("separator");
    separator.textContent = `تاريخ الصورة: ${image.date}`;
    gallery.appendChild(separator);
});

// فتح نافذة التكبير
function openModal(imageElement) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    const downloadLink = document.getElementById("downloadLink");

    modal.style.display = "flex";
    modalImg.src = imageElement.querySelector("img").src;
    downloadLink.href = modalImg.src;
}

// إغلاق نافذة التكبير
function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}
