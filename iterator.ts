// Step 1: Iterator Interface
interface ProfileIterator {
  hasNext(): boolean;
  next(): Profile;
}

// Step 2: Concrete Iterator for LinkedIn
class LinkedInIterator implements ProfileIterator {
  private profiles: Profile[] = [];
  private currentPosition: number = 0;

  constructor(profiles: Profile[]) {
    this.profiles = profiles;
  }

  hasNext(): boolean {
    return this.currentPosition < this.profiles.length;
  }

  next(): Profile {
    if (this.hasNext()) {
      return this.profiles[this.currentPosition++];
    }
    return null;
  }
}

// Step 3: Concrete Iterator for Facebook
class FacebookIterator implements ProfileIterator {
  private profiles: Profile[] = [];
  private currentPosition: number = 0;

  constructor(profiles: Profile[]) {
    this.profiles = profiles;
  }

  hasNext(): boolean {
    return this.currentPosition < this.profiles.length;
  }

  next(): Profile {
    if (this.hasNext()) {
      return this.profiles[this.currentPosition++];
    }
    return null;
  }
}

// Step 4: Aggregate Interface
interface SocialMedia {
  createIterator(): ProfileIterator;
}

// Step 5: Concrete Aggregate for LinkedIn
class LinkedIn implements SocialMedia {
  private profiles: Profile[] = [];

  addProfile(profile: Profile): void {
    this.profiles.push(profile);
  }

  createIterator(): ProfileIterator {
    return new LinkedInIterator(this.profiles);
  }
}

// Step 6: Concrete Aggregate for Facebook
class Facebook implements SocialMedia {
  private profiles: Profile[] = [];

  addProfile(profile: Profile): void {
    this.profiles.push(profile);
  }

  createIterator(): ProfileIterator {
    return new FacebookIterator(this.profiles);
  }
}

// Step 7: Profile class
class Profile {
  constructor(public name: string, public id: number) {}
}

// Client Code
const linkedIn = new LinkedIn();
linkedIn.addProfile(new Profile("John Doe", 1));
linkedIn.addProfile(new Profile("Jane Doe", 2));

const facebook = new Facebook();
facebook.addProfile(new Profile("Mark Smith", 3));
facebook.addProfile(new Profile("Alice Johnson", 4));

function printProfiles(iterator: ProfileIterator): void {
  while (iterator.hasNext()) {
    const profile = iterator.next();
    console.log(`Name: ${profile.name}, ID: ${profile.id}`);
  }
}

console.log("LinkedIn Profiles:");
printProfiles(linkedIn.createIterator());

console.log("\nFacebook Profiles:");
printProfiles(facebook.createIterator());

//example 2 ==============================================
// Định nghĩa interface cho Iterator
interface Iterator<T> {
  hasNext(): boolean;
  next(): T;
}

// Định nghĩa interface cho Aggregate (danh sách sản phẩm)
interface ProductAggregate {
  createIterator(): Iterator<Product>;
}

// Định nghĩa lớp cụ thể cho sản phẩm
class Product {
  constructor(private name: string, private category: string) {}

  getName(): string {
    return this.name;
  }

  getCategory(): string {
    return this.category;
  }
}

// Định nghĩa lớp cụ thể cho danh sách sản phẩm
class ProductList implements ProductAggregate {
  private products: Product[] = [];

  addProduct(product: Product): void {
    this.products.push(product);
  }

  createIterator(): Iterator<Product> {
    return new ProductIterator(this.products);
  }
}

// Định nghĩa lớp cụ thể cho Iterator
class ProductIterator implements Iterator<Product> {
  private index: number = 0;

  constructor(private products: Product[]) {}

  hasNext(): boolean {
    return this.index < this.products.length;
  }

  next(): Product {
    return this.products[this.index++];
  }
}

// Sử dụng mẫu thiết kế Iterator
const productList = new ProductList();
productList.addProduct(new Product("Áo Polo", "Quần Áo"));
productList.addProduct(new Product("Điện thoại di động", "Điện Tử"));
productList.addProduct(new Product("Ổn áp lioa", "Đồ Gia Dụng"));

const productIterator = productList.createIterator();

while (productIterator.hasNext()) {
  const product = productIterator.next();
  console.log(
    `Sản phẩm: ${product.getName()} - Danh mục: ${product.getCategory()}`
  );
}
