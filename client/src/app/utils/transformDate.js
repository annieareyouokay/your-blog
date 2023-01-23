export function transformDate(date) {
  return new Date(date).toLocaleDateString('en-EN', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
}
