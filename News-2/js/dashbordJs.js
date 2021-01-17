

// The aside Show && hidden
$('.open-aside').on('click',function(){
    $('aside').animate({
        left:0
    },500)
})

$('aside .aside-content>i:first-of-type').on('click',function(){
    $('aside').animate({
        left:-400
    },300)
})

// tr counter
var i;
var tr= $('.rank .table-num');

for(i=0;i<tr.length;){
    tr[i].textContent = i+1
    i++
};

//Add New
layout('.add','.dachbord-content .numbers .dash-info>i');

//Change Rank
layout('.change-modal','.change');

layout('.cancel-artical','.cancel');
//Change info
layout('.change-info-container','.change-info');

//log out
layout('.log-out','.myBtn');


function layout(cc,cb){

  var container = $(cc),
      btn = $(cb),
      span =$(".close");
  btn.on('click',function(e){
    e.preventDefault()
    container.show()
  });

  span.click(function() {
    container.hide();
  })
  window.onclick = function(e) {
    if (e.target == container) {
      container.style.display = "none";
    }
  }
}

//Slect Rank
slectRank()
function slectRank(){
  var i = $('.dachbord-content .numbers .dash-info>i');
      
      i.on('click',function(e){
        e.preventDefault();
        iData = $(this).data('catogry');
        $('.add .modal-content>p>span').text(iData)
      })

}
no()
function no(){
  var no =$('.modal-content .no')
  no.on('click',function(e){
    e.preventDefault();
    $('.modal').hide()
  })
}