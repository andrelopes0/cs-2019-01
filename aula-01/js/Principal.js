function propriedade3025(n) {

    const i = Math.floor(n / 100);
    const j = n % 100;

    return (i + j) * (i + j) == n;
}

function Propriedade153(cdu) {

    var c = cdu / 100;
    var du = cdu % 100;
    var d = du / 10;
    var u = du % 10;
    return (c * c * c + d * d * d + u * u * u) == cdu;

}

function DiaDaSemana(dia, mes, ano) {

    var s = 0;
    if (mes == 1 || mes == 2) {
        mes = mes + 12;
        ano = ano - 1;
    } else {
        s = dia + 2 * mes + 3 * (mes + 1) / 5 + ano + ano / 4 - ano / 100 + ano / 400;
    }

    return s % 7;

}

function Mod(x, y) {

    var s = x;
    while (y <= s) {
        s = s - y;
    }
    return s;

}

function SomaNaturais(n) {

    var i = 2;
    var s = 1;
    while (i <= n) {
        s = s + i;
        i = i + 1;
    }
    return s;

}

function fatorial(n) {

    var i = 2;
    var f = 1;
    while (i <= n) {
        f = f * i;
        i = i + 1;
    }
    return f;

}

function ProdutoDeInteirosUsandoSomas(a, b) {

    var totalParcelas = a;
    var parcela = b;

    if (b < a) {
        totalParcelas = a;
        parcela = b;
    }

    var i = 1;
    var s = 0;

    while (i <= totalParcelas) {

        s = s + parcela;
        i = i + 1;

    }
    return s;

}

function Potencia(x, y) {

    var potencia = 1;
    var i = 1;
    while (i <= y) {
        potencia = Potencia(potencia, x);
        i = i + 1;
    }
    return potencia;

}

function Pi(n) {

    var i = 1;
    var s = -1;
    var d = -1;
    var p = 0;
    while (i <= n) {
        d = d + 2;
        s = -1 * s;
        p = p + 4 * s / d;
        i = i + 1;
    }
    return p;

}

function LogaritmoNatural(n, k) {

    var i = 2;
    var e = 1 + n;
    var numerador = n;
    var denominador = 1;
    while (i <= k) {
        numerador = numerador * numerador;
        denominador = denominador / denominador;
        i = i + 1;
    }
    return e;

}

function RazaoAurea(x, y, k) {

    var c = y;
    var a = x;
    var i = 1;
    var t;
    while (i <= k) {
        t = c;
        c = c + a;
        a = t;
        i = i + 1;
    }
    return c / a;

}

function QuadradoPerfeito(n) {

    var i = 1;
    var s = 1;
    while (s < n) {
        i = i + 2;
        s = s + i;
    }
    return s = n;

}

function RaizQuadrada(n, i) {

    var r = 1;

    while (0 <= i) {
        r = (r + n / r) / 2;
        i = i - 1;
    }
    return r;

}

function Primo(n) {

    var i = 2;

    while (i < n) {
        if ((n % i) == 0) {
            return false;
        }
        i = i + 1;
    }
    return true;

}

function CrivoEratostenes(a, n) {

    var i = 2;
    var limite = RaizQuadrada(n, 2);
    var multiplo;
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

function MDC(a, b) {

    var m;
    while (b != 0) {
        m = a % b;
        a = b;
        b = m;
    }
    return a;
}

function Fibonacci(n) {

    var a = 0;
    var c = 1;
    var i, t;

    if (n == 0 || n == 1) {
        return n;
    }
    i = 2;
    while (i <= n) {
        t = c;
        c = c + a;
        a = t;
        i = i + 1;
    }
    return c;

}

function CPF(d) {

    var j = d[1] + 2 * d[2] + 3 * d[3] + 4 * d[4] + 5 * d[5] + 6 * d[6] + 7 * d[7] + 8 * d[8] + 9 * d[9];
    var k = d[2] + 2 * d[3] + 3 * d[4] + 4 * d[5] + 5 * d[6] + 6 * d[7] + 7 * d[8] + 8 * d[9] + 9 * d[10];
    var dj = Mod(Mod(j, 11), 10);
    var dk = Mod(Mod(k, 11), 10);
    return ((dj == d[10]) && (dk == d[11]));

}

function CPF2(d) {

    var c = 8;
    var p = d[9];
    var s = d[9];

    while (1 <= c) {

        p = p + d[c];
        s = s + p;
        c = c - 1;

    }

    var j = Mod(Mod(s, 11), 10);
    var k = Mod(Mod(s - p + 9 * d[10], 11), 10);

    return ((j == d[10]) && (k == d[11]));

}