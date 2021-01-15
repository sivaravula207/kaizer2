import { Component, OnInit } from '@angular/core';
import { arr } from '../COMMON/products'
let evilResponse = { 
  "car" : 
    { 
       "color" : "red",
       "model" : "2013"
    },
   "motorcycle": 
    { 
       "color" : "red",
       "model" : "2016"
    },
   "bicycle": 
    { 
       "color" : "red",
       "model" : "2011"
    }
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public productsObj: any
  kaizerDiv: any;
  citiusDiv: any;
  subKaizarDiv: any
  kaizerDivs: any;
  citiusDivs: any;
  productName: any
  // New
  mainProductsDiv: boolean = false


  sinsanDiv: boolean = false
  productComposition: any;
  productIndication: any;
  productPacking: any;
  productDose: any;
  productAlsoAvaliable: any;
  kaizerProductsDiabetic: any;
  kaizerProductsCardiac: any
  kaizerProductsNutra: any
  kaizerProductsOthers: any
  citiusProductsDiabetic: any;
  citiusProductsCardiac: any
  citiusProductsNutra: any
  citiusProductsOthers: any
  kaizarAllProducts: any = []
  selectedItem: any;
  companyName: any;
  citiusAllProducts: any = [];
  kaizarListProducts: boolean = false;
  citiusListProducts: boolean = false
  productHeading: any;


  constructor() { 
    this.kaizerProductsDiabetic = []
    this.kaizerProductsCardiac = []
    this.kaizerProductsNutra = []
    this.kaizerProductsOthers = []
    this.citiusProductsDiabetic = []
    this.citiusProductsCardiac = []
    this.citiusProductsNutra = []
    this.citiusProductsOthers = []
  }

  ngOnInit(): void {
    this.productsObj = arr
    console.log(this.productsObj)
    this.mainProductsDiv = true
    this.getProductstoLoop() 
  }


  //products get

  getProductstoLoop(){
    
   for(let item of this.productsObj) {
     console.log(item)
     
     if((item.companyName === "KAIZER")){
      this.kaizarAllProducts.push(item)
     }
     else if(item.companyName === "CITIUS"){
      this.citiusAllProducts.push(item)
     }

     else if((item.companyName === "KAIZER" && item.department === "Anti-Diabetic")){
      this.kaizerProductsDiabetic.push(item)
     }
     else if((item.companyName === "KAIZER" && item.department === "Cardiac")){
      this.kaizerProductsCardiac.push(item)
     }
     else if((item.companyName === "KAIZER" && item.department === "Nutraceuticals")){
      this.kaizerProductsNutra.push(item)
     }
     else if((item.companyName === "KAIZER" && item.department === "Others")){
      this.kaizerProductsOthers.push(item)
     }
     else if((item.companyName === "CITIUS" && item.department === "Anti-Diabetic")){
      this.citiusProductsDiabetic.push(item)
     }
     else if((item.companyName === "CITIUS" && item.department === "Cardiac")){
      this.citiusProductsCardiac.push(item)
     }
     else if((item.companyName === "CITIUS" && item.department === "Nutraceuticals")){
      this.citiusProductsNutra.push(item)
     }
     else if((item.companyName === "CITIUS" && item.department === "Others")){
      this.citiusProductsOthers.push(item)
     }
     else {}
    
   }
   console.log(this.kaizerProductsCardiac)
   
   console.log(this.citiusProductsNutra)
   console.log(this.citiusProductsOthers)
   console.log(this.kaizarAllProducts) 
   console.log(this.citiusAllProducts)

  }

  checkProductActive(){
    this.kaizarAllProducts
  }

  clicktab(event: any){
    this.kaizerDiv = false
    this.citiusDiv = false
    this.subKaizarDiv = false
    this.kaizerDivs = false
    this.citiusDivs = false
    console.log(event.target.id)
    if(event.target.id === "kaizer"){
    this.kaizerDiv = true
    this.kaizerDivs = true
  }
  else if(event.target.id === "citius"){
    this.citiusDiv = true
    this.citiusDivs = true
  }
  }

  subKaizar(){
    this.subKaizarDiv = true
    this.kaizerDiv = false
    this.citiusDiv = false
    console.log(this.kaizerDivs, this.citiusDivs)
    if(this.kaizerDivs){
      console.log('if')
      this.kaizerDivs = true
      
    }
    else if(this.citiusDivs){
      console.log('else')

      this.citiusDivs = true

    }
    console.log(this.kaizerDivs, this.citiusDivs)
    
  }

  // New

  clickProduct(event: any){
    window.scroll(0,480);
    console.log(event.target.id)
    this.selectedItem = event.target.id
    var target = event.target.id
    this.sinsanDiv = false
    this.kaizerDiv = false
    this.citiusDiv = false
    this.mainProductsDiv = false
    this.productHeading = ''

    //
    this.kaizarListProducts = false
    this.citiusListProducts = false
    
    this.productsObj.find((did: any) => {
      if (did.productName == target) {
        this.companyName = did.companyName
        this.productName = did.productName
        this.productComposition = did.composition
        this.productIndication = did.indication
        this.productPacking = did.packing
        this.productDose = did.dose
        this.productAlsoAvaliable = did.alsoAvaliable
        console.log(did)
      }
      else{}
      
    })

if(this.companyName === 'KAIZER'){
  this.kaizarListProducts = true
  this.productHeading = "Kaizer Products"
}
else if(this.companyName === 'CITIUS'){
  this.citiusListProducts = true
  this.productHeading = "Citius Products"

}


    this.kaizerDiv = true
    if(event.target.id === "sinsan"){
      this.sinsanDiv = true
    }
    else if(event.target.id === "kaizar"){
      this.kaizerDiv = true
      
    }
    else if(event.target.id === "citius"){
      this.citiusDiv = true
    }
    else{
      // this.mainProductsDiv = true
    }
  }
  backtoproducts(){
    this.sinsanDiv = false
    this.kaizerDiv = false
    this.citiusDiv = false
    this.mainProductsDiv = true
  }

}
