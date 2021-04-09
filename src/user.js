if (location.search != ''){
    console.log(location.search)
    var parameters = location.search.substring(1).split("&");

    var temp = parameters[0].split("=");
    l = unescape(temp[1]);
    temp = parameters[1].split("=");
    p = unescape(temp[1]);

    console.log(l)
    console.log(p)
}