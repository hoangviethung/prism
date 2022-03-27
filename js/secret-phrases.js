function viewSecretPhrases() {
    $(".button-toggle-secret-phrases").on("click", function (e) {
        if ($(this).find(".fa").hasClass("fa-eye")) {
            $(this)
                .find(".fa-eye")
                .removeClass("fa-eye")
                .addClass("fa-eye-slash");
            $(".secret-phrases").removeClass("hidden-secret-phrases");
        } else {
            $(this)
                .find(".fa-eye-slash")
                .removeClass("fa-eye-slash")
                .addClass("fa-eye");
            $(".secret-phrases").addClass("hidden-secret-phrases");
        }
    });

    $(".secret-phrases").on("click", function (e) {
        if ($(".secret-phrases").hasClass("hidden-secret-phrases")) {
            $(this).removeClass("hidden-secret-phrases");
            if (
                $(".button-toggle-secret-phrases")
                    .find(".fa")
                    .hasClass("fa-eye")
            ) {
                $(".button-toggle-secret-phrases")
                    .find(".fa-eye")
                    .removeClass("fa-eye")
                    .addClass("fa-eye-slash");
            } else {
                $(".button-toggle-secret-phrases")
                    .find(".fa-eye-slash")
                    .removeClass("fa-eye-slash")
                    .addClass("fa-eye");
            }
        }
    });
}

function copySecretPhrases() {
    $(".button-copy-secret-phrases").on("click", function (e) {
        if ($(".secret-phrases").find(".secret-phrases__copied").length > 0) {
            return;
        } else {
            const template = `<div class="secret-phrases__copied"><div class="icon"><i class="far fa-check-circle"></i></div><p>Secret phrases added to clipboard</p></div>`;
            $(".secret-phrases").append(template);
            $(".button-toggle-secret-phrases").attr("disabled", "disabled");
            setTimeout(() => {
                $(".secret-phrases .secret-phrases__copied").remove();
                $(".button-toggle-secret-phrases").removeAttr("disabled");
            }, 2500);
        }
    });
}

$(function () {
    viewSecretPhrases();
    copySecretPhrases();
});
