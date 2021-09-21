export class Item {
  itemId: number;
  sellerId: number;
  sellerEmail: string;
  price: number;
  itemName: string;
  imageUrl: string;

  constructor(itemId: number, sellerId: number, sellerEmail: string, price: number, itemName: string, imageUrl: string) {
    this.itemId = itemId;
    this.sellerId = sellerId;
    this.sellerEmail = sellerEmail;
    this.price = price;
    this.itemName = itemName;
    this.imageUrl = imageUrl;
  }
}
