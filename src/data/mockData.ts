import { Product, Voucher, Order } from '../types';

export const INITIAL_PRODUCTS: Product[] = [
  // ==================== MEN'S CLOTHING ====================
  {
    id: 'kf-cloth-1',
    title: 'Executive Royal Black Embroidered Cotton Panjabi (রয়্যাল ব্ল্যাক গোল্ড এমব্রয়ডারি পাঞ্জাবি)',
    category: "Men's Clothing",
    brand: 'Khan Luxe',
    price: 3450,
    originalPrice: 4800,
    stock: 28,
    rating: 4.9,
    reviewCount: 384,
    image: '/src/assets/images/product_luxury_panjabi_1794121073630.jpg',
    description: '100% fine Egyptian combed cotton with intricate gold zardozi needlework along collar and placket. Specially tailored for Eid, weddings, and executive gatherings.',
    specs: {
      'Fabric': '100% Combed Egyptian Cotton',
      'Embroidery': 'Zardozi Gold Needlework Placket',
      'Cut': 'Tailored Slim-Comfort Cut',
      'Occasion': 'Festive & Executive Wear',
      'Care': 'Dry Clean or Gentle Hand Wash'
    },
    isFlashSale: true,
    isDarazMall: true,
    freeDelivery: true,
    variants: [
      { name: 'Size', options: ['40 (M)', '42 (L)', '44 (XL)', '46 (XXL)'] },
      { name: 'Color', options: ['Royal Jet Black', 'Imperial Navy'] }
    ],
    reviews: [
      {
        id: 'r1',
        author: 'Farhan Kabir',
        rating: 5,
        date: '2025-03-01',
        comment: 'The fabric quality is unreal. The gold thread embroidery looks so elegant in person. 10/10 recommended!',
        verified: true
      },
      {
        id: 'r2',
        author: 'Saiful Islam',
        rating: 5,
        date: '2025-02-24',
        comment: 'Received within 24 hours in Dhaka. Perfect fitting and premium packaging.',
        verified: true
      }
    ]
  },
  {
    id: 'kf-cloth-2',
    title: 'Mercerized Pique Cotton Luxury Polo Shirt with Gold Tipping (মার্সারাইজড লাক্সারি পোলো)',
    category: "Men's Clothing",
    brand: 'Khan Signature',
    price: 1850,
    originalPrice: 2600,
    stock: 45,
    rating: 4.8,
    reviewCount: 220,
    image: '/src/assets/images/product_mercerized_polo_1794121073585.jpg',
    description: 'Double-mercerized 240 GSM organic pique cotton with subtle champagne gold collar tip and sleeve trim. Breathable, anti-pilling, and impeccably sharp.',
    specs: {
      'Weight': '240 GSM Heavy Pique Cotton',
      'Finish': 'Double-Mercerized Silk Luster',
      'Collar': 'Ribbed Flat-Knit with Gold Tipped Trim',
      'Buttons': 'Engraved Mother-of-Pearl Shell'
    },
    isFlashSale: true,
    isDarazMall: true,
    freeDelivery: true,
    variants: [
      { name: 'Size', options: ['S', 'M', 'L', 'XL', 'XXL'] },
      { name: 'Color', options: ['Onyx Black & Gold', 'Chalk White & Gold', 'Midnight Navy'] }
    ]
  },
  {
    id: 'kf-cloth-3',
    title: 'French Terry 450 GSM Heavyweight Oversized Hoodie (হেভিওয়েট ফ্রেন্স টেরি হুডি)',
    category: "Men's Clothing",
    brand: 'Khan Streetwear',
    price: 2450,
    originalPrice: 3500,
    stock: 32,
    rating: 4.9,
    reviewCount: 165,
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80',
    description: 'Crafted from 100% heavyweight 450 GSM brushed French Terry cotton. Features relaxed drop shoulders, double-layered architectural hood, and kangaroo pouch.',
    specs: {
      'Weight': '450 GSM Heavyweight French Terry',
      'Fit': 'Modern Boxy Oversized',
      'Stitching': 'Reinforced Flatlock Seams',
      'Origin': 'Garment Washed for Zero Shrinkage'
    },
    isFlashSale: false,
    isDarazMall: true,
    freeDelivery: true,
    variants: [
      { name: 'Size', options: ['M (Oversized)', 'L (Oversized)', 'XL (Oversized)'] },
      { name: 'Color', options: ['Washed Charcoal', 'Raw Sand', 'Pitch Black'] }
    ]
  },
  {
    id: 'kf-cloth-4',
    title: 'Executive 100% Egyptian Giza Cotton Formal Shirt (মিশরীয় গিজা কটন ফরমাল শার্ট)',
    category: "Men's Clothing",
    brand: 'Richman Exclusive',
    price: 2250,
    originalPrice: 2900,
    stock: 35,
    rating: 4.8,
    reviewCount: 190,
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80',
    description: 'Woven from authentic Egyptian Giza extra-long staple cotton with liquid ammonia wrinkle-free finish. Cutaway Italian collar for boardrooms and galas.',
    specs: {
      'Yarn': '100% Long-Staple Egyptian Giza Cotton',
      'Collar': 'Modern Cutaway Italian Collar',
      'Finish': 'Easy-Iron Wrinkle Free Treatment',
      'Fit': 'Bespoke Tailored Slim Fit'
    },
    isFlashSale: false,
    isDarazMall: true,
    freeDelivery: true,
    variants: [
      { name: 'Collar Size', options: ['15 (M)', '15.5 (L)', '16 (XL)', '16.5 (XXL)'] },
      { name: 'Color', options: ['Crisp White', 'Sky Blue', 'French Lilac'] }
    ]
  },
  {
    id: 'kf-cloth-5',
    title: 'Japanese Red-Line Selvedge Raw Denim Jeans (জাপানিজ রেড-লাইন সেলভেজ ডেনিম)',
    category: "Men's Clothing",
    brand: 'Artisan Denim',
    price: 2890,
    originalPrice: 3800,
    stock: 40,
    rating: 4.8,
    reviewCount: 175,
    image: 'https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=800&q=80',
    description: '13.5 oz authentic shuttle-loom woven red-line selvedge raw denim. Develops custom personalized honeycombs and whiskers as you wear it over time.',
    specs: {
      'Weight': '13.5 oz Raw Rigid Denim',
      'Looms': 'Vintage Shuttle Loom Woven Red Selvedge ID',
      'Hardware': 'Solid Brass Buttons & Rivets',
      'Fit': 'Classic Slim-Straight Leg'
    },
    isFlashSale: false,
    isDarazMall: true,
    freeDelivery: false,
    variants: [
      { name: 'Waist Size', options: ['30', '32', '34', '36', '38'] },
      { name: 'Inseam', options: ['30 Length', '32 Length'] }
    ]
  },

  // ==================== WOMEN'S FASHION ====================
  {
    id: 'kf-cloth-6',
    title: 'Pure Handcrafted Dhakai Jamdani Saree (ঐতিহ্যবাহী খাঁটি ঢাকai জামদানি শাড়ি - ব্ল্যাক অ্যান্ড গোল্ড)',
    category: "Women's Fashion",
    brand: 'Dhakai Heritage',
    price: 7800,
    originalPrice: 9500,
    stock: 14,
    rating: 5.0,
    reviewCount: 310,
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
    description: 'Masterfully handwoven 84-count fine cotton silk with pure gold zari floral motif (Mayurpankhi Buta). Woven by generational artisans in Demra, Dhaka.',
    specs: {
      'Count': '84 Count Fine Cotton Silk',
      'Length': '12 Haat Full Saree with Blouse Piece',
      'Zari': 'Pure Golden Zari Hand Jacquard Motif',
      'Certification': 'GI Certified Authentic Jamdani'
    },
    isFlashSale: true,
    isDarazMall: true,
    freeDelivery: true,
    variants: [
      { name: 'Color', options: ['Black & Pure Gold Zari', 'Crimson Festive Red', 'Royal Sapphire'] }
    ]
  },
  {
    id: 'kf-cloth-7',
    title: 'Embroidered Luxury Lawn Cotton Three-Piece (লাক্সারি এমব্রয়ডারি লন কটন থ্রি-পিস)',
    category: "Women's Fashion",
    brand: 'Kay Kraft Luxe',
    price: 4650,
    originalPrice: 5800,
    stock: 22,
    rating: 4.8,
    reviewCount: 155,
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80',
    description: 'Bespoke embroidered lawn cotton kameez with scalloped organza hem, paired with structured cotton trousers and digital printed pure silk-chiffon dupatta.',
    specs: {
      'Kameez': '3.0 Yards Embroidered Fine Lawn',
      'Dupatta': '5 Haat Pure Silk-Chiffon Printed Dupatta',
      'Bottom': '2.5 Yards Dyed Soft Cambric Cotton'
    },
    isFlashSale: false,
    isDarazMall: true,
    freeDelivery: true
  },

  // ==================== SMART GADGETS & AUDIO ====================
  {
    id: 'kf-gadget-1',
    title: 'Aura Pro Hybrid ANC Active Noise-Cancelling Wireless Earbuds (অরা প্রো ওয়্যারলেস ইয়ারবাডস)',
    category: 'Audio & Sound',
    brand: 'Aura Sound',
    price: 4850,
    originalPrice: 6900,
    stock: 34,
    rating: 4.9,
    reviewCount: 412,
    image: '/src/assets/images/product_anc_earbuds_1794121089736.jpg',
    description: '45dB adaptive hybrid ANC with dual bio-cellulose 11mm acoustic drivers. Offers 48-hour total battery life in an ultra-luxurious gold-accented obsidian charging case with wireless Qi support.',
    specs: {
      'Active Noise Cancellation': '45dB Hybrid Adaptive ANC',
      'Battery Playtime': '10H Earbuds / 48H with Titanium Case',
      'Bluetooth': 'Bluetooth 5.3 + LDAC Hi-Res Audio Codec',
      'Water Resistance': 'IPX5 Sweat & Water Resistant',
      'Warranty': '1 Year Replacement Warranty'
    },
    isFlashSale: true,
    isDarazMall: true,
    freeDelivery: true,
    variants: [
      { name: 'Color', options: ['Matte Black & Gold Rim', 'Titanium Silver'] }
    ]
  },
  {
    id: 'kf-gadget-2',
    title: 'Apex Titanium Chrono AMOLED Smartwatch with Bluetooth Calling (অ্যাপেক্স টাইটানিয়াম ক্রোনো ওয়াচ)',
    category: 'Watches & Accessories',
    brand: 'Apex Time',
    price: 5950,
    originalPrice: 8500,
    stock: 25,
    rating: 4.9,
    reviewCount: 295,
    image: '/src/assets/images/product_titanium_smartwatch_1794121089127.jpg',
    description: 'Brushed Grade-5 titanium bezel with scratchproof sapphire crystal glass. Features 1.52-inch circular AMOLED 466x466 Always-On display, stainless steel link strap, and precision biometric health sensors.',
    specs: {
      'Casing': 'Grade-5 Brushed Aerospace Titanium',
      'Display': '1.52" AMOLED Retina Display (466x466, 1000 nits)',
      'Calling': 'Hi-Fi Dual Mic Noise Cancelling Calling',
      'Battery': 'Up to 10 Days Standby / Wireless Dock Charger',
      'Waterproof': '5 ATM / 50M Water Resistance'
    },
    isFlashSale: true,
    isDarazMall: true,
    freeDelivery: true,
    variants: [
      { name: 'Strap', options: ['Stainless Steel Links', 'Full Grain Brown Leather', 'Fluoroelastomer Sports'] }
    ]
  },
  {
    id: 'kf-gadget-3',
    title: 'Anker Prime GaN 65W 3-Port Turbo Ultra-Compact Fast Charger (গ্যান ৬৫ ওয়াট ফাস্ট চার্জার)',
    category: 'Chargers & Power',
    brand: 'Anker Prime',
    price: 3250,
    originalPrice: 4500,
    stock: 45,
    rating: 4.9,
    reviewCount: 512,
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80',
    description: 'Next-gen Gallium Nitride III technology powers MacBook, iPad, iPhone 16/15 Pro Max, and Samsung S24 at peak speeds. 53% smaller than standard bricks with dynamic ActiveShield temperature monitoring.',
    specs: {
      'Total Output': '65W Max Power Delivery',
      'Ports': '2x USB-C (PD 3.0), 1x USB-A (QC 4.0)',
      'Architecture': 'GaN III Gallium Nitride Architecture',
      'Safety': 'ActiveShield 2.0 Dynamic Temp Control',
      'Warranty': '18 Months Official Warranty'
    },
    isFlashSale: true,
    isDarazMall: true,
    freeDelivery: true,
    variants: [
      { name: 'Color', options: ['Midnight Black', 'Platinum Silver'] }
    ]
  },
  {
    id: 'kf-gadget-4',
    title: 'Baseus 20,000mAh MagSafe Ultra-Thin Magnetic Wireless Power Bank (ম্যাগসেফ ২০,০০০ mAh পাওয়ার ব্যাংক)',
    category: 'Chargers & Power',
    brand: 'Baseus Prime',
    price: 4200,
    originalPrice: 5600,
    stock: 30,
    rating: 4.8,
    reviewCount: 380,
    image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=800&q=80',
    description: 'Strong N52 neodymium magnetic snap-on wireless power bank with 15W Qi wireless charging and 22.5W bidirectional Type-C fast charge. Features real-time crisp LED percentage readout.',
    specs: {
      'Capacity': '20,000mAh / 74Wh High-Density Polymer',
      'Wireless Output': '15W / 10W / 7.5W MagSafe Magnetic Lock',
      'Wired Output': '22.5W SuperCharge / PD 20W Type-C',
      'Display': 'Integrated Digital LED Percentage Screen',
      'Warranty': '1 Year Replacement Guarantee'
    },
    isFlashSale: true,
    isDarazMall: true,
    freeDelivery: true,
    variants: [
      { name: 'Color', options: ['Titanium Charcoal', 'Arctic Chalk'] }
    ]
  },
  {
    id: 'kf-gadget-5',
    title: 'Vintage T9 Precision Titanium Zero-Gapped Hair & Beard Trimmer (প্রিসিশন টাইটানিয়াম ট্রিমার)',
    category: 'Smart Gadgets',
    brand: 'T9 Pro Luxury',
    price: 1650,
    originalPrice: 2400,
    stock: 50,
    rating: 4.8,
    reviewCount: 340,
    image: 'https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&w=800&q=80',
    description: 'Heavyweight all-metal sculpted bronze body with self-sharpening titanium T-blade. 7,000 RPM high-speed motor for barbershop-sharp fades, beard lines, and crisp edges.',
    specs: {
      'Blade': 'Titanium Alloy Zero-Gapped T-Blade',
      'Motor': '7,000 RPM Pure Copper Core Motor',
      'Battery': '1,200mAh USB-C Rechargeable (180 Mins Runtime)',
      'Attachments': '1.5mm, 2mm, 3mm, 4mm Limit Combs & Oil'
    },
    isFlashSale: false,
    isDarazMall: true,
    freeDelivery: false
  },
  {
    id: 'kf-gadget-6',
    title: 'SoundPulse Studio 360° Waterproof Portable Bluetooth Speaker (সাউন্ডপালস স্টুডিও স্পিকার)',
    category: 'Audio & Sound',
    brand: 'SoundPulse',
    price: 3650,
    originalPrice: 4900,
    stock: 26,
    rating: 4.9,
    reviewCount: 280,
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80',
    description: 'Dual 20W neodymium acoustic drivers with passive punchy bass radiators. IPX7 100% waterproof construction with 18-hour continuous playtime and TWS stereo pairing.',
    specs: {
      'Power Output': '40W Peak (20W x 2 Dual Neodymium Drivers)',
      'Waterproof': 'IPX7 Certified Submersible Waterproof',
      'Playtime': '18 Hours Continuous Playback',
      'Connectivity': 'Bluetooth 5.3, AUX, MicroSD Card'
    },
    isFlashSale: true,
    isDarazMall: true,
    freeDelivery: true,
    variants: [
      { name: 'Color', options: ['Obsidian Black', 'Military Camo', 'Ocean Teal'] }
    ]
  }
];

