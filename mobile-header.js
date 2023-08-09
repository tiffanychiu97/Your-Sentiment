let hamburger = document.querySelector(".hb");
let menu = document.querySelector(".menu");
    hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('isactive');
    menu.classList.toggle('active');
    });

    $(function () {
        // $('.sub-menu').hide();
        $('.nav-arrow').click(function () {
            let submenu = $(this).next('.sub-menu');
            submenu.slideToggle();
            $(this).html($(this).html() == `<span class="material-symbols-outlined">
            chevron_right
            </span>` ? `<span class="material-symbols-outlined">
            expand_more
            </span>` : `<span class="material-symbols-outlined">
            chevron_right
            </span>`);
            }
        );
    });
    