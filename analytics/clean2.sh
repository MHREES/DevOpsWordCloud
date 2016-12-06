sed -i 's/#.*$//' env && sed -i '/^$/d' env && \
sed -i 's/ =.*$//' env && \
sed -i '/=/!d' env
