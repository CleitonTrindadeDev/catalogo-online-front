export interface ProductData {
  data: Product[];
}

export interface Product {
  id: number;
  name: string;
  slug?: string;
  description?: string;
  price: number;
  images?: string[];
  category?: string;
  stock?: number;

}
