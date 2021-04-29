let dy = Array.from(Array(30), () => Array(30).fill(0));

function combi(n, r) {
  if (dy[n][r] > 0) return dy[n][r];
  if (n === r || r === 0) return 1;
  return (dy[n][r] = combi(n - 1, r) + combi(n - 1, r - 1));
}
