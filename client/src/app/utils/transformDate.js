export function transformDate(date) {
  return new Date(Number(date)).toLocaleDateString('en-EN', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
}
