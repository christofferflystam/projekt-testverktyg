class App {

  constructor(){
    new GenerateData((resultView)=>{
      this.start(resultView);
    });
  }

  start(resultView){
    this.HeaderFooter = new HeaderFooter();

    console.log(resultView);

    this.HeaderFooter.display('body');
    
    //Without this all content wont load on time
    setTimeout(function() {
    resultView.display('.content');
    }, 50);



  }
}
