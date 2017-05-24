# hyperledger-workspace

composer archive create --archiveFile taxtime-quick-biz-loans.bna ---sourceType dir --sourceName .

composer network deploy --archiveFile taxtime-quick-biz-loans.bna  --enrollId WebAppAdmin --enrollSecret DJY27pEnl16d

composer network update --archiveFile taxtime-quick-biz-loans.bna  --enrollId WebAppAdmin --enrollSecret DJY27pEnl16d

composer participant add -n 'taxtime-quick-biz-loans' -i admin -s Xurw3yU9zI0l -d '{"$class":"net.gunungmerapi.taxTimeQuickBizLoansNetwork.User", "emailAddress":"wajid.poernomo@gmail.com", "firstName":"Wajid", "lastName":"lastName" }'

composer participant add -n 'taxtime-quick-biz-loans' -i admin -s Xurw3yU9zI0l -d '{"$class":"net.gunungmerapi.taxTimeQuickBizLoansNetwork.User", "emailAddress":"garisson.keilor@gmail.com", "firstName":"Garrison", "lastName":"Keilor" }'

composer identity issue -n 'taxtime-quick-biz-loans' -i admin -s Xurw3yU9zI0l -u wpoernomo -a "net.gunungmerapi.taxTimeQuickBizLoansNetwork.User#wajid.poernomo@gmail.com"

composer identity issue -n 'taxtime-quick-biz-loans' -i admin -s Xurw3yU9zI0l -u gkeilor -a "net.gunungmerapi.taxTimeQuickBizLoansNetwork.User#garisson.keilor@gmail.com"

composer network ping -n 'taxtime-quick-biz-loans' -i WebAppAdmin -s DJY27pEnl16d

userID = wpoernomo
userSecret = DhbruqViTEXs

userID = gkeilor
userSecret = tXvjjdTBfyir

composer-rest-server -n taxtime-quick-biz-loans -p defaultProfile -i WebAppAdmin -s DJY27pEnl16d -N never -P 3000
composer-rest-server -n taxtime-quick-biz-loans -p defaultProfile -i gkeilor -s tXvjjdTBfyir -N never -P 3000