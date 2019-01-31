#!/bin/bash

xelatex cv_Pol.tex
bibtex bu1
bibtex bu2
xelatex cv_Pol.tex
xelatex cv_Pol.tex
pdf2htmlEX --zoom 2 cv_Pol.pdf
