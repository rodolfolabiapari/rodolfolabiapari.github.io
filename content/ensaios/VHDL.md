---
title: VHDL, concorrência e a implementação do for
created: 2026-09-25
updated: 2026-09-25
draft: false
tags:
  - ensaio
  - vhdl
  - hardware
  - concorrencia
description: O conceito de concorrência em VHDL e como o for é implementado
lang: pt-br
enableToc: true
aliases: []
---

> Ensaio sobre o conceito de concorrência em #vhdl e a implementação do `for` em hardware.

A maior diferença para o [[C (linguagem de programação)|C]] é a mentalidade. C é uma _linguagem sequencial_: uma linha executa depois da outra na CPU.

[[VHDL]] é uma linguagem de _descrição de hardware_.
Não se descreve O QUE o processador deve fazer, você está dizendo QUAL circuito deve existir.

Em linguagem C:
```c
a = 1;
b = 2;
# primeiro a vira 1, depois b vira 2.
```

Em VHDL, fora de um `process`, tudo acontece AO MESMO TEMPO. Isso é a concorrência:
```vhdl
a <= '1';
b <= '0';
```
Essas duas linhas viram dois fios ligados ao mesmo tempo. 
Não há ordem. 

É como ligar duas lâmpadas na tomada, as duas acendem juntas.

Trabalhei isso no meu [[Pesquisas e Publicações Científicas]].

Para ter um comportamento sequencial parecido com C, usamos o `process`.

Dentro de um `process`, as instruções SÃO sequenciais, mas entre processos diferentes, tudo continua concorrente.

É a forma de modelar hardware síncrono, como um #flip-flop:

```vhdl
process(clk)
begin
  if rising_edge(clk) then
    q <= d; -- só acontece na borda do clock do fpga
  end if;
end process;
```

> **Detalhe:** Você pode ter 20 `process` no seu arquivo, e os 20 estão funcionando em paralelo, como 20 circuitos separados em uma placa. 

Em C, isso só seria possível com _threads_ complexas. Em VHDL, a concorrência é a **regra natural**.
Até que isso entra na sua cabeça, abre um mundo na sua frente de como circuitos eletrônicos funcionam (e são desenvolvidos).

E o **mais legal de tudo**, uma vez que você entende isso, o `for` em VHDL não faz loop, ele COPIA hardware!

Esse é o erro clássico de quem vem do C (como eu).
Em C, `for` repete uma ação no tempo.

Em VHDL, existem dois `for` completamente diferentes:

**1. `for...loop` dentro de um `process`:** Esse sim parece com C, é sequencial e serve para algoritmo.
```vhdl
for i in 0 to 7 loop
  soma := soma + vetor(i);
end loop;
```

**2. `for...generate` FORA de um `process`:** Esse é o mais importante e mais usado. 
Ele não repete no tempo, ele repete no ESPAÇO. Ele clona hardware.

O código abaixo gera 8 portas `NOT` iguais, replicadas  dentro do hardware.

```vhdl
gen_not: for i in 0 to 7 generate
  saida(i) <= not entrada(i);
end generate;
```
Isso não é um loop que vai executar 8 vezes. O footprint gerado vai ser fisicamente 8 portas NOT.

Legal né?

Uma vez eu fiz o algoritmo de #criptografia #3DES. Ele está [disponível no meu github](https://github.com/rodolfolabiapari/3des).