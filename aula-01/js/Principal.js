function propriedade3025(n) {
    const i = Math.floor(n / 100);
    const j = n % 100;
    return (i + j) * (i + j) == n;
}

console.log(propriedade3025(3024));

function propriedade153(cdu) {
    const c = Math.floor(cdu / 100);
    const du = cdu % 100;
    const d = Math.floor(du / 10);
    const u = du % 10;
    
    return (c * c * c + d * d * d + u * u * u) == cdu;
}

function diaDaSemana(dia, mes, ano) {
    if (mes == 1 || mes == 2) {
        mes = mes + 12;
        ano = ano - 1;
    } 
    
    const s = dia + 2 * mes + Math.floor(3 * (mes + 1) / 5) + ano 
    	+ Math.floor(ano / 4) - Math.floor(ano / 100) + Math.floor(ano / 400);
    
    return s % 7;
}

function somaNaturais(n) {
    let i = 2;
    let s = 1;
    while (n >= i) {
        s = s + i;
        i = i + 1;
    }
    
    return s;
}

function fatorial(n) {
    let i = 2;
    let f = 1;
    while (n >= i) {
        f = f * i;
        i = i + 1;
    }
    
    return f;
}

function produtoDeInteirosUsandoSomas(a, b) {
    var totalParcelas = a;
    var parcela = b;

    if (b < a) {
        totalParcelas = b;
        parcela = a;
    }

    let i = 1;
    let s = 0;

    while (i <= totalParcelas) {
        s = s + parcela;
        i = i + 1;
    }
    return s;
}

function potencia(x, y) {

    let p = 1;
    let i = 1;
    while (y >= i) {
        p = potencia(p, x);
        i = i + 1;
    }
    return p;
}

function pi(n) {

    let i = 1;
    let s = -1;
    let d = -1;
    let p = 0;
    while (i <= n) {
        d = d + 2;
        s = -1 * s;
        p = p + 4 * Math.floor(s / d);
        i = i + 1;
    }
    return p;
}

function logaritmoNatural(n, k) {

    let i = 2;
    let e = 1 + n;
    let numerador = n;
    let denominador = 1;
    while (i <= k) {
        numerador = numerador * numerador;
        denominador = Math.floor(denominador / denominador);
        e = e + Math.floor(numerador/denominador);
        i = i + 1;
    }
    return e;
}

function razaoAurea(x, y, k) {

    let c = y;
    let a = x;
    let i = 1;
    let t;
    while (i <= k) {
        t = c;
        c = c + a;
        a = t;
        i = i + 1;
    }
    return Math.floor(c / a);
}

function quadradoPerfeito(n) {

    let i = 1;
    let s = 1;
    while (s < n) {
        i = i + 2;
        s = s + i;
    }
    return s = n;
}

function raizQuadrada(n, i) {

    let r = 1;

    while (0 <= i) {
        r = (r + n / r) / 2;
        i = i - 1;
    }
    return r;
}

function primo(n) {

    let i = 2;

    while (n > i) {
        if ((n % i) == 0) {
            return false;
        }
        i = i + 1;
    }
    return true;
}

function crivoEratostenes(a, n) {

    let i = 2;
    let limite = raizQuadrada(n, 2);
    let multiplo;
    while (i <= limite) {
        if (a[i] == 0) {
            multiplo = i + 1;
            while (multiplo <= n) {
                a[multiplo] = 1;
                multiplo = multiplo + i;
            }
        }
        i = i + 1;
    }
}

function mdc(a, b) {

    let m;
    while (b != 0) {
        m = a % b;
        a = b;
        b = m;
    }
    return a;
}

function fibonacci(n) {

    let a = 0;
    let c = 1;
    let i, t;

    if (n == 0 || n == 1) {
        return n;
    }
    i = 2;
    while (n >= i) {
        t = c;
        c = c + a;
        a = t;
        i = i + 1;
    }
    return c;
}

function cpf(d) {

    let j = d[1] + 2 * d[2] + 3 * d[3] + 4 * d[4] + 5 * d[5] + 6 * d[6] + 7 * d[7] + 8 * d[8] + 9 * d[9];
    let k = d[2] + 2 * d[3] + 3 * d[4] + 4 * d[5] + 5 * d[6] + 6 * d[7] + 7 * d[8] + 8 * d[9] + 9 * d[10];
    let dj = mod(mod(j, 11), 10);
    let dk = mod(mod(k, 11), 10);
    
    return ((dj == d[10]) && (dk == d[11]));
}

function cpf2(d) {

    let c = 8;
    let p = d[9];
    let s = d[9];

    while (c >= 1) {
        p = p + d[c];
        s = s + p;
        c = c - 1;
    }
    let j = mod(mod(s, 11), 10);
    let k = mod(mod(s - p + 9 * d[10], 11), 10);

    return ((j == d[10]) && (k == d[11]));
}
