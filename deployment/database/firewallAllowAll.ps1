$groupName = "RG_AzureBicepApplicationDeployment"
$serverName = "sql1357924680.database.windows.net"

az sql server firewall-rule create `
--name AllowAll `
--resource-group $groupName `
--server $serverName `
--start-ip-address 0.0.0.0 `
--end-ip-address 255.255.255.255