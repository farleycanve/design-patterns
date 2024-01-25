// Define the strategy interface
interface DiscountStrategy {
  applyDiscount(price: number): number;
}

// Concrete strategy 1: No discount
class NoDiscountStrategy implements DiscountStrategy {
  applyDiscount(price: number): number {
    return price;
  }
}

// Concrete strategy 2: Percentage discount
class PercentageDiscountStrategy implements DiscountStrategy {
  private percentage: number;

  constructor(percentage: number) {
    this.percentage = percentage;
  }

  applyDiscount(price: number): number {
    const discountAmount = (this.percentage / 100) * price;
    return price - discountAmount;
  }
}

// Context class that uses a strategy
class Advertiser {
  private discountStrategy: DiscountStrategy;

  constructor(discountStrategy: DiscountStrategy) {
    this.discountStrategy = discountStrategy;
  }

  setDiscountStrategy(discountStrategy: DiscountStrategy): void {
    this.discountStrategy = discountStrategy;
  }

  calculateDiscountedPrice(originalPrice: number): number {
    return this.discountStrategy.applyDiscount(originalPrice);
  }
}

// Example usage
const ad = new Advertiser(new NoDiscountStrategy());

let originalPrice = 100;
let discountedPrice = ad.calculateDiscountedPrice(originalPrice);
console.log(
  `Original Price: ${originalPrice}, Discounted Price: ${discountedPrice}`
);

// Change the discount strategy dynamically
ad.setDiscountStrategy(new PercentageDiscountStrategy(20));
discountedPrice = ad.calculateDiscountedPrice(originalPrice);
console.log(
  `Original Price: ${originalPrice}, Discounted Price: ${discountedPrice}`
);
