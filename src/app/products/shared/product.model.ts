export class Product {
  constructor(
    public id: number,
    public name: string,
    public description?: string,
    public category?: string,
    public code?: string,
    public product_type?: boolean,
    public measure?: string,
    public min?: number,
    public med?: number,
    public max?: number,
    public location?: string,
    public status?: boolean
  ){}
}