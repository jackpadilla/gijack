program meep;
int main
{
	int n;
	n=10;
	int i;
	int j;
	int first;
	first=0;
	int second;
	second=1;
	for (i=0; i<n; i=i+1;)
	{
		if(i<=1){
			j =i;
		}else
		{

			j=first+second;
			first=second;
			second=j;
		}
		print(j);

	}



}

