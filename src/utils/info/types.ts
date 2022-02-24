/**
 * Formatted type for Candlestick charts
 */
 export interface PriceChartEntry {
  time: number
  open: number
  close: number
  high: number
  low: number
}

export interface Block {
  number: number
  timestamp: string
}