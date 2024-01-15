import classnames from "classnames";

export type Product = {
  name: string;
  preview_url: string | null;
  description: string;
  customizable_price: boolean;
  require_shipping: boolean;
  custom_receipt: string;
  custom_permalink: string;
  subscription_duration: null | string;
  id: string;
  url: string | null;
  price: number;
  currency: string;
  short_url: string;
  thumbnail_url: string | null;
  tags: string[];
  formatted_price: string;
  published: boolean;
  file_info: {};
  max_purchase_count: null | number;
  deleted: boolean;
  custom_fields: any[];
  custom_summary: string;
  is_tiered_membership: boolean;
  recurrences: null | any;
  variants: any[];
  custom_delivery_url: null | string;
  sales_count: number;
  sales_usd_cents: number;
}

interface Card {
  visual: null | string;
  type: null | string;
  bin: null | string;
  expiry_month: null | string;
  expiry_year: null | string;
}

interface Affiliate {
  email: string;
  amount: string;
}

export type Sale = {
  id: string;
  email: string;
  seller_id: string;
  timestamp: string;
  daystamp: string;
  created_at: string;
  product_name: string;
  product_has_variants: boolean;
  price: number;
  gumroad_fee: number;
  is_bundle_purchase: boolean;
  is_bundle_product_purchase: boolean;
  formatted_display_price: string;
  formatted_total_price: string;
  currency_symbol: string;
  amount_refundable_in_currency: string;
  product_id: string;
  product_permalink: string;
  partially_refunded: boolean;
  chargedback: boolean;
  purchase_email: string;
  state: string;
  zip_code: string;
  country: string;
  country_iso2: string;
  paid: boolean;
  has_variants: boolean;
  variants_and_quantity: string;
  has_custom_fields: boolean;
  custom_fields: any;
  order_id: number;
  is_product_physical: boolean;
  is_recurring_billing: boolean;
  can_contact: boolean;
  is_following: boolean;
  disputed: boolean;
  dispute_won: boolean;
  is_additional_contribution: boolean;
  discover_fee_charged: boolean;
  is_upgrade_purchase: boolean;
  is_more_like_this_recommended: boolean;
  is_gift_sender_purchase: boolean;
  is_gift_receiver_purchase: boolean;
  referrer: string;
  paypal_refund_expired: boolean;
  card: Card;
  product_rating: null | string;
  reviews_count: number;
  average_rating: number;
  affiliate: Affiliate;
  license_key: string;
  license_id: string;
  license_disabled: boolean;
  is_multiseat_license: boolean;
  quantity: number;
}

export type User = {
  id: string;
  gumroad_id: string;
  name: string;
  email: string;
  profile_url: string;
}