export const INITIAL_VOUCHERS: Voucher[] = [
  {
    code: 'FASHION10',
    discountType: 'percentage',
    discountValue: 10,
    minSpend: 1500,
    description: '10% OFF on all fashion clothing & smart gadgets above ৳ 1,500',
    isActive: true
  },
  {
    code: 'KHAN500',
    discountType: 'fixed',
    discountValue: 500,
    minSpend: 3500,
    description: 'Flat ৳ 500 OFF on orders above ৳ 3,500',
    isActive: true
  },
  {
    code: 'FREESHIP',
    discountType: 'fixed',
    discountValue: 120,
    minSpend: 1200,
    description: 'Free Courier Delivery across Bangladesh',
    isActive: true
  }
];

export const INITIAL_ORDERS: Order[] = [
  {
    id: 'KF-948210-BD',
    trackingNumber: 'STD-BD-98241029',
    createdAt: '2025-03-01T14:32:00Z',
    status: 'Shipped',
    items: [
      {
        product: INITIAL_PRODUCTS[0],
        quantity: 1,
        selectedVariants: { 'Size': '42 (L)', 'Color': 'Royal Jet Black' },
        priceAtPurchase: 3450
      },
      {
        product: INITIAL_PRODUCTS[7],
        quantity: 1,
        selectedVariants: { 'Color': 'Matte Black & Gold Rim' },
        priceAtPurchase: 4850
      }
    ],
    shippingAddress: {
      fullName: 'Muhammad Tanvir Hasan',
      phone: '01854-774406',
      email: 'tanvir.hasan@gmail.com',
      city: 'Dhaka',
      province: 'Dhaka Division',
      address: 'House #42, Road #7, Dhanmondi',
      landmark: 'Near Dhanmondi Lake',
      addressType: 'Home'
    },
    paymentMethod: 'cod',
    paymentStatus: 'Unpaid (COD)',
    subtotal: 8300,
    discount: 830,
    shippingFee: 0,
    total: 7470,
    appliedVoucher: 'FASHION10',
    carrierName: 'Steadfast Courier',
    estimatedDelivery: 'Tomorrow, by 5:00 PM',
    checkpoints: [
      {
        title: 'Order Confirmed',
        location: 'Khan Fashion Central Portal',
        time: '01 Mar, 02:32 PM',
        description: 'Order confirmed with Cash on Delivery (COD).',
        completed: true
      },
      {
        title: 'Packed & Quality Checked',
        location: 'Khan Fashion Dhaka Warehouse',
        time: '01 Mar, 06:15 PM',
        description: 'Handcrafted items inspected, sealed with luxury garment protection.',
        completed: true
      },
      {
        title: 'Handed Over to Courier',
        location: 'Steadfast Logistics Hub, Dhaka',
        time: '02 Mar, 09:30 AM',
        description: 'Consignment booked under tracking # STD-BD-98241029.',
        completed: true,
        current: true
      },
      {
        title: 'Out for Delivery',
        location: 'Dhanmondi Delivery Hub',
        time: 'Pending',
        description: 'Rider dispatched to deliver your parcel.',
        completed: false
      },
      {
        title: 'Delivered',
        location: 'Customer Address',
        time: 'Pending',
        description: 'Package delivered and cash collected.',
        completed: false
      }
    ]
  }
];
