docker build -t neverland -f Dockerfile .
echo "🎉 架 🎉 设 🎉 成 🎉 功 🎉"
docker tag neverland nas.ilyl.life:8093/nas/neverland
echo "🎉 标 🎉 记 🎉 成 🎉 功 🎉"
docker push nas.ilyl.life:8093/nas/neverland
echo "🎉 发 🎉 布 🎉 成 🎉 功 🎉"