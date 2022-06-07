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
  productName: any;
  productNameImg: any
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
  productAlsoAvaliable1: any;
  productAlsoAvaliable2: any;
  productAlsoAvaliable3: any;
  alsoImg1: boolean = true;
  alsoImg2: boolean = true;
  alsoImg3: boolean = true;
  alsoAvaDiv: boolean = true;
  activeKaizer: boolean = true;
  activeCitius: boolean = true;
  allAntiDiabeticProducts: any = [];
  allObesityProducts: any = [];
  allCardioProducts: any = [];
  allGastroProducts: any = [];
  allOtherProducts: any = [];
  subProductsDiv: boolean = false;
  constructor() { 
    this.kaizerProductsDiabetic = []
    this.kaizerProductsCardiac = []
    this.kaizerProductsNutra = []
    this.kaizerProductsOthers = []
    this.citiusProductsDiabetic = []
    this.citiusProductsCardiac = []
    this.citiusProductsNutra = []
    this.citiusProductsOthers = []
    this.allAntiDiabeticProducts = []
  }

  ngOnInit(): void {
    this.productsObj = arr
    this.mainProductsDiv = true
    this.getProductstoLoop() 
  }


  //products get

  getProductstoLoop(){
    
   for(let item of this.productsObj) {
     
    //  if((item.companyName === "KAIZER")){
    //   this.kaizarAllProducts.push(item)
    //  }
    //  else if(item.companyName === "CITIUS"){
    //   this.citiusAllProducts.push(item)
    //  }

    //  else if((item.companyName === "KAIZER" && item.department === "Anti-Diabetic")){
    //   this.kaizerProductsDiabetic.push(item)
    //  }
    //  else if((item.companyName === "KAIZER" && item.department === "Cardiac")){
    //   this.kaizerProductsCardiac.push(item)
    //  }
    //  else if((item.companyName === "KAIZER" && item.department === "Nutraceuticals")){
    //   this.kaizerProductsNutra.push(item)
    //  }
    //  else if((item.companyName === "KAIZER" && item.department === "Others")){
    //   this.kaizerProductsOthers.push(item)
    //  }
    //  else if((item.companyName === "CITIUS" && item.department === "Anti-Diabetic")){
    //   this.citiusProductsDiabetic.push(item)
    //  }
    //  else if((item.companyName === "CITIUS" && item.department === "Cardiac")){
    //   this.citiusProductsCardiac.push(item)
    //  }
    //  else if((item.companyName === "CITIUS" && item.department === "Nutraceuticals")){
    //   this.citiusProductsNutra.push(item)
    //  }
    //  else if((item.companyName === "CITIUS" && item.department === "Others")){
    //   this.citiusProductsOthers.push(item)
    //  }
    //  else {}

     if(item.department === "Anti-Diabetic"){
      this.allAntiDiabeticProducts.push(item)
     }
     else if(item.department === "Cardiac"){
      this.allCardioProducts.push(item)
  }
     else if(item.department === "Others"){
      this.allOtherProducts.push(item)
     }
     else if(item.department === "Obesity"){
      this.allObesityProducts.push(item)
     }
     else if(item.department === "Gastro"){
      this.allGastroProducts.push(item)
     }
    else{}
   }
   console.log('this.allAntiDiabeticProducts', this.allAntiDiabeticProducts)
   console.log(this.allCardioProducts)
   console.log(this.allOtherProducts)
   console.log(this.allObesityProducts)
   console.log(this.allGastroProducts)
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
    if(this.kaizerDivs){
      this.kaizerDivs = true
      
    }
    else if(this.citiusDivs){

      this.citiusDivs = true

    }
    
  }

  // New

  clickProduct(event: any){

    this.productDose = undefined
    this.productAlsoAvaliable1 = undefined
    this.productAlsoAvaliable2 = undefined

    this.productAlsoAvaliable3 = undefined
    console.log('event', event)
    this.alsoImg1 = true
    this.alsoImg2 = true
    this.alsoImg3 = true
    this.alsoAvaDiv = true
    // window.scroll(0,480);
    this.selectedItem = event.target.id
    var target = event.target.id
    console.log('target', target)
    this.sinsanDiv = false
    this.kaizerDiv = false
    this.citiusDiv = false
    this.mainProductsDiv = false
    this.productHeading = ''

    //
    this.kaizarListProducts = false
    this.citiusListProducts = false
    this.subProductsDiv = false;
    
    this.productsObj.find((did: any) => {
      if (did.productName == target) {
        this.companyName = did.companyName
        this.productName = did.productName
        this.productNameImg = this.productName
        this.productComposition = did.composition
        this.productIndication = did.indication
        this.productPacking = did.packing
        this.productDose = did.dose
        this.productAlsoAvaliable1 = did.alsoAvaliable1
        this.productAlsoAvaliable2 = did.alsoAvaliable2
        this.productAlsoAvaliable3 = did.alsoAvaliable3
        this.subProductsDiv = true;
      }
      else{}
    })

    if(this.productName === "GLIMFIRST M1/M2 FORTE TAB"){
      this.productNameImg = "Glimfirst_M1"
    }
    if(this.productName === "TENLIP M/M Forte"){
      this.productNameImg = "TENLIP_M_Forte"
    }
    else if(this.productName === "TELFIRST 20/40/80MG TAB"){
      this.productNameImg = "TELFIRST 204080"
    }
    else if(this.productName === "BDID SR/TH"){
      this.productNameImg = "BDID SRTH"
    }

    else if(this.productName === "MDAPA 5/10"){
      this.productNameImg = "MDAPA 510"
    }

    else if(this.productName === "MDAPA 5M/10M/FORTE"){
      this.productNameImg = "MDAPA 5M10MFORTE"
    }

    else if(this.productName === "SINXIGA 5/10"){
      this.productNameImg = "SINXIGA 510"
    }
    else if(this.productName === "SINXIGA - 5M/10M/FORTE"){
      this.productNameImg = "SINXIGA 5M10MFORTE"
    }

    else if(this.productName === "OBEZITA 60/120 CAP"){
      this.productNameImg = "OBEZITA 60120 CAP"
    }

    else if(this.productName === "ZICLA 60 SR/60SRM"){
      this.productNameImg = "ZICLA_60_SRM"
    }
    else if(this.productName === "CAMDEM-5/10"){
      this.productNameImg = "Camdem-510"
    }
    else if(this.productName === "ESONTIA/ESONTIA D"){
      this.productNameImg = "ESONTIA"
    }

    else if(this.productName === "XIFARIX 400/550"){
      this.productNameImg = "Xifarix 400550"
    }
    
    else if(this.productName === "TELFIRST M 25/50MG"){
      this.productNameImg = "TELFIRST M 2550MG"
    }

    else if(this.productName === "TELFIRST CT 40/6.25 TAB"){
      this.productNameImg = "TELFIRST CT 406.25 TAB"
    }

    else{}

    if(this.productAlsoAvaliable1 === undefined){
      this.alsoImg1 = false
      this.alsoAvaDiv = false
    }
    else if(this.productAlsoAvaliable2 === undefined){
      this.alsoImg2 = false
      this.alsoImg3 = false
    }
    else if(this.productAlsoAvaliable3 === undefined){
      
      this.alsoImg3 = false
    }
    else {}

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
    console.log('this.dose', this.productDose)
  }
  backtoproducts(){
    this.sinsanDiv = false
    this.kaizerDiv = false
    this.citiusDiv = false
    this.subProductsDiv = false;
    this.mainProductsDiv = true;
    
    var doc1: any;
    var doc2: any;
    // if(this.activeKaizer){
    //   doc1 = document.getElementById('kaizerActiveDiv')
    //   console.log(doc1)
    //   doc1.click()
    // }
    // else if(this.activeCitius){
    //   doc2 = document.getElementById('citiusActiveDiv')
    //   console.log(doc2)

    //   doc2.click()
    // }
    // else{}
  }

  activeCheck(event: any){
    this.activeKaizer = false
    this.activeCitius = false
    if(event == 'kaizer'){
      this.activeKaizer = true
    }
    else if(event == 'citius'){
      this.activeCitius = true
    }
    else{}
  }

}
