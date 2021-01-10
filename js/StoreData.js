$(document).ready(function () {
    $('#LanguageSet').change(function () {
        localStorage.setItem('SetLanguage', $(this).val());
        location.reload();
    });
});