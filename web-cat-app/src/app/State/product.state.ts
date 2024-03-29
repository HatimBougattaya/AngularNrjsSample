export enum ProductActionsTypes{
  GET_ALL_PRODUCTS="[Product] Get All products",
  GET_SELECTED_PRODUCTS="[Product] Get Selected products",
  GET_AVAILABLE_PRODUCTS="[Product] Get Available products",
  SEARCH_PRODUCTS="[Product] Get Search products",
  NEW_PRODUCTS="[Product] Get New products",
  SELECT_PRODUCT="[Product] Select product",
  EDIT_PRODUCT="[Product] Edit product",
  DELETE_PRODUCT="\"[Product] Delete product",
  PRODUCT_ADDED="[Product] product added",
  PRODUCT_UPDATED="[Product]  product update",


}

export interface ActionEvent{
  type:ProductActionsTypes,
  payload?:any
}
export enum DataStateEnum{
  LOADING,
  LOADED,
  ERROR

}
export interface AppDataState<T> {
  dataState: DataStateEnum;
  data?: T,
  errorMessage?:string
}
