import { Directive, Input, ViewContainerRef, TemplateRef, OnChanges } from '@angular/core';

@Directive({
  selector: '[appCustDirective]'
})
export class CustDirectiveDirective implements OnChanges{

@Input()
appCustDirective : boolean;


  constructor(
    private vcRef : ViewContainerRef,
    private tmRef : TemplateRef<any>
  ) { }

   ngOnChanges(){
    if(!this.appCustDirective){
      this.vcRef.createEmbeddedView(this.tmRef);

    }else{
      this.vcRef.clear();
    }
 }   



}
