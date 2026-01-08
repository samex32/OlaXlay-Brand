
import { Product, CollectionCategory } from './types';

export const PRODUCTS: Product[] = [
  // 1. TRADITION & CULTURAL DRESSES (12 items)
  {
    id: 't1',
    name: 'Ozo Heritage Agbada',
    category: CollectionCategory.TRADITION,
    price: 450000,
    images: ['https://images.unsplash.com/photo-1589156226687-448abd39aff0?q=80&w=1200', 'https://images.unsplash.com/photo-1566206091558-7f218b696731?q=80&w=1200'],
    description: 'A grand four-piece Agbada set in heavy hand-woven Aso-Oke, featuring intricate traditional embroidery.'
  },
  {
    id: 't2',
    name: 'Bini Coral Queen Set',
    category: CollectionCategory.TRADITION,
    price: 850000,
    images: ['https://images.unsplash.com/photo-1574297500578-afae5b32d1dd?q=80&w=1200', 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200'],
    description: 'A regal ensemble inspired by the Benin Kingdom, adorned with hand-strung coral beads and silk wrap.'
  },
  {
    id: 't3',
    name: 'Iro & Buba Lace Edit',
    category: CollectionCategory.TRADITION,
    price: 320000,
    images: ['https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=1200', 'https://images.unsplash.com/photo-1596462502278-27bfad45f1f6?q=80&w=1200'],
    description: 'Classic Yoruba silhouette reimagined in fine cord lace with a pleated Gele head-tie.'
  },
  {
    id: 't4',
    name: 'Calabar Copper Column',
    category: CollectionCategory.TRADITION,
    price: 280000,
    images: ['https://images.unsplash.com/photo-1589156206699-12174474934a?q=80&w=1200', 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=1200'],
    description: 'Efik-inspired traditional gown with tiered ruffles and copper-toned embellishments.'
  },
  {
    id: 't5',
    name: 'Fulani Nomad Wrapper',
    category: CollectionCategory.TRADITION,
    price: 195000,
    images: ['https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200', 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1200'],
    description: 'Hand-woven blue and white striped cotton wrapper set with traditional thread-work.'
  },
  {
    id: 't6',
    name: 'Zaria Gold Kaftan',
    category: CollectionCategory.TRADITION,
    price: 340000,
    images: ['https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?q=80&w=1200', 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1200'],
    description: 'An expansive Northern-style Kaftan with metallic gold embroidery across the chest and cuffs.'
  },
  {
    id: 't7',
    name: 'Itsekiri Silk Wrapper',
    category: CollectionCategory.TRADITION,
    price: 260000,
    images: ['https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200', 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1200'],
    description: 'Luxury silk wrapper set in vibrant yellow, featuring traditional George-fabric motifs.'
  },
  {
    id: 't8',
    name: 'Igbo Maiden Lace',
    category: CollectionCategory.TRADITION,
    price: 210000,
    images: ['https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1200', 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200'],
    description: 'A fitted lace blouse and double wrapper set, perfect for traditional matrimonial rites.'
  },
  {
    id: 't9',
    name: 'Tiv Iconic Stripe',
    category: CollectionCategory.TRADITION,
    price: 175000,
    images: ['https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=1200', 'https://images.unsplash.com/photo-1550630993-c3686866f814?q=80&w=1200'],
    description: 'Premium Anger fabric tailored into a modern cultural dress for the sophisticated woman.'
  },
  {
    id: 't10',
    name: 'Akwa Ibom Onyx Wrapper',
    category: CollectionCategory.TRADITION,
    price: 295000,
    images: ['https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200', 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=1200'],
    description: 'Deep black velvet wrapper with silver-threaded embroidery, a staple of Niger Delta finery.'
  },
  {
    id: 't11',
    name: 'Ndebele Print Column',
    category: CollectionCategory.TRADITION,
    price: 240000,
    images: ['https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200', 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200'],
    description: 'Geometric print dress honoring Pan-African traditional patterns with a Nigerian tailoring edge.'
  },
  {
    id: 't12',
    name: 'Royal Oyo Sanyan',
    category: CollectionCategory.TRADITION,
    price: 550000,
    images: ['https://images.unsplash.com/photo-1534126511673-b6899657816a?q=80&w=1200', 'https://images.unsplash.com/photo-1534126416832-a88fdf2911c2?q=80&w=1200'],
    description: 'The highest grade of Aso-Oke, naturally dyed and woven for heritage ceremonies.'
  },

  // 2. MODERN INDIGENOUS FUSION (12 items)
  {
    id: 'f1',
    name: 'Adire Tech-Trench',
    category: CollectionCategory.FUSION,
    price: 210000,
    images: ['https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1200', 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1200'],
    description: 'Traditional indigo Adire dye applied to a structured, modern trench coat silhouette.'
  },
  {
    id: 'f2',
    name: 'Aso-Oke Biker Jacket',
    category: CollectionCategory.FUSION,
    price: 320000,
    images: ['https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1200', 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1200'],
    description: 'Hand-woven heavy Aso-Oke fabric transformed into a sharp, asymmetrical biker jacket.'
  },
  {
    id: 'f3',
    name: 'Ankara Utility Rig',
    category: CollectionCategory.FUSION,
    price: 185000,
    images: ['https://images.unsplash.com/photo-1529139513076-2401ad98c8f3?q=80&w=1200', 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=1200'],
    description: 'Modern tactical vest featuring premium Ankara prints and multiple oversized utility pockets.'
  },
  {
    id: 'f4',
    name: 'Kente Kimono Robe',
    category: CollectionCategory.FUSION,
    price: 245000,
    images: ['https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200', 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200'],
    description: 'A flowing floor-length kimono crafted with indigenous weaving and contemporary drape.'
  },
  {
    id: 'f5',
    name: 'Cyber-Yoruba Corset',
    category: CollectionCategory.FUSION,
    price: 155000,
    images: ['https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1200', 'https://images.unsplash.com/photo-1512446813985-4a0eb17aee20?q=80&w=1200'],
    description: 'Fitted structural corset featuring digital-print Adire patterns and metallic boning.'
  },
  {
    id: 'f6',
    name: 'Indigenous Bomber 2.0',
    category: CollectionCategory.FUSION,
    price: 275000,
    images: ['https://images.unsplash.com/photo-1582552938357-32b906df40cb?q=80&w=1200', 'https://images.unsplash.com/photo-1475180098004-ca77a66827be?q=80&w=1200'],
    description: 'Classic flight jacket silhouette reimagined with hand-embroidered tribal motifs.'
  },
  {
    id: 'f7',
    name: 'Neo-Agbada Jumpsuit',
    category: CollectionCategory.FUSION,
    price: 310000,
    images: ['https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200', 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=1200'],
    description: 'The volume of a traditional Agbada refined into a sleek, wide-legged jumpsuit.'
  },
  {
    id: 'f8',
    name: 'Tribal Denim Duster',
    category: CollectionCategory.FUSION,
    price: 225000,
    images: ['https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1200', 'https://images.unsplash.com/photo-1544022613-e87ce7526ed1?q=80&w=1200'],
    description: 'Oversized denim coat with laser-etched Nigerian patterns and silk lining.'
  },
  {
    id: 'f9',
    name: 'Adire Biker Trousers',
    category: CollectionCategory.FUSION,
    price: 145000,
    images: ['https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=1200', 'https://images.unsplash.com/photo-1519241047957-be31d7379a5d?q=80&w=1200'],
    description: 'Tactical cargo trousers with hand-dyed Adire panels for the urban nomad.'
  },
  {
    id: 'f10',
    name: 'Ancestral Hooded Cape',
    category: CollectionCategory.FUSION,
    price: 380000,
    images: ['https://images.unsplash.com/photo-1520639889313-7efd3c630014?q=80&w=1200', 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200'],
    description: 'Dramatic velvet cape with a large hood and gold-foil traditional printing.'
  },
  {
    id: 'f11',
    name: 'Lagos Skyline Kimono',
    category: CollectionCategory.FUSION,
    price: 195000,
    images: ['https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1200', 'https://images.unsplash.com/photo-1533512930330-4ac257c86793?q=80&w=1200'],
    description: 'A fusion of Japanese form and Nigerian color, featuring an abstract Eko skyline.'
  },
  {
    id: 'f12',
    name: 'Kano Leather Corset',
    category: CollectionCategory.FUSION,
    price: 265000,
    images: ['https://images.unsplash.com/photo-1576871337622-983ef3c89e80?q=80&w=1200', 'https://images.unsplash.com/photo-1556048219-bb6978360b84?q=80&w=1200'],
    description: 'Fine Northern leather sculpted into a modern corset with traditional brass hardware.'
  },

  // 3. CORPORATE & PROFESSIONAL GOWNS (12 items)
  {
    id: 'p1',
    name: 'Maitama Executive Sheath',
    category: CollectionCategory.CORPORATE,
    price: 125000,
    images: ['https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1200', 'https://images.unsplash.com/photo-1534126511673-b6899657816a?q=80&w=1200'],
    description: 'A sharp, tailored sheath dress in navy Italian wool with subtle Aso-Oke piping.'
  },
  {
    id: 'p2',
    name: 'Director Column Dress',
    category: CollectionCategory.CORPORATE,
    price: 145000,
    images: ['https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?q=80&w=1200', 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1200'],
    description: 'Power-dressing silhouette with architectural shoulders and a professional knee-length finish.'
  },
  {
    id: 'p3',
    name: 'Boardroom Wrap Gown',
    category: CollectionCategory.CORPORATE,
    price: 110000,
    images: ['https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200', 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1200'],
    description: 'Sophisticated wrap dress in charcoal grey with a modest yet stylish neckline.'
  },
  {
    id: 'p4',
    name: 'Lekki Lounge Professional',
    category: CollectionCategory.CORPORATE,
    price: 135000,
    images: ['https://images.unsplash.com/photo-1589156226687-448abd39aff0?q=80&w=1200', 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=1200'],
    description: 'Midi-length professional gown with a unique pleated collar for subtle flair.'
  },
  {
    id: 'p5',
    name: 'Capital City Blazer-Dress',
    category: CollectionCategory.CORPORATE,
    price: 165000,
    images: ['https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200', 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200'],
    description: 'Double-breasted blazer dress with gold hardware and a structured waist.'
  },
  {
    id: 'p6',
    name: 'Enugu Emerald Shift',
    category: CollectionCategory.CORPORATE,
    price: 95000,
    images: ['https://images.unsplash.com/photo-1574297500578-afae5b32d1dd?q=80&w=1200', 'https://images.unsplash.com/photo-1550630993-c3686866f814?q=80&w=1200'],
    description: 'Minimalist shift dress in deep forest green, designed for comfort during the workday.'
  },
  {
    id: 'p7',
    name: 'Victoria Island Vest-Gown',
    category: CollectionCategory.CORPORATE,
    price: 155000,
    images: ['https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1200', 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200'],
    description: 'A sleeveless professional gown that mimics a tailored longline vest.'
  },
  {
    id: 'p8',
    name: 'Abuja Admin Pleats',
    category: CollectionCategory.CORPORATE,
    price: 120000,
    images: ['https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=1200', 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200'],
    description: 'Pleated skirt professional gown in a neutral beige with black contrasting belt.'
  },
  {
    id: 'p9',
    name: 'Zenith Silk Professional',
    category: CollectionCategory.CORPORATE,
    price: 185000,
    images: ['https://images.unsplash.com/photo-1534126416832-a88fdf2911c2?q=80&w=1200', 'https://images.unsplash.com/photo-1589156206699-12174474934a?q=80&w=1200'],
    description: 'High-grade silk gown with a modest funnel neck and buttoned cuffs.'
  },
  {
    id: 'p10',
    name: 'Gidi Grace Gown',
    category: CollectionCategory.CORPORATE,
    price: 140000,
    images: ['https://images.unsplash.com/photo-1596462502278-27bfad45f1f6?q=80&w=1200', 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200'],
    description: 'A structured A-line dress in navy blue with subtle hand-finished embroidery on the lapels.'
  },
  {
    id: 'p11',
    name: 'Heritage Houndstooth',
    category: CollectionCategory.CORPORATE,
    price: 130000,
    images: ['https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=1200', 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200'],
    description: 'Professional houndstooth pattern gown with a modern African twist on the collar.'
  },
  {
    id: 'p12',
    name: 'Atelier Work Gown',
    category: CollectionCategory.CORPORATE,
    price: 175000,
    images: ['https://images.unsplash.com/photo-1534126511673-b6899657816a?q=80&w=1200', 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1200'],
    description: 'Bespoke professional silhouette designed for the highest level of executive engagement.'
  },

  // 4. CASUAL & EVERYDAY WEAR (12 items)
  {
    id: 'ca1',
    name: 'Mainland Mesh Tee',
    category: CollectionCategory.CASUAL,
    price: 45000,
    images: ['https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1200', 'https://images.unsplash.com/photo-1533512930330-4ac257c86793?q=80&w=1200'],
    description: 'Breathable, luxury mesh tee with the iconic Olaxlay insignia.'
  },
  {
    id: 'ca2',
    name: 'Eko Weekend Joggers',
    category: CollectionCategory.CASUAL,
    price: 65000,
    images: ['https://images.unsplash.com/photo-1512446813985-4a0eb17aee20?q=80&w=1200', 'https://images.unsplash.com/photo-1556048219-bb6978360b84?q=80&w=1200'],
    description: 'Heavy fleece joggers with tapered fit and reflective piping.'
  },
  {
    id: 'ca3',
    name: 'Adire Easy-Dress',
    category: CollectionCategory.CASUAL,
    price: 85000,
    images: ['https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200', 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1200'],
    description: 'Loose-fitting casual dress featuring hand-dyed indigo patterns for everyday comfort.'
  },
  {
    id: 'ca4',
    name: 'Mainland Pullover',
    category: CollectionCategory.CASUAL,
    price: 55000,
    images: ['https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1200', 'https://images.unsplash.com/photo-1520639889313-7efd3c630014?q=80&w=1200'],
    description: 'Classic oversized pullover with embroidered Lagos mainland typography.'
  },
  {
    id: 'ca5',
    name: 'Surulere Denim Skirt',
    category: CollectionCategory.CASUAL,
    price: 75000,
    images: ['https://images.unsplash.com/photo-1582552938357-32b906df40cb?q=80&w=1200', 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=1200'],
    description: 'Premium raw denim midi skirt with utility belt loops and heavy-duty stitching.'
  },
  {
    id: 'ca6',
    name: 'Island Cargo Shorts',
    category: CollectionCategory.CASUAL,
    price: 50000,
    images: ['https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=1200', 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200'],
    description: 'Lightweight cargo shorts designed for the humid Lagos climate.'
  },
  {
    id: 'ca7',
    name: 'Heritage Ribbed Tank',
    category: CollectionCategory.CASUAL,
    price: 35000,
    images: ['https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200', 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1200'],
    description: 'Fine cotton ribbed tank with a discrete gold-toned hardware tag.'
  },
  {
    id: 'ca8',
    name: 'Lagoon Lounge Set',
    category: CollectionCategory.CASUAL,
    price: 120000,
    images: ['https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200', 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1200'],
    description: 'Two-piece knitted loungewear set in a neutral sand tone.'
  },
  {
    id: 'ca9',
    name: 'Gidi Graphic Hoodie',
    category: CollectionCategory.CASUAL,
    price: 85000,
    images: ['https://images.unsplash.com/photo-1512446813985-4a0eb17aee20?q=80&w=1200', 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1200'],
    description: 'Heavyweight hoodie featuring original street-art inspired Nigerian graphics.'
  },
  {
    id: 'ca10',
    name: 'Nomad Linen Pants',
    category: CollectionCategory.CASUAL,
    price: 95000,
    images: ['https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=1200', 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1200'],
    description: 'Breathable linen-blend trousers with a relaxed urban fit.'
  },
  {
    id: 'ca11',
    name: 'Eko Day Sneakers',
    category: CollectionCategory.CASUAL,
    price: 185000,
    images: ['https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1200', 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200'],
    description: 'Everyday luxury sneakers with indigenous-print insoles.'
  },
  {
    id: 'ca12',
    name: 'Atelier Signature Cap',
    category: CollectionCategory.CASUAL,
    price: 25000,
    images: ['https://images.unsplash.com/photo-1576871337622-983ef3c89e80?q=80&w=1200', 'https://images.unsplash.com/photo-1556048219-bb6978360b84?q=80&w=1200'],
    description: 'Adjustable canvas cap with high-density embroidered brand marks.'
  },

  // 5. EVENT-BASED FASHION (12 items)
  {
    id: 'e1',
    name: 'Gala Night Emerald',
    category: CollectionCategory.EVENT,
    price: 2850000,
    images: ['https://images.unsplash.com/photo-1589156226687-448abd39aff0?q=80&w=1200', 'https://images.unsplash.com/photo-1566206091558-7f218b696731?q=80&w=1200'],
    description: 'A show-stopping emerald silk gown designed for high-society gala events.'
  },
  {
    id: 'e2',
    name: 'Ceremonial Onyx Cape',
    category: CollectionCategory.EVENT,
    price: 1450000,
    images: ['https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=1200', 'https://images.unsplash.com/photo-1596462502278-27bfad45f1f6?q=80&w=1200'],
    description: 'A dramatic floor-length velvet cape with hand-applied crystals and silk lining.'
  },
  {
    id: 'e3',
    name: 'Wedding Guest Luxury',
    category: CollectionCategory.EVENT,
    price: 850000,
    images: ['https://images.unsplash.com/photo-1574297500578-afae5b32d1dd?q=80&w=1200', 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200'],
    description: 'Sophisticated midi-gown in royal blue lace, perfect for modern Nigerian weddings.'
  },
  {
    id: 'e4',
    name: 'Red Carpet Column',
    category: CollectionCategory.EVENT,
    price: 3200000,
    images: ['https://images.unsplash.com/photo-1589156206699-12174474934a?q=80&w=1200', 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=1200'],
    description: 'An architectural masterpiece in silver lamé, designed to capture every camera flash.'
  },
  {
    id: 'e5',
    name: 'Anniversary Silk Drape',
    category: CollectionCategory.EVENT,
    price: 950000,
    images: ['https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1200', 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1200'],
    description: 'Fluid silk gown with a masterfully draped back and signature jeweled hardware.'
  },
  {
    id: 'e6',
    name: 'Premiere Plissé Jumpsuit',
    category: CollectionCategory.EVENT,
    price: 650000,
    images: ['https://images.unsplash.com/photo-1534126511673-b6899657816a?q=80&w=1200', 'https://images.unsplash.com/photo-1534126416832-a88fdf2911c2?q=80&w=1200'],
    description: 'Avant-garde micro-pleated jumpsuit in optic white for a bold red-carpet statement.'
  },
  {
    id: 'e7',
    name: 'Cocktail Hour Sparkle',
    category: CollectionCategory.EVENT,
    price: 450000,
    images: ['https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?q=80&w=1200', 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1200'],
    description: 'A fitted cocktail dress embellished with thousands of hand-stitched glass beads.'
  },
  {
    id: 'e8',
    name: 'Bridal After-Party Edit',
    category: CollectionCategory.EVENT,
    price: 1200000,
    images: ['https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=1200', 'https://images.unsplash.com/photo-1550630993-c3686866f814?q=80&w=1200'],
    description: 'Short, energetic bridal dress with ostrich feather trim and pearl accents.'
  },
  {
    id: 'e9',
    name: 'Gidi Glam Gown',
    category: CollectionCategory.EVENT,
    price: 1800000,
    images: ['https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200', 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=1200'],
    description: 'Asymmetrical sequined gown in sunset hues, honoring the Lagos nightlife.'
  },
  {
    id: 'e10',
    name: 'Symphony Silk Set',
    category: CollectionCategory.EVENT,
    price: 750000,
    images: ['https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200', 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200'],
    description: 'Coordinated three-piece silk ensemble for upscale artistic events.'
  },
  {
    id: 'e11',
    name: 'Majestic Tulle Tiers',
    category: CollectionCategory.EVENT,
    price: 2100000,
    images: ['https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1200', 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200'],
    description: 'Voluminous tiered tulle gown in a delicate blush, for the ultimate romantic entry.'
  },
  {
    id: 'e12',
    name: 'Atelier Gold Couture',
    category: CollectionCategory.EVENT,
    price: 4500000,
    images: ['https://images.unsplash.com/photo-1534126511673-b6899657816a?q=80&w=1200', 'https://images.unsplash.com/photo-1534126416832-a88fdf2911c2?q=80&w=1200'],
    description: 'The pinnacle of the collection. A hand-molded metallic corset gown, purely bespoke.'
  }
];
