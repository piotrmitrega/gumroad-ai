import { Product } from "../types/api";

// returns top revenue product + max 4 of them based on sales count
export const chooseProductIdsToAnalyze = (products: Product[]): string[] => {
  const maxProductsToAnalyze = 5;

  const sortedByRevenue = [...products].sort((a, b) => {
    return b.sales_usd_cents - a.sales_usd_cents
  })

  const sortedBySales = [...products].sort((a, b) => {
    return b.sales_count - a.sales_count
  });

  const topRevenueProduct = sortedByRevenue[0];

  const remainingProducts = sortedBySales.filter(product => product.id !== topRevenueProduct.id);

  const selectedProducts = remainingProducts.slice(0, maxProductsToAnalyze - 1);

  // Combine the top revenue product with the selected products
  return [topRevenueProduct.id, ...selectedProducts.map(product => product.id)];
}
