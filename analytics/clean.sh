sed -i 's/#.*$//' env && sed -i '/^$/d' env && \
sed -i -e 's/^/export /' env && \
sed -i 's/ =.*$//' env && \
sed -i '/=/!d' env
