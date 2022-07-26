def maxProfit(self, prices: List[int]) -> int:
    left = 0 # Buy
    right = 1 # Sell
    profit = 0
    while right < len(prices):
        currentProfit = prices[right] - prices[left]
        # 이득이 생기면
        if  prices[left] < prices[right]:
            profit = max(currentProfit, profit)
        else:
            left = right
        right += 1
    return profit
