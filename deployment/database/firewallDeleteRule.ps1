$groupName = "RG_AzureBicepApplicationDeployment"
$serverName = "sql1357924680.database.windows.net"
$ruleName = "AllowAll"
$subscriptionName = "BellaFirstSubscription"

az sql server firewall-rule delete `
--name $ruleName `
--resource-group $groupName `
--server $serverName `
--subscription $subscriptionName

az sql server update `
--name $serverName `
--enable-public-network false
