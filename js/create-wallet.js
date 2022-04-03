function onSubmitForm() {
    $(".create-wallet-screen .form-container").on("submit", function (e) {
        e.preventDefault();
        $(this).remove();
        $(".body-extension").append(_renderVerificationTemplate("#"));
    });
}

function onClickVerificationLink() {
    $(".create-wallet-screen").on(
        "click",
        ".verification-link-block > a",
        function (e) {
            e.preventDefault();
            $(".create-wallet-screen .verification-link-block").remove();
            $(".body-extension").append(_renderSecretPhrasesTemplate());
        },
    );
}

function onClickSecretPhrases() {
    $(".create-wallet-screen").on(
        "click",
        ".secret-phrases-screen .form-control-action .btn",
        function (e) {
            e.preventDefault();
            $(".secret-phrases-screen").remove();
            $(".body-extension").append(_renderVerifySecretPhrases());
        },
    );
}

function viewSecretPhrases() {
    $(".create-wallet-screen").on(
        "click",
        ".button-toggle-secret-phrases",
        function (e) {
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
        },
    );

    $(".create-wallet-screen").on("click", " .secret-phrases", function (e) {
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

function _renderVerificationTemplate(verificationLink) {
    return `<p class="verification-link-block">A <a class="fw-700" href="${verificationLink}">verification link</a> has been sent to your email. Click the link to continue.</p>`;
}

function _renderSecretPhrasesTemplate() {
    return `<div class="secret-phrases-screen">
                <h3 class="sub-title-screen">Save your secret phrases to a safe place!</h3>
                <div class="secret-phrases hidden-secret-phrases">
                <div class="secret-phrases__item">release</div>
                <div class="secret-phrases__item">rose</div>
                <div class="secret-phrases__item">update</div>
                <div class="secret-phrases__item">void</div>
                <div class="secret-phrases__item">accident</div>
                <div class="secret-phrases__item">coil</div>
                <div class="secret-phrases__item">dove</div>
                <div class="secret-phrases__item">glass</div>
                <div class="secret-phrases__item">humor</div>
                <div class="secret-phrases__item">need</div>
                <div class="secret-phrases__item">peanut</div>
                <div class="secret-phrases__item">rabit</div></div>
                <div class="group-button-action">
                    <button class="btn btn-sm btn-link button-toggle-secret-phrases">
                        <i class="fa fa-solid fa-eye"></i>
                        <span>View secret phrases</span>
                    </button>
                    <button class="btn btn-sm btn-link button-copy-secret-phrases">
                        <i class="fa fa-solid fa-copy"></i>
                        <span>Copy secret phrases</span>
                    </button>
                </div>
                <div class="form-control-action position-center-bottom">
                    <a class="btn btn-block btn-lg btn-primary-dark-1" href="#" role="button">Next</a>
                </div>
            </div>`;
}

function _renderVerifySecretPhrases() {
    return `<div class="verify-secret-phrases-screen">
                <h3 class="sub-title-screen">Verify secret phrases</h3>
                    <div class="verify-secret-phrases">
                        <div class="verify-secret-phrases__item">
                            <div class="sequence">1.</div>
                            <input type="text" maxlength="10" value/>
                        </div>
                        <div class="verify-secret-phrases__item">
                            <div class="sequence">2.</div>
                            <input type="text" maxlength="10" value/>
                        </div>
                        <div class="verify-secret-phrases__item">
                            <div class="sequence">3.</div>
                            <input type="text" maxlength="10" value/>
                        </div>
                        <div class="verify-secret-phrases__item">
                            <div class="sequence">4.</div>
                            <input type="text" maxlength="10" value/>
                        </div>
                    </div>
                <div class="form-control-action position-center-bottom">
                    <a class="btn btn-block btn-lg btn-primary-dark-1" href="name-your-wallet.html" role="button">Next</a>
                </div>
            </div>`;
}

$(function () {
    onSubmitForm();
    onClickVerificationLink();
    viewSecretPhrases();
    copySecretPhrases();
    onClickSecretPhrases();
});
