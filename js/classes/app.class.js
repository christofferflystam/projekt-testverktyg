class App {

  constructor(){

    new GenerateData((testView)=>{
      this.start(testView);
    });   
  }

  start(testView){
    

    this.HeaderFooter = new HeaderFooter();
    this.testView = testView;
    
    console.log(testView);
    
    this.HeaderFooter.display('body');
    this.testView.display('.content');

    




  }


}
