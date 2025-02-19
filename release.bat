REM 声明采用UTF-8编码
chcp 65001
docker build -t blog -f Dockerfile .
echo "🎉 编 🎉 译 🎉 成 🎉 功 🎉"
docker tag blog nas.ilyl.life:8093/nas/blog
echo "🎉 标 🎉 记 🎉 成 🎉 功 🎉"
docker push nas.ilyl.life:8093/nas/blog
echo "🎉 架 🎉 设 🎉 成 🎉 功 🎉"