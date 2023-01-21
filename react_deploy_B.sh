#!/bin/bash

REPOSITORY= /home/ubuntu
PROJECT_FOLDER= VAIV2023_FrontEnd

echo "> swap 메모리 할당 진행"
sudo dd if=/dev/zero of=/swapfile bs=128M count=16
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
sudo swapon -s
sudo bash -c 'echo -e "/swapfile swap swap defaults 0 0" >> /etc/fstab'
echo ">권한 설정"
sudo apt update
wait
echo "> 필요 패키지 다운로드"
sudo apt install nginx -y
wait
ehcho ">curl 설치"
sudo apt-get install curl
wait
curl -o- -L https://yarnpkg.com/install.sh | bash
wait
source ~/.bashrc
wait
echo "> npm 설치 진행"
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
wait
. ~/.nvm/nvm.sh
wait
nvm install node
wait
echo "> node, npm 버전 확인"
node -v
npm --v
echo "> Git Repository 복사"
git clone https://github.com/VAIV2023/VAIV2023_FrontEnd.git
wait
echo "> 디렉토리 이동"
cd $REPOSITORY/$PROJECT_FOLDER
echo "> 필요 파일 설치 진행"
npm install
wait
echo "> 빌드 시작"
npm run start
