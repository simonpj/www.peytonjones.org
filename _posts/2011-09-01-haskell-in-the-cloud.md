---
title: "Towards Haskell in the cloud"
excerpt: "Jeff Epstein, Andrew Black, Simon Peyton Jones <br><br> <em>Haskell Symposium</em>
<br><br>
[View PDF](../assets/pdfs/haskell-in-the-cloud.pdf){: .btn .btn--info ..btn--large}
[Download BibTex](../assets/bibtex/haskell-in-the-cloud.bib){: .btn .btn--info ..btn--large}"
permalink: /haskell-cloud/
header:
  overlay_image: /assets/images/spj-stock-header.jpg
  overlay_filter: 0.5
tags:
- publication
- haskell
---

# Abstract

We present Cloud Haskell, a domain-specific language for developing programs for a distributed-memory computing environment. Implemented as a shallow embedding in Haskell, it provides a message-passing communication model, inspired by Erlang, without introducing incompatibility with Haskell’s established shared-memory concurrency. A key contribution is a method for serializing function closures for transmission across the network. Cloud Haskell has been implemented; we present example code and some preliminary performance measurements.

## [Jeff Epstein’s MPhil thesis](https://www.microsoft.com/en-us/research/uploads/prod/2016/07/epstein-thesis.pdf)

# Errata

Just before 4.1, the code for ping2 should read like this

`data Ping2 = Ping2 (SendPort Pong2)   -- Sent by ping-process
                                      -- received by pong-process
data Pong2 = Pong2 (SendPort Ping2)   -- Sent by pong-process
                                      -- received by ping-process

ping2 :: SendPort Pong2 -> ReceivePort Pong2 -> ProcessM ()
ping2 pongout pongin = do { Pong2 ping_port <- receiveChan pongin
                          ; sendChan ping_port (Ping2 pongout)
                          ; ping2 pongout pongin }
..similarly pong2…`
