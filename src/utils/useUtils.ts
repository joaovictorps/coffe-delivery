export function formatPrice(price: number): string {
    const formattedPrice = price.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  
    return formattedPrice;
  }