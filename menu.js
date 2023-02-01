const body = document.querySelector("body"),
       nav = document.querySelector("nav"),
       modeToggle = document.querySelector(".dark-light"),
       searchToggle = document.querySelector(".searchToggle"),
       sidebarOpen = document.querySelector(".sidebarOpen"),
       siderbarClose = document.querySelector(".siderbarClose");



        // when you refresh a page it store the mode(dark and light)
       let getMOde = localStorage.getItem("mode");
        if(getMOde && getMOde === "dark-mode"){
            body.classList.add("dark");
        }
    


    // js code to toggle dark and light mode
        modeToggle.addEventListener("click", () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");



        // to keep user select mood even page refersh file reopen
        if(!body.classList.contains("dark")){
            localStorage.setItem("mode" , "light-mode");
        } else {
            localStorage.setItem("mode" , "dark-mode");
        }
       });

       // js code to toggle search box
        searchToggle.addEventListener("click", () =>{
        searchToggle.classList.toggle("active");
       });

        // toggle sidebar 
        sidebarOpen.addEventListener("click", () =>{
            nav.classList.add("active");
        });

                 // toggle sidebar 
        body.addEventListener("click", e =>{
            let clickedElm = e.target;

            if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
                nav.classList.remove("active");
            }
        });


