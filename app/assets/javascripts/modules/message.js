$(function(){
  
  function buildHTML(message){
    if ( message.image ) {
      let html =
      `<div class="MessageBox" data-message-id=${message.id}>
          <div class="groupChat">
            <div class="groupChat-name">
              ${message.user_name}
            </div>
            <div class="times">
              ${message.created_at}
            </div>
          </div>
          <div class="groupText">
            <p class="Message__content">
              ${message.content}
            </p>
            <img class="Message__image" src="${message.image}">
          </div>
        </div>`

      return html;
    } else {
      let html =
      `<div class="MessageBox" data-message-id=${message.id}>
        <div class="groupChat">
          <div class="groupChatname">
            ${message.user_name}
          </div>
          <div class="times">
            ${message.created_at}
          </div>
        </div>
        <div class="groupText">
          <p class="Message__content">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }
  $('.mainChat__messageForm__text').on('submit', function(e){
    e.preventDefault()
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.mainChat__messageList').append(html);      
      $('form')[0].reset();
      $('.mainChat__messageList').animate({ scrollTop: $('.mainChat__messageList')[0].scrollHeight});
      $('.submit-btn').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  });
});