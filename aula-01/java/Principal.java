public class Principal {
	
	public static boolean propriedade3025(final int n){
		
		final int i = n/100;
		final int j = n%100;
		return (i+j)*(i+j) == n;
	}
	
	public static boolean Propriedade153(int cdu){
		
		int c = cdu/100;
		int du = cdu%100;
		int d = du/10;
		int u = du%10;
		return (c*c*c + d*d*d + u*u*u) == cdu;
	}
	
	public static int DiaDaSemana(int dia, int mes, int ano){
		
		int s = 0;
		if(mes == 1 || mes ==2){
			mes = mes + 12;
			ano = ano - 1;
		}else{
			s = dia + 2*mes + 3*(mes+1) / 5 + ano + ano / 4 - ano / 100 + ano / 400;
		}
		
		return s % 7;
	}
	
	public static int Mod(int x, int y){
		
		int s = x;
		while(y<=s){
			s = s - y;
		}
		return s;
	}
	
	public static int SomaNaturais(int n){
		
		int i = 2;
		int s = 1;
		while(i<=n){
			s = s + i;
			i = i + 1;
		}
		return s;
	}
	
	public static int fatorial(int n){
		
		int i = 2;
		int f = 1;
		while(i<=n){
			f = f * i;
			i = i + 1;
		}
		return f;
	}
	
	public static int ProdutoDeInteirosUsandoSomas(int a, int b){
		
		int totalParcelas = a;
		int parcela = b;
		
		if(b<a){
			totalParcelas = a;
			parcela = b;
		}
		
		int i = 1;
		int s = 0;
		
		while(i<=totalParcelas){
			
			s = s + parcela;
			i = i + 1;
			
		}
		return s;
		
	}
	
	public static int Potencia(int x, int y){
		
		int potencia = 1;
		int i = 1;
		while(i<=y){
			potencia = Potencia(potencia, x);
			i = i + 1;
		}
		return potencia;
	}
	
	public static float Pi(float n){
		
		float i = 1;
		float s = -1;
		float d = -1;
		float p = 0;
		while(i <= n){
			d = d + 2;
			s = -1 * s;
			p = p + 4 * s / d;
			i = i + 1;
		}
		return p;
	}
	
	public static float LogaritmoNatural(float n, int k){
		
		int i = 2;
		float e = 1 + n;
		float numerador = n;
		float denominador = 1;
		while(i<=k){
			numerador = numerador * numerador;
			denominador = denominador / denominador;
			i = i + 1;
		}
		return e;
	}
	
	public static int RazaoAurea(int x, int y, int k){
		
		int c = y;
		int a = x;
		int i = 1;
		int t;
		while(i <= k){
			t = c;
			c = c + a;
			a = t;
			i = i + 1;
		}
		return c/a;
	}
	
	public static int QuadradoPerfeito(int n){
		
		int i = 1;
		int s = 1;
		while(s<n){
			i = i + 2;
			s = s + i;
		}
		return s = n;
	}
	
	public static int RaizQuadrada(int n, int i){
		
		int r = 1;
		
		while(0 <= i){
			r = (r + n/r)/2;
			i = i - 1;
		}
		return r;
	}
	
	public static boolean Primo(int n){
		
		int i = 2;
		
		while(i < n){
			if((n%i)==0){
				return false;
			}
			i = i + 1;
		}
		return true;
	}
	
	public static void CrivoEratostenes(int a[], int n){
		
		int i = 2;
		int limite = RaizQuadrada(n,2);
		int multiplo;
		while(i <= limite){
			if(a[i] == 0){
				multiplo = i + 1;
				while(multiplo <= n){
					a[multiplo] = 1;
					multiplo = multiplo + i;
				}
			}
			i = i + 1;
		}
	}
	
	public static int MDC(int a, int b){
		
		int m;
		while(b != 0){
			m = a%b;
			a = b;
			b = m;
		}
		return a;
	}
	
	public static int Fibonacci(int n){
		
		int a = 0;
		int c = 1;
		int i, t;
		
		if(n==0 || n ==1){
			return n;
		}
		i = 2;
		while(i<=n){
			t = c;
			c = c + a;
			a = t;
			i = i + 1;
		}
		return c;
		
	}
	
	public static boolean CPF(int [] d){
		
		int j = d[1] + 2*d[2] + 3*d[3] + 4*d[4] + 5*d[5] + 6*d[6] + 7*d[7] + 8*d[8] + 9*d[9];
		int k = d[2] + 2*d[3] + 3*d[4] + 4*d[5] + 5*d[6] + 6*d[7] + 7*d[8] + 8*d[9] + 9*d[10];
		int dj = Mod(Mod(j,11), 10);
		int dk = Mod(Mod(k,11), 10);
		return ((dj == d[10]) && (dk == d[11]));
	
	}
	
	public static boolean CPF2(int [] d){
		
		int c = 8;
		int p = d[9];
		int s = d[9];
		
		while(1 <= c){
			
			p = p + d[c];
			s = s + p;
			c = c - 1;
			
		}
		int j = Mod(Mod(s,11), 10);
		int k = Mod(Mod(s - p + 9*d[10],11), 10);
		
		return ((j == d[10])&&(k == d[11]));
		
	}
}
