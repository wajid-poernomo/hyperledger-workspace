# hyperledger-workspace

<code>
composer archive create --archiveFile taxtime-quick-biz-loans.bna ---sourceType dir --sourceName .

composer network deploy --archiveFile taxtime-quick-biz-loans.bna  --enrollId WebAppAdmin --enrollSecret DJY27pEnl16d

composer network update --archiveFile taxtime-quick-biz-loans.bna  --enrollId WebAppAdmin --enrollSecret DJY27pEnl16d
</code>