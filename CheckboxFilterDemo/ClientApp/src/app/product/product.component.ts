import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-multi-checkbox',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  //Categories and product list
  ProductData: any = [];
  // List to filter
  DisplayProductList: any = [];

  constructor(private ProductService: ProductService) {
  }

  ngOnInit() {
    this.GetProductData();
  }

  GetProductData() {
    this.ProductService.GetProductData()
      .subscribe(
        data => {
          this.ProductData = data;
          this.DisplayProductList = this.ProductData.MobileList;
        },
        error => {

        });
  }

  //This method will be called whenever a checkbox is selected
  OnChange(event: any) {
    //Emptying current product list
    this.DisplayProductList = [];

    //We are assigning the selected brand products to the product list and if no brand is selected nothing happens
    for (var i = 0; i < this.selectedBrand.length; i++) {
      var lst = this.ProductData.MobileList.filter(x => x.BrandName == this.selectedBrand[i].BrandName);
      for (var j = 0; j < lst.length; j++) {
        this.DisplayProductList.push(lst[j]);
      }
    }

    //We are assigning selected OS product to the product list
    //If any Brand was selected then we are filtering the list which was filtered in brand filtering, else we are filtering the original list
    if (this.selectedBrand.length > 0) {
      if (this.selectedOS.length > 0) {
        var tempProductlst = this.DisplayProductList;
        this.DisplayProductList = [];
        for (var i = 0; i < this.selectedOS.length; i++) {
          //Filtering the same list which was filtered in brand list
          var lst = tempProductlst.filter(x => x.OSName == this.selectedOS[i].OSName);
          for (var j = 0; j < lst.length; j++) {
            this.DisplayProductList.push(lst[j]);
          }
        }
      }
    }
    else {
      for (var i = 0; i < this.selectedOS.length; i++) {
        //filtering the original product list
        var lst = this.ProductData.MobileList.filter(x => x.OSName == this.selectedOS[i].OSName);
        for (var j = 0; j < lst.length; j++) {
          this.DisplayProductList.push(lst[j]);
        }
      }
    }

    //We are assigning selected Network products to the product list
    //If any brand or OS is selected then we are filtering the same list filtered there, else we are filtering from original product list
    if (this.selectedBrand.length > 0 || this.selectedOS.length > 0) {
      if (this.selectedNetwork.length > 0) {
        var tempProductlst = this.DisplayProductList;
        this.DisplayProductList = [];
        for (var i = 0; i < this.selectedNetwork.length; i++) {
          //filtering from the same list filtered in Brand and OS
          var lst = tempProductlst.filter(x => x.NetworkType == this.selectedNetwork[i].NetworkType);
          for (var j = 0; j < lst.length; j++) {
            this.DisplayProductList.push(lst[j]);
          }
        }
      }
    }
    else {
      for (var i = 0; i < this.selectedNetwork.length; i++) {
        //filtering from original product list
        var lst = this.ProductData.MobileList.filter(x => x.NetworkType == this.selectedNetwork[i].NetworkType);
        for (var j = 0; j < lst.length; j++) {
          this.DisplayProductList.push(lst[j]);
        }
      }
    }

    //If no checkbox is selected assign original product list to display product list
    if (this.selectedBrand.length == 0 && this.selectedOS.length == 0 && this.selectedNetwork.length == 0) {
      this.DisplayProductList = this.ProductData.MobileList;
    }
  }

  get selectedBrand() {
    //Get all the selected brands
    return this.ProductData.Brands.filter(opt => opt.Checked)
  }

  get selectedOS() {
    //Get all the selected Operating systems
    return this.ProductData.OperatingSystems.filter(opt => opt.Checked)
  }

  get selectedNetwork() {
    //Get all the selected networks
    return this.ProductData.NetworkTypes.filter(opt => opt.Checked)
  }
}
