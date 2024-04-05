$(document).ready(function() {
    $(document).on('submit', 'form', function(e) {
        e.preventDefault();

        const newtask = $('input').val().trim();
        if (newtask !== '') {
            const newli = $('<li></li>').text(newtask);
            $('ul').append(newli);
            newli.slideDown();
            $('input').val('');
        }
    });

    $('ul').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});
