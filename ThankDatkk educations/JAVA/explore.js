document.addEventListener('DOMContentLoaded', function () {
    const categoryChips = document.querySelectorAll('.category-chip');
    const courseCards = document.querySelectorAll('.course-card');

    // Hàm lọc khóa học
    function filterCourses(category) {
        courseCards.forEach(card => {
            const cardCategories = card.getAttribute('data-category')?.split(' ') || [];
            
            if (category === 'all' || cardCategories.includes(category)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Xử lý click vào chip
    categoryChips.forEach(chip => {
        chip.addEventListener('click', function () {
            // Xóa active từ tất cả chip
            categoryChips.forEach(c => c.classList.remove('active'));
            // Thêm active cho chip được click
            this.classList.add('active');

            // Lấy category từ data-attribute
            const selectedCategory = this.getAttribute('data-category');
            filterCourses(selectedCategory);
        });
    });

    // Mặc định hiển thị tất cả khi load trang
    filterCourses('all');
});