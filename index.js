let togglemenu = document.querySelector(".toggle");
let btn = document.querySelector(".btn");
let navigation = document.querySelector(".navigation");
togglemenu.addEventListener("click", function () {
            togglemenu.classList.toggle("active");
            navigation.classList.toggle("active");
            btn.classList.toggle("active");
        });

        let list = document.querySelectorAll(".list");
        for (let i = 0; i < list.length; i++) {
            list[i].addEventListener("click", function () {
                let j = 0;
                while (j < list.length) {
                    list[j++].className = "list";
                }
                list[i].className = "list active";
            });
        }
