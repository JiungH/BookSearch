var searchInput = $(".searchInput");
var searchBtn = $(".searchBtn");

$(".searchBtn").on("click", () => {
    getData(searchInput.val());
})

let page = 1;
let is_end = false;

$(".back_button").hide();
$(".head").hide();

function getData(val) {
    $(".container").empty();
    $.ajax({
        type: "GET",
        url: "https://dapi.kakao.com/v2/search/vclip",
        data: {
            query: val,
            page: page,
        },
        headers: {
            Authorization: "KakaoAK 39b52c2921bf8c3983b3685183b43659",
        }
    }).done(function (response){
        console.log("response : ", response);
        const list = response.documents;
        list.forEach((e) => {
            const thumbnail = e.thumbnail;
            const url = e.url;
            const title = e.title;
            const play_time = e.play_time;
            const datetime = e.datetime;
            const author = e.author;
            $(".head").show();
            $(".container").append(
                `<tr>
              <td><a href="${url}"><img src="${thumbnail}"></a></td>
                <td style="text-align : center">${title}</td>
                <td>${play_time}</td>
                <td>${datetime}</td>
                <td>${author}</td>
            </tr>`
            );
        });
        is_end = response.mata.is_end;
        if(is_end === true){
            $(".next_button").hide();
        }
        if(page === 1){
            $(".back_button").hide();
            $(".next_button").hide();
        }
    });
}

function getDataBack() {
    if (page > 1) {
       page--;
       getData(searchInput.val());
    }
 }

 function getDataNext(){
    if (is_end === false) {
        page++;
        getData(searchInput.val());
        $(".back_button").show();
     }
 }