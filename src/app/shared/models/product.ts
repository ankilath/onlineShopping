export interface IProduct {
  id: number;
  name: string;
  description: string;
  defaultImage: string;
  images: string[];
  price: number;
  discount: number;
};

export interface IProductQty {
  id: number;
  qty: number;
  name: string;
  price: number;
}
