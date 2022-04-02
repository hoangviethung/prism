function viewDetailItemAccount() {
    $(".account__item .btn-show-more").on("click", function () {
        $(this)
            .parents(".account__item")
            .find(".item__content-detail")
            .slideToggle();
        $(this).toggleClass("active");
        $(".account__item .btn-show-more")
            .not(this)
            .parents(".account__item")
            .find(".item__content-detail")
            .slideUp();
        $(".account__item .btn-show-more").not(this).remove("active");
    });
}

$(document).ready(function () {
    viewDetailItemAccount();
});
