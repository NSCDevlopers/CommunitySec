#!/bin/bash
echo "appConfigName: $1";
echo "Enter Key Vault Name: $2 ";
# read keyVaultName
httpHeader='https://'
suffix='.vault.azure.net'

linkToVault=$httpHeader+$2+$suffix

az appconfig kv set-keyvault -n $1 --key ServerName  --secret-identifier $linkToVault/Secrets/ServerName --yes
az appconfig kv set-keyvault -n $1 --key DB-Name  --secret-identifier $linkToVault/Secrets/DB-Name --yes
az appconfig kv set-keyvault -n $1 --key DB-Server-Admin-Password  --secret-identifier $linkToVault/Secrets/DB-Server-Admin-Password --yes
az appconfig kv set-keyvault -n $1 --key DB-Server-Admin-Login  --secret-identifier $linkToVault/Secrets/DB-Server-Admin-Login --yes
