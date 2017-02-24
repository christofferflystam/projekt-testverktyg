class App {

  constructor(){
    new GenerateData((resultView)=>{
      this.start(resultView);
    });
  }

  start(resultView){
    this.HeaderFooter = new HeaderFooter();
    this.resultView = resultView;

    console.log(resultView);

    this.HeaderFooter.display('body');
    this.resultView.display('.content');
    

  }
}
