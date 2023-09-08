// this file contains the queries that will be used in the item request of getAllItems action in useGetWithParams hook



// this query below is the fields that will be returned in the response of the item in the getAllItems action in itemCardsContainer

export const productCardFields = "title,price,priceAfterDiscount,imageCover,ratingsAverage,ratingsQuantity";

export const categoryCardFields = "name,image";

export const brandCardFields = "name,image";



// the returned items limit in itemCardsContainer

export const productCardsLimit = 6;

export const categoryCardsLimit = 6;

export const brandCardsLimit = 6;



// for custom select component

export const customInputFields = "name";

export const customSelectLimit = 10;