REM 声明采用UTF-8编码
chcp 65001
docker build -t neverland -f Dockerfile .
echo "🎉 编 🎉 译 🎉 成 🎉 功 🎉"
docker tag neverland nas.ilyl.life:8093/nas/neverland
echo "🎉 标 🎉 记 🎉 成 🎉 功 🎉"
docker push nas.ilyl.life:8093/nas/neverland
echo "🎉 架 🎉 设 🎉 成 🎉 功 🎉"