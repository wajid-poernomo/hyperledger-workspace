# hyperledger-workspace

composer archive create --archiveFile taxtime-quick-biz-loans.bna ---sourceType dir --sourceName .

composer network deploy --archiveFile taxtime-quick-biz-loans.bna  --enrollId WebAppAdmin --enrollSecret DJY27pEnl16d

composer network update --archiveFile taxtime-quick-biz-loans.bna  --enrollId WebAppAdmin --enrollSecret DJY27pEnl16d

composer participant add -n 'taxtime-quick-biz-loans' -i admin -s Xurw3yU9zI0l -d '{"$class":"net.gunun
gmerapi.taxTimeQuickBizLoansNetwork.User", "userId":"wp123", "firstName":"Wajid", "lastName":"Poernomo" }'

composer participant add -n 'taxtime-quick-biz-loans' -i admin -s Xurw3yU9zI0l -d '{"$class":"net.gunun
gmerapi.taxTimeQuickBizLoansNetwork.User", "userId":"gk123", "firstName":"garrison", "lastName":"keilor" }'

composer identity issue -n 'taxtime-quick-biz-loans' -i admin -s Xurw3yU9zI0l -u wpoernomo -a "net.gunungmerapi.taxTimeQuickBizLoansNetwork.User#wp123"

composer identity issue -n 'taxtime-quick-biz-loans' -i admin -s Xurw3yU9zI0l -u gkeilor -a "net.gunungmerapi.taxTimeQuickBizLoansNetwork.User#gk123"

composer network ping -n 'taxtime-quick-biz-loans' -i WebAppAdmin -s DJY27pEnl16d

   userID = wpoernomo
  userSecret = WvBDOibmaPGp

  userID = gkeilor
  userSecret = xaJAHcVmnGUA

composer-rest-server -n taxtime-quick-biz-loans -p defaultProfile -i WebAppAdmin -s DJY27pEnl16d -N never -P 3000
composer-rest-server -n taxtime-quick-biz-loans -p defaultProfile -i gkeilor -s tXvjjdTBfyir -N never -P 3000

composer identity issue -n 'taxtime-quick-biz-loans' -i admin -s Xurw3yU9zI0l -u nab123 -a "net.gu
nungmerapi.taxTimeQuickBizLoansNetwork.Bank#NAB123"

userID = nab123
userSecret = iyYQHkKZqYcD

composer identity issue -n 'taxtime-quick-biz-loans' -i admin -s Xurw3yU9zI0l -u joelan222 -a "net.gu
nungmerapi.taxTimeQuickBizLoansNetwork.TaxAccountant#joelan22"

  userID = joelan222
  userSecret = tByFmuXEjAUq