$groupName = "RG_AzureBicepApplicationDeployment"
$serverName = "sql1357924680.database.windows.net"

Write-Output Set account to BellaFirstSubscription
az account set --subscription "BellaFirstSubscription"

az sql server firewall-rule create `
--name AllowHome `
--resource-group $groupName `
--server $serverName `
--start-ip-address 99.253.102.25 `
--end-ip-address 99.253.102.25