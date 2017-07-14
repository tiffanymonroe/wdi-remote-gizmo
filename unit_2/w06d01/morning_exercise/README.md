![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDIR-Gizmo

---
Title: Caesar Cipher <br>
Type: Morning Exercise<br>
Original Creator:  WDIR-Panthalassa - Thom Page<br>
    Course: WDIR-Hopper<br>
Competencies: CS, JavaScript

---

## The Caesar Cipher

From Wikipedia:

> In cryptography, a Caesar cipher is one of the simplest and most widely known encryption techniques. It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. The method is named after Julius Caesar, who used it in his private correspondence.

We're going to implement a simple Caesar Cipher called ROT13 ("rotate by 13 places"). The transformation can be represented by aligning two alphabets, like so:

```
Plain:    abcdefghijklmnopqrstuvwxyz
Cipher:   nopqrstuvwxyzabcdefghijklm
```

ROT13 is its own inverse; that is, to undo ROT13, the same algorithm is applied, so the same action can be used for encoding and decoding. The algorithm provides virtually no cryptographic security, and is often cited as a canonical example of weak encryption. ROT13 is used in online forums as a means of hiding spoilers, punchlines, and puzzle solutions from the casual glance.

Write a method that will take a string as an input and encode / decode it using ROT13.

```
Input:
Hello World

Output:
Uryyb jbeyq
```

## Hungry for More?

Adapt your code so that the user can choose how many places the decoder should rotate.

EXAMPLES:

ROT1
```
Plain: a b c d e f g
Cipher: b c d e f g h
```

ROT24
```
Plain: a b c d e f g
Cipher: y z a b c d e
```
