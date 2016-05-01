program fibonacci;
funcion int fibo(int n) {
  if (n < 2) {
    return 1;
  } else {
    int n1;
    int n2;
    n1 = fibo(n - 1);
    n2 = fibo(n - 2);
    return n1 + n2;
  }
}
int main {
  int n = 0;

  while (n < 10)
  {
    print(fibo(n));
    n = n + 1;
  }
}
