$(function() {

  $("#search-btn").on("click",function() {
    // 検索ボタンがクリックされたら
    
    $.ajax({
      // データの通信をするところ
      url:"https://itunes.apple.com/search",// 通信先URL
      type:"GET", // GET送信 or POST送信
      dataType: 'jsonp',// 検索結果の形式
      data: {
         term: "あいみょん",
         country: "jp",
      }

   }).done( (data) => {
      // 通信成功した時
      console.log(data);

   }).fail((error) => {
      // 通信失敗した時
      console.log(error);
   })
  })
    // itunesに曲を検索しに行く(Ajax)

})