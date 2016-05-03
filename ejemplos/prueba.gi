program meep;
funcion int cuenta (int n){
  if (n>1) {
    print(cuenta(n-1));
  } else {
    print(n);
  }

}
int main{
  cuenta(10);

}