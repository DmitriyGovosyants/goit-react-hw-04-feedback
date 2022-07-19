export function countPositiveFeedbackPercentage(total, positive) {
  return Math.floor((positive / total) * 100)
}