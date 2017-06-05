# business network definition

In order to speed up modeling process of business domain, this project contains model, permissions and transaction defintions.

This can be compiled to a business network definition file (.bna) with the following command:

composer archive create --archiveFile taxtime-quick-biz-loans.bna ---sourceType dir --sourceName .

this can be then deployed or updated to a running instance of hyperledger fabric:

composer network deploy --archiveFile taxtime-quick-biz-loans.bna  --enrollId WebAppAdmin --enrollSecret DJY27pEnl16d

composer network update --archiveFile taxtime-quick-biz-loans.bna  --enrollId WebAppAdmin --enrollSecret DJY27pEnl16d