export const DEFAULT_CATEGORIES: string[] = [
  "Men's Clothing",
  "Women's Fashion",
  'Smart Gadgets',
  'Audio & Sound',
  'Watches & Accessories',
  'Chargers & Power'
];

export type ProductCategory = 
  | 'All'
  | "Men's Clothing"
  | "Women's Fashion"
  | 'Smart Gadgets'
  | 'Audio & Sound'
  | 'Watches & Accessories'
  | 'Chargers & Power'
  | (string & {});

export const CATEGORIES: ProductCategory[] = [
  'All',
  ...DEFAULT_CATEGORIES
];

export interface ProductReview {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export interface Product {
  id: string;
  title: string;
  category: ProductCategory;
  brand: string;
  price: number;
  originalPrice: number;
  stock: number;
  rating: number;
  reviewCount: number;
  image: string;
  additionalImages?: string[];
  description: string;
  specs: Record<string, string>;
  isFlashSale?: boolean;
  isDarazMall?: boolean;
  freeDelivery?: boolean;
  variants?: {
    name: string; // e.g. "Size", "Color" or "Model"
    options: string[];
  }[];
  reviews?: ProductReview[];
  createdAt?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedVariants?: Record<string, string>;
}

export interface Voucher {
  code: string;
  discountType: 'percentage' | 'fixed';
  discountValue: number;
  minSpend: number;
  description: string;
  isActive: boolean;
}

export type OrderStatus = 
  | 'Pending'
  | 'Confirmed'
  | 'Processing'
  | 'Shipped'
  | 'Out for Delivery'
  | 'Delivered'
  | 'Cancelled';

export type PaymentMethod = 'card' | 'easypaisa' | 'jazzcash' | 'cod' | 'bank';

export interface ShippingAddress {
  fullName: string;
  phone: string;
  email?: string;
  city: string;
  province?: string;
  address: string;
  landmark?: string;
  customerNote?: string;
  addressType?: 'Home' | 'Office';
}

export interface TrackingCheckpoint {
  title: string;
  location: string;
  time: string;
  description: string;
  completed: boolean;
  current?: boolean;
}

export interface Order {
  id: string;
  trackingNumber: string;
  createdAt: string;
  status: OrderStatus;
  items: {
    product: Product;
    quantity: number;
    selectedVariants?: Record<string, string>;
    priceAtPurchase: number;
  }[];
  shippingAddress: ShippingAddress;
  paymentMethod: PaymentMethod;
  paymentStatus: 'Paid' | 'Pending Verification' | 'Unpaid (COD)';
  subtotal: number;
  discount: number;
  shippingFee: number;
  total: number;
  appliedVoucher?: string;
  carrierName: string;
  estimatedDelivery: string;
  customerNote?: string;
  checkpoints: TrackingCheckpoint[];
}

export interface AnalyticsData {
  totalVisits: number;
  uniqueVisitors: number;
  lastVisitAt?: string;
  historicalDeliveredSales?: number;
  historicalDeliveredCount?: number;
}

export interface StoreConfig {
  storeName: string;
  phone: string;
  about: string;
  adminPassword?: string;
  announcementText?: string;
  announcementEnabled?: boolean;
  seoTitle?: string;
  seoDescription?: string;
  updatedAt?: string;
}

export const DEFAULT_STORE_CONFIG: StoreConfig = {
  storeName: 'KHAN FASHION',
  phone: '01854774406',
  about: "Bangladesh's premier luxury destination for bespoke clothing, executive Panjabi, and modern smart gadgets.",
  adminPassword: 'ESA006##',
  announcementText: '🔥 KHAN FASHION স্পেশাল অফার: সকল কালেকশনে ১০% ইনস্ট্যান্ট ডিসকাউন্ট! কোড: FASHION10 | সারা দেশে ক্যাশ অন ডেলিভারি',
  announcementEnabled: true,
  seoTitle: "KHAN FASHION | Premium Clothing & Smart Gadgets Bangladesh",
  seoDescription: "প্রিমিয়াম পোশাক, পাঞ্জাবি, পোলো এবং আধুনিক ইলেকট্রনিক গ্যাজেট · ক্যাশ অন ডেলিভারি · লাইভ কুরিয়ার ট্র্যাকিং."
};
