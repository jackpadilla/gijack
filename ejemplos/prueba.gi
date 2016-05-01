program meep;
funcion cuentaHasta(int n) {
  print(n);

  if (n > 0) {
    cuentaHasta(n - 1);
  }
}
int main {
  cuentaHasta(10);
}
