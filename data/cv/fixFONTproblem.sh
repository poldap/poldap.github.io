#!/bin/bash

unzip fontin_pc.zip

mkdir ~/.fonts/
mkdir ~/.fonts/Fontin

mv Fontin-* ~/.fonts/Fontin/
sudo fc-cache -f -v
fc-cache -f -v
