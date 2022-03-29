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
        },
    );
}

function _renderVerificationTemplate(verificationLink) {
    return `<p class="verification-link-block">A <a class="fw-700" href="${verificationLink}">verification link</a> has been sent to your email. Click the link to continue.</p>`;
}

function _renderSecretPhrasesTemplate() {
    return `<div class="secret-phrases hidden-secret-phrases">
    <div class="secret-phrases__item">release</div>
    <div class="secret-phrases__item">rose</div>
    <div class="secret-phrases__item">update</div>
    <div class="secret-phrases__item">void</div>
    <div class="secret-phrases__item">accident</div><div class="secret-phrases__item">coil</div><div class="secret-phrases__item">dove</div><div class="secret-phrases__item">glass</div><div class="secret-phrases__item">humor</div><div class="secret-phrases__item">need</div><div class="secret-phrases__item">peanut</div><div class="secret-phrases__item">rabit</div></div><div class="form-group-buttons-2"><a class="btn btn-block btn-lg btn-outline-primary" href="create-password.html" role="button">Back</a><a class="btn btn-block btn-lg btn-primary" href="verify-secret-phrases.html" role="button">Next</a></div>`;
}

$(function () {
    onSubmitForm();
    onClickVerificationLink();
});
