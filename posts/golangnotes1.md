---
title: 'Notes: Defining the $GOPATH  $GOROOT, and looking at The directory '
date: '2021-08-03'
---
Note to self -

**$GOPATH Is Not $GOROOT**
- The *$GOROOT* is where Go’s code, compiler, and tooling lives. 

- The *$GOROOT* is  something like */usr/local/go* . 

- The *$GOPATH* environment variable lists places for Go to look for Go Workspaces

- *$GOPATH* is usually something like *$HOME/go.*


Inside of a Go Workspace, or **GOPATH**, there are three directories: **bin**,
**pkg**, and **src**. Each of these directories has special meaning to the Go
tool chain.

.
├── bin
├── pkg
└── src
    └── github.com/foo/bar
        └── bar.go


taking a  look at each of these directories.

The *$GOPATH/bin* directory is where Go places binaries that go
install compiles.


The *$GOPATH/pkg* directory is where Go stores pre-compiled object
files to speed up subsequent compiling of programs. Usually, devs won’t need to access this directory. If any issues happen
with compilation, you can safely delete this directory and Go will then
rebuild it.

The *src* directory is where all of .go files, need to  be
located. 

