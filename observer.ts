// Subject: Đối tượng mà các observers quan sát
class NewsAgency {
  private observers: NewsObserver[] = [];
  private news: string = "";

  // Đăng ký observer mới
  addObserver(observer: NewsObserver) {
    this.observers.push(observer);
  }

  // Hủy đăng ký observer
  removeObserver(observer: NewsObserver) {
    this.observers = this.observers.filter((o) => o !== observer);
  }

  // Cập nhật tin tức và thông báo đến tất cả các observers
  setNews(news: string) {
    this.news = news;
    this.notifyObservers();
  }

  // Thông báo đến tất cả observers
  private notifyObservers() {
    this.observers.forEach((observer) => {
      observer.update(this.news);
    });
  }
}

// Observer: Đối tượng quan sát
interface NewsObserver {
  update(news: string): void;
}

// Concrete Observer: Một observer cụ thể
class NewsReader implements NewsObserver {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  // Phương thức được gọi khi có thông báo cập nhật từ subject
  update(news: string) {
    console.log(`${this.name} đang đọc tin tức mới: ${news}`);
  }
}

// Sử dụng mô hình Observer
const newsAgency = new NewsAgency();

const reader1 = new NewsReader("Đọc giả 1");
const reader2 = new NewsReader("Đọc giả 2");

// Đăng ký các đối tượng observer với subject
newsAgency.addObserver(reader1);
newsAgency.addObserver(reader2);

// Cập nhật tin tức và thông báo đến tất cả observers
newsAgency.setNews("Công nghệ mới: AI đang thay đổi thế giới!");
