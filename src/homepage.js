
function go_user_infor(){
    if (location.search != ''){
        window.location.href=html_id("./htmls/user.html")
    }
    else{
        window.location.href="./htmls/login.html"
    }

}

function go_recommen(){
    if (location.search != ''){
        window.location.href=html_id("./htmls/recommendation.html")
    }
    else{
        window.location.href="./htmls/login.html"
    }

}