//fetch per ottenere il consiglio (advice-gererator)
export default async function getAdvice() {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();
  return data.slip.advice;
}
