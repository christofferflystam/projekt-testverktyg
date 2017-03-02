class TestView extends Base {

  defaultPropertyValues(){
    return {
      tests: new TestList(),
    }
  }

  constructor(propertyValues = {}){
    super(propertyValues);
  }

   next(){
 
    var current_num = parseInt(document.querySelectorAll(".list-group-item.active")[0].innerText.replace( /^\D+/g, ''));
    current_num++;

    for(let i = 1; i <= document.querySelectorAll(".list-group-item").length; i++){
      $('li[id=question-sidebaritem_' + i +']').removeClass("list-group-item active").addClass("list-group-item");

    }

    for(let i = 1; i <= document.querySelectorAll(".question-item").length; i++){

      $('div[id=question-item_' + i +']').addClass("hidden");
    }

    if(current_num > document.querySelectorAll(".list-group-item").length){
    	current_num--;
    }

    $('li[id=question-sidebaritem_' + current_num +']').removeClass("list-group-item").addClass("list-group-item active");

  	$('div[id=question-item_' + current_num +']').removeClass("hidden");

  }

  previous(){
    
    let current_num = parseInt(document.querySelectorAll(".list-group-item.active")[0].innerText.replace( /^\D+/g, ''));
    current_num--;

    for(let i = 1; i <= document.querySelectorAll(".list-group-item").length; i++){
      $('li[id=question-sidebaritem_' + i +']').removeClass("list-group-item active").addClass("list-group-item");

    }

    for(let i = 1; i <= document.querySelectorAll(".question-item").length; i++){

      $('div[id=question-item_' + i +']').addClass("hidden");
    }

    if(current_num === 0){
    	current_num++;
    }

    $('li[id=question-sidebaritem_' + current_num +']').removeClass("list-group-item").addClass("list-group-item active");

  	$('div[id=question-item_' + current_num +']').removeClass("hidden");
  } 

}