---
title: gpg — Security Keys
created: 2026-09-04
draft: false
tags:
  - GPG
  - security
  - dataEncryption
  - crypto
  - cryptography
  - cheatSheet
description: Operações com gpg
lang: pt-br
enableToc: true
aliases: []
---

> You can contact me using gpg in [[contato-gpg]].

## gpg Cheat Sheet

> Testado com gpg (GnuPG) `2.4.9`.


List public keys

```
gpg --list-keys
```

List all secret keys

```
gpg --list-secret-keys
```

### Generating New PGP/GPG

Install the gpg command #gnupg

```bash
sudo apt install gnupg
sudo pacman -S gnupg
brew search gnupg
```

Create a key pair with `gpg --full-generate-key` command. At menu below, press
`Enter` on keyboard.

```bash
gpg (GnuPG) 2.2.27; Copyright (C) 2021 Free Software Foundation, Inc.
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.

Please select what kind of key you want:
   (1) RSA and RSA (default)
   (2) DSA and Elgamal
   (3) DSA (sign only)
   (4) RSA (sign only)
  (14) Existing key from card
Your selection?
```

After use `4096` for bits size of keys.

```bash
RSA keys may be between 1024 and 4096 bits long.
What keysize do you want? (3072) 4096
```

Press `Enter` to skip expiration to key and confirm with `y`.

```bash
Requested keysize is 4096 bits
Please specify how long the key should be valid.
         0 = key does not expire
      <n>  = key expires in n days
      <n>w = key expires in n weeks
      <n>m = key expires in n months
      <n>y = key expires in n years
Key is valid for? (0)
Key does not expire at all
Is this correct? (y/N) y
```

Fill with you contact information. After, press `O`.

```bash
GnuPG needs to construct a user ID to identify your key.

Real name: Alice
Email address: alice@mail.com
Comment:
You selected this USER-ID:
    "Alice <alice@mail.com>"

Change (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit? O
```

It will ask you to set a password for you keys.

After that, you keys will be created.

```bash
We need to generate a lot of random bytes. It is a good idea to perform
some other action (type on the keyboard, move the mouse, utilize the
disks) during the prime generation; this gives the random number
generator a better chance to gain enough entropy.

We need to generate a lot of random bytes. It is a good idea to perform
some other action (type on the keyboard, move the mouse, utilize the
disks) during the prime generation; this gives the random number
generator a better chance to gain enough entropy.

gpg: key A1D49A4D3D58F0A5 marked as ultimately trusted
gpg: revocation certificate stored as '/home/alice/.gnupg/openpgp-revocs.d/0B0CCA6AF73C244FDE9A738CA1D49A4D3D58F0A5.rev'
public and secret key created and signed.

pub   rsa4096 2024-04-27 [SC]
      0B0CCA6AF73C244FDE9A738CA1D49A4D3D58F0A5
uid                      Alice <alice@mail.com>
sub   rsa4096 2024-04-27 [E]
```

You can use `gpg --list-keys` to show public keys and `gpg --list-secret-keys`
view your private keys.


### Importing keys

List contents of key file without importing it

```
gpg keys.asc
```

Verbose option to see fingerprint or both fingerprint/signatures too

```
gpg --with-subkey-fingerprint keys.asc
gpg -v keys.asc
```

Import keys, merging into current key ring

```
gpg --import keys.asc
```

### Edit key trust

```
gpg --edit-key KEYID
gpg>trust
gpg>(enter trust level)
gpg>save
```

The trust level you enter is based on:

```
1 = I don't know or won't say
2 = I do NOT trust
3 = I trust marginally
4 = I trust fully
5 = I trust ultimately
m = back to the main menu
```

Use *ultimate* only for keys you've generated yourself. Signing a key will automatically set the key's trust level to *full*.

### Renew an expired (sub)key

To change the expiry of a key

```
gpg --edit-key KEYID
gpg>expire
gpg>key 1
gpg>expire
gpg>list
gpg>save
```

If you have more subkeys, you can edit those with `key 2`, `key 3` etc. Use `list` to view the key details including expiry date. The default key edited is the primary key when no `key N` is specified, this is the first key shown in the `list` output, and can also be manually selected by `key 0`.

Then export the new key for distribution, and generate a new revocation certificate for safekeeping. The secret key doesn't change.

```
gpg -a --export KEYID > public.asc
gpg -a --gen-revoke KEYID > revoke.asc
```

### Encryption

Encrypt file to one recipient key. This will write to a default filename, in this case `file.txt.gpg`

```
gpg -e -r KEYID file.txt
```

Sign and encrypt a file

```
gpg -s -e -r KEYID file.txt
```

Encrypt to multiple recipients

```
gpg -e -r KEY1 -r KEY2 -r KEY3 file.txt
```

Encrypt and specify output file

```
gpg -e -r KEYID -o OUTPUT INPUT
```

Encryption uses compression by default. To disable, use the option `-z 0`. This will speed up the process if encrypting a large file which is already compressed.

```
gpg -e -z 0 -r KEYID file.tar.gz
```

Encrypt contents from standard input

```
cat "my secret message" | gpg -e -r KEYID > message.txt.gpg
tar -jc /var/log/secret | gpg -z 0 -e -r KEYID > secret.tar.bz2.gpg
```

Symmetrically encrypt a file using a passphrase

```
gpg -c file.txt
```

### Create or verify signature

Sign file without encrypting, using a detached signature. This will write to a default file `file.txt.asc` in the example below.

```
gpg -a -s file.txt
```

But with clear signed attached signature

```
gpg --clear-sign file.txt
```

Sign using a non default secret key. Useful if you have multiple secret keys on your key ring.

```
gpg --default-key KEYID -a -s file.txt
```

Verify a clearsigned or dettached signature

```
gpg --verify file.txt.asc
```

### Decryption

List recipients of a encrypted file

```
gpg --list-only FILE
```

Decrypt a file to user defined output filename

```
gpg -d -o OUTPUT FILE
```

Decrypt a file using default file name, e.g `file.txt.gpg` decrypts to `file.txt`

```
gpg -d FILE
```

### Exporting keys

Export single public key or secret key, useful for backing up keys

```
gpg -a --export KEYID > public.asc
gpg -a --export-secret-key KEYID > secret.asc
```

Export all keys

```
gpg -a --export > public-all.asc
gpg -a --export-secret-key > secret-all.asc
```

Exported secret keys are protected with current secret key passphrase.
